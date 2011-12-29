class TranslationsController < ApplicationController
  before_filter :logged_in?, :only => [:update, :create]
  def index
    @word = Word.find(params[:word_id])
    if @word
      render :json => @word.translations
    else
      render :json => {:message => 'wordNotFound'}, :status => :not_found
    end

  end

  def show
    @word = Word.find(params[:word_id])
    @translation = @word.translations.find(params[:id])
    if @translation
      render :json => @translation
    else
      render :json => {:message => 'wordNotFound'}, :status => :not_found
    end
  end

  def update
    @translation = Word.find(params[:id])
    filter_params(params)
    if @translation.update_attributes(params)
      render :json => @translation
    else
      render :json => {:message => 'errorUpdating'}, :status => :not_acceptable
    end
  end

  def create
    @word = Word.find(params[:word_id])
    filter_params(params)
    @translation = @word.addOrUpdateTranslation(params)

    if @translation.nil?
      render :json => {:message => 'errorCreating'}, :status => :not_acceptable
    else
      render :json => @translation, :status => :created
    end

  end
end
