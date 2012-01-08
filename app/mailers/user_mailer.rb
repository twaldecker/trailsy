class UserMailer < ActionMailer::Base
  default :from => "noreply@transi.dev"

  def verification_mail(user, host)
    @user = user
    @host = host
    mail(:to => @user.email, :subject => t(:verificationEmailSubject))
  end
end
