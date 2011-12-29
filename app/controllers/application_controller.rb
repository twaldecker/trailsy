class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user
  helper_method :logged_in?
  helper_method :filter_params
  
  private

  def logged_in?
    if session[:user_id]
      true
    else
      render:json =>  {:error => :notLoggedIn}, :status => :unauthorized
    end
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def filter_params(params)
    params.delete(:translation)
    params.delete(:word_id)
    params.delete(:action)
    params.delete(:controller)
    params.delete(:rating)
    params.delete(:user_voted)
  end
end
