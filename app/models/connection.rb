class Connection < ActiveRecord::Base
  belongs_to :lang1, :class_name => "Word"
  belongs_to :lang2, :class_name => "Word"
  
  acts_as_voteable
end
