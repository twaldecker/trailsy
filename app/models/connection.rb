class Connection < ActiveRecord::Base
  belongs_to :lang1, :class_name => "Word"
  belongs_to :lang2, :class_name => "Word"
end
