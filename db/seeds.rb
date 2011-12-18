# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Emanuel', :city => cities.first)

#please run rake db:reset
#rake db:seed will duplicate the words
langs   = Language.create([{:code => 'en', :language => 'English'},
                           {:code => 'de', :language => 'Deutsch'},
                           {:code => 'mk', :language => 'Makedonski'}])

screen = Word.create({   :word        => 'Screen',
                         :example     => 'The screen is nice',
                         :language_id => 1})
screen.updateWord({:translations => [
                      {  :word        => 'Monitor',
                         :example     => 'Der Monitor hat eine gute Auflösung',
                         :language_id => 2},
                       { :word        => 'Ekran',
                         :example     => 'Ekranot e mnogu dobar',
                         :language_id => 3},
                       { :word        => 'Bildschirm',
                         :example     => 'Der Bildschirm hat eine gute Auflösung',
                         :language_id => 2}
                      ]})
