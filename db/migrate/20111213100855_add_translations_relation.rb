class AddTranslationsRelation < ActiveRecord::Migration
  def change
    create_table :connections do |t|
      t.integer :lang1_id
      t.integer :lang2_id

      t.timestamps
    end
  end

end
