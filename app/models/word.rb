class Word < ActiveRecord::Base
  belongs_to :language
  
  has_many :connections, :class_name => "Connection", :foreign_key => :lang1_id
  has_many :translations, :through  => :connections, :source => :lang2
  
  accepts_nested_attributes_for :translations
  
  validates :word, :presence => true
  
  # this method returns words starting with the parameter word.
  def Word.find_starting_with word, lang
    return Word.find_by_sql(['select * from words as w1 '\
                            'join connections on w1.id = connections.lang1_id '\
                            'join words as w2 on w2.id = connections.lang2_id '\
                            'where w1.word like ? and w1.language_id != ? and w2.language_id = ?',  word + '%', lang, lang])
  end
  
  

  #update a single word including translations
  def updateWord(params)
    success = false
    params[:translations].each_index do |key|
      translation = params[:translations][key]
      @translation = Word.find_by_word(translation[:word])
      if @translation
        @translation.update_attributes(translation)
        params[:translations][key] = @translation
      else
        @translation = self.translations.create(translation)
        params[:translations][key] = @translation
      end
    end
    if self.update_attributes(params[:all])
      success = true
    end
    return success
  end

end
