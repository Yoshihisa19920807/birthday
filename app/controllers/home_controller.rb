class HomeController < ApplicationController
  def index
    @current_time = Time.current
    p "____@current_time"
    p @current_time
  end
end
