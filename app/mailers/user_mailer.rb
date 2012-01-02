class UserMailer < ActionMailer::Base
  default :from => "noreply@transi.dev"

  def verification_mail(user)
    @user = user
    mail(:to => @user.email, :subject => 'Email verification')
  end
end
