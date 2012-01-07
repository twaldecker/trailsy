class SessionsController < ApplicationController
  
  # this is the login action.
  # if the process was successful, it returns a json string
  # and a HTTP 200.
  # if it was unsuccessful it returns a json string and a
  # HTTP 401 unauthorized
  def create
    @user = User.authenticate(params[:email], params[:password])
    if @user
      logger.debug "log in"
      session[:user_id] = @user.id
      render :json => {:message => :logged_in}
    else
      render :json => {:message => :unauthorized}, :status => :unauthorized
    end
  end
  
  # this action destroys the user session on the server.
  # it answers a json string.
  def destroy
    logger.debug "log out"
    session[:user_id] = nil
    render :json => {:message => :logged_out}
  end
end
