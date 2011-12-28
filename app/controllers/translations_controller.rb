class TranslationsController < ApplicationController
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
    @word = Word.find(params[:word_id])
    @translation = @word.translations.find(params[:id])
    params.delete(:action)
    params.delete(:controller)
    if @translation.update_attributes(params)
      render :json => @translation
    else
      render :json => {:message => 'errorUpdating'}, :status => :not_acceptable
    end
  end

  def create
    @word = Word.find(params[:word_id])
    params.delete(:action)
    params.delete(:controller)
    params.delete(:word_id)
    if @word.addOrUpdateTranslation(params)
      render :json => {:message => 'updated'}, :status => :created
    else
      render :json => {:message => 'errorUpdating'}, :status => :unprocessable_entity
    end

  end
end
