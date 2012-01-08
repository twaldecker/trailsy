require 'test_helper'

class UserTest < ActiveSupport::TestCase

  test "creating a user with random email address" do
    @user = User.new(:email => 'email'+rand(200).to_s+'@address.de', :password => 'secret')
    assert @user.save
  end
  
  test "creating two users with the same email address should fail" do
    @r = rand(200).to_s
    @user = User.new(:email => 'esmail'+@r+'@address.de', :password => 'secret')
    assert @user.save
    @user = User.new(:email => 'esmail'+@r+'@address.de', :password => 'secret')
    assert !@user.save
  end
  
  test "creating a user with a malformed email address should not save" do
    @user = User.new(:email => 'notanemail', :password => 'secret')
    assert !@user.save
  end
  
  test "creating a user with a shorter than 6 character password should fail" do
    @r = rand(200).to_s
    @user = User.new(:email => 'ebmail'+@r+'@address.de', :password => 'gehei')
    assert !@user.save
  end
  
  test "new user is inactive" do
    @r = rand(200).to_s
    @email = 'ebgdierl'+@r+'@address.de'
    @user = User.new(:email => @email, :password => 'geheim')
    assert @user.save
    @user = User.find_by_email @email
    assert !@user.active
  end
  
  test "find user by email, password is hashed" do
    @r = rand(200).to_s
    @email = 'ebgdidfl'+@r+'@address.de'
    @pass = 'geheim'
    @user = User.new(:email => @email, :password => @pass)
    assert @user.save
    @user = User.find_by_email(@email)
    assert (@user.email == @email)
    assert !(@user.password == @pass)
  end
  
  test "create a user check if he is inactive then verificate the email address and check if he is active" do
    @r = rand(200).to_s
    @email = 'ctive'+@r+'@address.de'
    @pass = 'geheim'
    @user = User.new(:email => @email, :password => @pass)
    assert @user.save
    assert User.find_by_email @email
    assert !@user.active
    @user = User.find_by_email @email
    @code = @user.verification_code  
    assert (@code.length == 64)
    assert @user.check_verification(@code);
    @user = User.find_by_email @email
    assert @user.active
  end
  
  test "dont activate a user with a wrong verification code" do
    @r = rand(200).to_s
    @email = 'cgfdtive'+@r+'@address.de'
    @pass = 'geheim'
    @user = User.new(:email => @email, :password => @pass)
    assert @user.save
    assert !@user.active
    assert !@user.check_verification('wrongcode')
    assert !@user.active
  end
  
  test "authenticate a user which is not active" do
    @r = rand(200).to_s
    @email = 'cgfdtisdfe'+@r+'@address.de'
    @pass = 'geheim'
    @user = User.new(:email => @email, :password => @pass)
    assert @user.save
    assert !@user.active
    assert !User.authenticate(@email, @pass)
  end 
  
  test "authenticate a user which is active" do
    #data:
    @r = rand(200).to_s
    @email = 'dasfsf'+@r+'@address.de'
    @pass = 'geheim'

    #create the testuser:
    @user = User.new(:email => @email, :password => @pass)
    assert @user.save

    #check if he is inactive and can not authenticate:
    @user = User.find_by_email @email
    assert !@user.active
    assert !User.authenticate(@email, @pass)
    
    #set him active
    @user.active = true;
    assert @user.save
    
    assert User.authenticate(@email, @pass)
  
  end
  
  test "authenticate a user who verified the email address" do
    #data:
    @r = rand(200).to_s
    @email = 'dasfsf'+@r+'@address.de'
    @pass = 'geheim'

    #create the testuser:
    @user = User.new(:email => @email, :password => @pass)
    assert @user.save

    #check if he is inactive and can not authenticate:
    @user = User.find_by_email @email
    assert !@user.active
    assert !User.authenticate(@email, @pass)

    #get the code and call the check method:
    @code = @user.verification_code  
    assert @user.check_verification(@code)
    
    #the user should now be active. try to authenticate:
    @user = User.find_by_email(@email)
    assert @user.active
    assert User.authenticate(@email, @pass)
  end
end
