# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20111218124258) do
  create_table "connections", :force => true do |t|
    t.integer  "lang1_id",   :null => false
    t.integer  "lang2_id",   :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "connections", ["lang1_id"], :name => "index_connections_on_lang1_id"
  add_index "connections", ["lang2_id"], :name => "index_connections_on_lang2_id"

  create_table "languages", :force => true do |t|
    t.string   "language"
    t.string   "code",       :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "email"
    t.string   "password_hash"
    t.string   "password_salt"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "words", :force => true do |t|
    t.string   "word",        :null => false
    t.string   "example"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "language_id", :null => false
  end

  add_index "words", ["language_id"], :name => "index_words_on_language_id"
  add_index "words", ["word"], :name => "index_words_on_word"

end
