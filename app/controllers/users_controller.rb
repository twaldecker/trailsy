class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      UserMailer.verification_mail(@user).deliver
      render :json => {:message => :signed_up}
    else
      render :json => @user.errors, :status => :unprocessable_entity
    end
  end

  # Requesting a email validation with the appropriate code
  def validate_email
    @user = User.find(params[:id])
    if @user.check_verification(params[:code])
      render :json => {:message => :validation_success}
    else
      render :json => {:message => :validation_failed}, :status => :unprocessable_entity
    end
  end
end
