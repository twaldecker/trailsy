require 'digest'

class User < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation
  attr_accessor :password
  before_save :encrypt_password
  before_save :verification_init

  validates_confirmation_of :password
  validates_presence_of :password, :on => :create
  validates_presence_of :email
  validates_uniqueness_of :email

  def verification_init
    # TODO: check the generation of the verification code
    self.verification_code = Digest::hexencode(Digest::SHA2.digest(self.email + self.password + rand.to_s + Time.current.to_s + 'reallybadsecret'))
    self.active = 0;
  end

  def check_verification(code)
    if code == self.verification_code
      self.active = 1;
    end
  end


  def self.authenticate(email, password)
    user = find_by_email(email)
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end

  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end
end
