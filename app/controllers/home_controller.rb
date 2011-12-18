class HomeController < ApplicationController
  respond_to :html
  def index
    @languages = Language.all
    respond_with @languages
  end

end
