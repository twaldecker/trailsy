class UserMailer < ActionMailer::Base
  default :from => "noreply@transi.dev"

  def verification_mail(user, host)
    @url = host+user.get_verification_url
    mail(:to => user.email, :subject => t(:verificationEmailSubject))
  end
end
