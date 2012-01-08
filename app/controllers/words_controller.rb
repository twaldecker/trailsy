class WordsController < ApplicationController
  before_filter :logged_in?, :only => [:update, :create, :destroy]
  # only respond do json calls
  respond_to :json

  # GET /words.json
  # This action responds with a list of all words
  def index
    @words = Word.all
    @words.each do |word|
      self.addConnectionDetailsTo word
    end
    respond_with @words, :include => [:language, :translations]
  end

  # GET /words/1.json
  # This action returns the json data for a specific word
  def show
    @word = Word.find(params[:id])
    self.addConnectionDetailsTo @word
    respond_with @word, :include => [:language, :translations]
  end

  # GET /words/search?word=ab&lang=2
  # This action returns a json array with words starting with a parameter
  def search
    
    @words = Word.find_starting_with(params[:word]) #.and_language_id(params[:fromLang])
    
    if(params[:fromLang] != 1)
      @words.and_language_id params[:fromLang]
    end
    
    #if(params[:toLang] != 1)
    #  @words.add_translations_to params[:toLang]
    #end

    if @words
      render :json => @words, :include => [:language, :translations]
    else
      render :json => {}
    end
  end

  # PUT /words/1.json
  def update
    @word = Word.find(params[:id])
    filter_params(params)
    respond_to do |format|
      if @word.updateWord(params)
        format.json { head :ok }
      else
        format.json { render :json => @word.errors, :status => :unprocessable_entity }
      end
    end
  end

#-- Autogenerated Actions following. remove them if not needed------
  # GET /words/new.json
  def new
    @word = Word.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render :json => @word }
    end
  end

  # GET /words/1/edit
  def edit
    @word = Word.find(params[:id])
  end

  # POST /words.json
  def create
    filter_params(params)
    @oldWord = Word.where(:word => params[:word]).where(:language_id => params[:language_id]).first
    if @oldWord
      if @oldWord.update_attributes(params)
        render :json => @oldWord, :status => :ok, :location => @oldWord
      else
        render :json => @oldWord.errors, :status => :unprocessable_entity
      end
      return
    end

    @word = Word.new(params)

    if @word.save
      render :json => @word, :status => :created, :location => @word
    else
      render :json => @word.errors, :status => :unprocessable_entity
    end
  end


  def addConnectionDetailsTo(word)
    word.translations.each do |translation|
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


  # DELETE /words/1.json
  def destroy
    @word = Word.find(params[:id])
    @word.destroy

    respond_to do |format|
      format.html { redirect_to words_url }
      format.json { head :ok }
    end
  end
end
