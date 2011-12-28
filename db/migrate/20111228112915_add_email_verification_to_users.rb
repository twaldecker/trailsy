class AddEmailVerificationToUsers < ActiveRecord::Migration
  def change
    add_column :users, :verification_code, :string
    add_column :users, :active, :boolean
  end
end
