require 'test_helper'

class WordTest < ActiveSupport::TestCase
  test "find starting with chunk" do
    @r = rand(200).to_s
    @word = Word.new(:word => 'Erstertest'+@r, :language_id => 3)
    assert @word.save
    @res = Word.find_starting_with 'Erster'
    assert @res
    print @res.size 
  end
end
