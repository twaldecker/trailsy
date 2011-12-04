class CreateWords < ActiveRecord::Migration
  def change
    create_table :words do |t|
      t.string :word
      t.string :example

      t.timestamps
    end
  end
end
