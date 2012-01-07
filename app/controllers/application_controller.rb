class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user
  helper_method :logged_in?
  helper_method :filter_params
  before_filter :set_locale

  def set_locale
    logger.debug "* Accept-Language: #{request.env['HTTP_ACCEPT_LANGUAGE']}"
    I18n.locale = extract_locale_from_accept_language_header
    logger.debug "* Locale set to '#{I18n.locale}'"
  end


  private

  def extract_locale_from_accept_language_header
    request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
  end
  def logged_in?
    if session[:user_id]
      true
    else
      render :json =>  {:status => :unauthorized}
    end
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def filter_params(params)
    params.delete(:translation)
    params.delete(:word_id)
    params.delete(:connection_id)
    params.delete(:action)
    params.delete(:controller)
    params.delete(:rating)
    params.delete(:user_voted)
  end


end
