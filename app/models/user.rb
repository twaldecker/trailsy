require 'digest'

class User < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation
  attr_accessor :password
  before_create :encrypt_password
  before_create :verification_init

  validates_confirmation_of :password, :message => 'password_notMatch', :on => :create
  validates :password, :length => { :minimum => 6, :message => 'password_tooShort' }, :on => :create
  validates_presence_of :password, :on => :create
  validates_presence_of :email
  validates_uniqueness_of :email, :message => 'email_notUnique'
  validates_format_of :email, :with => /^([^\s]+)((?:[-a-z0-9]\.)[a-z]{2,})$/i, :message => 'email_malformed'
  
  acts_as_voter

  def get_verification_url
    '/#validation/'+self.id.to_s+'/code/'+self.verification_code
  end

  def verification_init
    # TODO: check the generation of the verification code
    self.verification_code = Digest::hexencode(Digest::SHA2.digest(self.email + self.password + rand.to_s + Time.current.to_s + 'reallybadsecret'))
    self.active = 0
  end

  def check_verification(code)
    if code == self.verification_code
      self.active = 1
      self.save
    end
  end

  def self.authenticate(email, password)
    @user = find_by_email(email)
    if ( @user && (@user.password_hash == BCrypt::Engine.hash_secret(password, @user.password_salt)) && @user.active )
      @user
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
