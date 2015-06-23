class UsersController < ApplicationController

  def new
    @user = User.new
#    @user = User.find(:all)
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_url,:notice => "signed up!"
    else
      render "new"
    end

  end

  def show


  end




   private
    def user_params
      params.require(:user).permit(:email,:password,:password_confirmation,:name)
    end

end
