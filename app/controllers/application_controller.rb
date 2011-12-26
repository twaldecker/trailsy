class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user
  helper_method :logged_in?
  
  private

  def logged_in?
    logger.debug "userid: #{session[:user_id]}"
    if session[:user_id]
      true
    else
      render:json =>  {:error => :notLoggedIn}, :status => :unauthorized
    end
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
