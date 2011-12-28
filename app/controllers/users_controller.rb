class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      render :json => {:message => :signed_up}
    else
      render :json => {:message => :error}
    end
  end
end
