class AddWordToLanguageRelation < ActiveRecord::Migration
  def change
    add_column :words, :language_id, :integer
  end
end
