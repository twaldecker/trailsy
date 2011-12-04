class Word < ActiveRecord::Base
  belongs_to :language

  validates :word, :presence => true
end
