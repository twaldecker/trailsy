class UserMailer < ActionMailer::Base
  default :from => "noreply@transi.dev"

  def verification_mail(user, host)
    @user = user
    @host = host
    mail(:to => @user.email, :subject => 'Email verification')
  end
  
  private
  
  #see: http://blog.andischacke.com/2009/10/localized-actionmailer-templates-for.html
  # we override the template_path to render localized templates (since rails does not support that :-( )
  # This thing is not testable since you cannot access the instance of a mailer...
  def initialize_defaults(method_name)
    super
    @template = "#{I18n.locale}_#{method_name}"
  end
end
