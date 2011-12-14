class Word < ActiveRecord::Base
  belongs_to :language
  
  has_many :connections, :class_name => "Connection", :foreign_key => :lang1_id
  has_many :translations, :through  => :connections, :source => :lang2
  
  accepts_nested_attributes_for :translations
  
  validates :word, :presence => true

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
