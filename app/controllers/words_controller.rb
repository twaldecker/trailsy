class WordsController < ApplicationController
  # only respond do json calls
  respond_to :json

  # GET /words.json
  # This action responds with a list of all words
  def index
    @words = Word.all
    respond_with @words, :include => [:language, :translations]
  end

  # GET /words/1.json
  # This action returns the json data for a specific word
  def show
    @word = Word.find(params[:id])
    respond_with @word, :include => [:language, :translations]
  end

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
    @word = Word.new(params[:word])

    respond_to do |format|
      if @word.save
        format.html { redirect_to @word, :notice => 'Word was successfully created.' }
        format.json { render :json => @word, :status => :created, :location => @word }
      else
        format.html { render :action => "new" }
        format.json { render :json => @word.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /words/1.json
  def update
    @word = Word.find(params[:id])
    respond_to do |format|
      if @word.updateWord(params)
        #format.html { redirect_to @word, :notice => 'Word was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @word.errors, :status => :unprocessable_entity }
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
