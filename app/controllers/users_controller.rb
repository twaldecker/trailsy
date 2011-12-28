class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      render :json => {:message => :signed_up}
      #TODO: email send here
    else
      render :json => {:message => :error}
    end
  end

  def validate_email
    @user = User.find(params[:user])
    if @user.check_verification(params[:code])
      render :json => {:message => :validation_success}
      #redirect_to('root_url');
    else
      render :json => {:message => :validation_failed}
    end
  end
end
