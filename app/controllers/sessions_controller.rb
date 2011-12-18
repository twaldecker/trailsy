class SessionsController < ApplicationController
  def new
  end
  
  def create
    user = User.authenticate(params[:email], params[:password])
    if user
      session[:user_id] = user.id
      redirect_to root_url, :notice => "Logged in!"
    else
      flash.now.alert = "Invalid email or password"
      render "new"
    end
    logger.debug "userid: #{session[:user_id]}"
  end
  
  def destroy
    logger.debug "log out"
    session[:user_id] = nil
    redirect_to root_url, :notice => "logged out"
  end
end
