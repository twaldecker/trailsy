class Word < ActiveRecord::Base
  belongs_to :language
  
  has_many :connections, :class_name => "Connection", :foreign_key => :lang1_id
  has_many :translations, :through  => :connections, :source => :lang2
  
  accepts_nested_attributes_for :translations
  
  validates :word, :presence => true
  
  # this method returns words starting with the parameter word.
  def Word.find_with params
    from = params[:fromLang].to_i
    to   = params[:toLang].to_i
    word = params[:word].to_s.downcase

    result = select('distinct words.*').
              joins('left join connections on (words.id = connections.lang1_id)').
              joins('left join words as w2 on (w2.id = connections.lang2_id)').
              where('lower(words.word) like ?', word + '%')

    if from != 1
      result = result.where(:language_id => from)
    end

    if to != 1
      result = result.where('w2.language_id' => to)
    end
    logger.info result.to_sql
    return result
  end
  

  def addOrUpdateTranslation(translation)
    success = true
    Word.transaction do
      begin
        @translation = Word.where(:word => translation[:word]).where(:language_id => translation[:language_id]).first
        if @translation
          @ownTranslation = self.translations.find(@translation.id)
          if @ownTranslation.nil?
            Connection.create({:lang1_id => self.id, :lang2_id => @translation.id})
          end
          @translation.update_attributes(translation)
        else
          @translation = self.translations.create(translation)
        end
        #add opposite translation if not present
        @oppositeTranslation = @translation.translations.find_by_word(self.word)
        if @oppositeTranslation.nil?
          Connection.create({:lang1_id => @translation.id, :lang2_id => self.id})
        end
      rescue Exception => e
        logger.error "Error updating word: #{e}"
        success = false
      end
      raise ActiveRecord::Rollback if !success
    end
    return @translation
  end

  #update a single word including translations
  def updateWord(params)
    success = true
    logger.debug "params: #{YAML.dump(params)}"
    Word.transaction do
      begin
        if params[:translations] && !params[:translations].empty?
          params[:translations].each_index do |key|
            translation = params[:translations][key]
            self.addOrUpdateTranslation(translation)
          end
        end
        params.delete(:translations)
        self.update_attributes(params)

      rescue Exception => e
        logger.error "Error updating word: #{e}"
        success = false
      end
      raise ActiveRecord::Rollback if !success
    end
    return success
  end

end
