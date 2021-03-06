class UsersController < ApplicationController
  def create
    @user = User.new(params[:user])
    if @user.save
      host = 'http://'+request.env["HTTP_HOST"]
      UserMailer.verification_mail(@user, host).deliver
      render :json => {:message => :signed_up}
    else
      render :json => @user.errors, :status => :unprocessable_entity
    end
  end

  # Requesting a email validation with the appropriate code
  def validate_email
    @user = User.find(params[:id])
    if @user.check_verification(params[:code])
      render :json => {:message => :validation_success }
    else
      render :json => {:message => :validation_failed}, :status => :unprocessable_entity
    end
  end
end
