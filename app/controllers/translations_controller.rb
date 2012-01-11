class TranslationsController < ApplicationController
  before_filter :logged_in?, :only => [:update, :create]
  def index
    @word = Word.find(params[:word_id])
    self.addConnectionDetailsTo @word
    if @word
      render :json => @word.translations
    else
      render :json => {}, :status => :not_found
    end

  end

  def show
    @word = Word.find(params[:word_id])
    @translation = @word.translations.find(params[:id])
    self.addConnectionDetailsTo @translation
    if @translation
      render :json => @translation
    else
      render :json => {}, :status => :not_found
    end
  end

  def update
    @translation = Word.find(params[:id])
    connection_id = params[:connection_id]
    user_voted   = params[:user_voted]
    filter_params(params)
    @translation.update_attributes(params)
    self.addConnectionDetailsTo @translation

    if connection_id
      @user        = current_user
      @connection  = Connection.find(connection_id)
      if user_voted != @translation['user_voted']
        @user.clear_votes @connection
        if user_voted == 1
          @user.vote_for @connection
        elsif user_voted == -1
          @user.vote_against @connection
        end
        @translation['user_voted'] = user_voted
        @translation['rating'] = @connection.votes_for - @connection.votes_against
      end
      if @translation
        render :json => @translation
      else
        render :json => {}, :status => :not_acceptable
      end
    end
  end

  def create
    @word = Word.find(params[:word_id])
    filter_params(params)
    @translation = @word.addOrUpdateTranslation(params)

    if @translation.nil?
      render :json => {}, :status => :not_acceptable
    else
      self.addConnectionDetailsTo @translation
      render :json => @translation, :status => :created
    end

  end

  #add votings to translation
  def addConnectionDetailsTo(translation)
    @connection = Connection.find_by_lang2_id translation.id
    translation['rating'] = @connection.votes_for - @connection.votes_against
    translation['connection_id'] = @connection.id
    @user = current_user
    if @user
      if @user.voted_for? @connection
        translation['user_voted'] = 1
      elsif @user.voted_against? @connection
        translation['user_voted'] = -1
      else
        translation['user_voted'] = 0
      end
    end
  end
end
