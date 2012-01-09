class LanguagesController < ApplicationController
  def index
    @languages = Language.all
    if @languages
      render :json => @languages
    else
      render :json  => {}, :status => :not_found
    end
  end
end
