class SessionsController < ApplicationController
  def new
  end
  
  def create
    user = User.authenticate(params[:email], params[:password])

    if user
      session[:user_id] = user.id
      render :json => {:message => :logged_in}
    else
      render :json => {:status => :unauthorized}
    end
  end
  
  def destroy
    logger.debug "log out"
    session[:user_id] = nil
    render :json => {:message => :logged_out}
  end
end
