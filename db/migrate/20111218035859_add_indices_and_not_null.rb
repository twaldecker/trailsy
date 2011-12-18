class AddIndicesAndNotNull < ActiveRecord::Migration
  def up
    change_column :connections, :lang1_id, :integer, :null => false
    change_column :connections, :lang2_id, :integer, :null => false
    change_column :words, :word, :string, :null => false
    change_column :words, :language_id, :integer, :null => false
    change_column :languages, :code, :string, :null => false
    add_index(:connections, :lang1_id)
    add_index(:connections, :lang2_id)
    add_index(:words, :word)
    add_index(:words, :language_id)
  end

  def down
    change_column :connections, :lang1_id, :integer
    change_column :connections, :lang2_id, :integer
    change_column :words, :word, :string
    change_column :words, :language_id, :integer
    change_column :languages, :code, :string
    remove_index(:connections, :lang1_id)
    remove_index(:connections, :lang2_id)
    remove_index(:words, :word)
    remove_index(:words, :language_id)
  end
end
