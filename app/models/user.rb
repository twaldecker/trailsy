require 'digest'

class User < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation
  attr_accessor :password
  before_save :encrypt_password
  before_create :verification_init

  validates_confirmation_of :password, :message => 'password_notMatch'
  validates :password, :length => { :minimum => 6, :message => 'password_tooShort' }, :on => :create
  validates_presence_of :password, :on => :create
  validates_presence_of :email
  validates_uniqueness_of :email, :message => 'email_notUnique'
  validates_format_of :email, :with => /^([^\s]+)((?:[-a-z0-9]\.)[a-z]{2,})$/i, :message => 'email_malformed'
  
  acts_as_voter

  # This method returns the url for the verification process
  def get_verification_url
    'http://localhost:3000/#validation/'+self.id.to_s+'/code/'+self.verification_code
  end

  # This method generates a verification code and sets the user to inactive
  def verification_init
    self.verification_code = Digest::hexencode(Digest::SHA2.digest(self.email + self.password + rand.to_s + Time.current.to_s + 'reallybadsecret'))
    self.active = 0;
  end

  def get_verification()
    self.verification_code
  end

  # This method checks if the provided code matches the verification code and sets the user active
  def check_verification code
    if (code == self.verification_code)
      self.active = 1;
      self.save
    end
  end

  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end
  
  def self.authenticate(email, password)
    @user = find_by_email(email)
    if @user and @user.active and @user.password_hash == BCrypt::Engine.hash_secret(password, @user.password_salt)
      return @user
    else
      return nil
    end
  end
end
