class Word < ActiveRecord::Base
  belongs_to :language
  
  has_many :connections, :class_name => "Connection", :foreign_key => :lang1_id
  has_many :translations, :through  => :connections, :source => :lang2
  
  accepts_nested_attributes_for :translations
  
  validates :word, :presence => true
  
  # this method returns words starting with the parameter word.
  def Word.find_starting_with word, lang
    return Word.find_by_sql(['select distinct w1.* from words as w1 '\
                            'join connections on w1.id = connections.lang1_id '\
                            'join words as w2 on w2.id = connections.lang2_id '\
                            'where w1.word like ? and w1.language_id != ? and w2.language_id = ?',  word + '%', lang, lang])
  end
  

  def addOrUpdateTranslation(translation)
    success = true
    Word.transaction do
      begin
        @translation = Word.find_by_word(translation[:word])
        if @translation
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
    return success
  end

  #update a single word including translations
  def updateWord(params)
    success = true
    logger.debug "params: #{YAML.dump(params)}"
    Word.transaction do
      begin
        if !params[:translations].empty?
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
