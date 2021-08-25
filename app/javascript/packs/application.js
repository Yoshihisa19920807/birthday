// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "@fortawesome/fontawesome-free/css/all"
//= require jquery3
//= require popper
//= require bootstrap
require("jquery")
// require("jquery-ui-dist/jquery-ui");

window.jQuery = $;
window.$ = $;

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$(document).on('turbolinks:load', function(){
  // const birthday = Time
  // function show_time(){
  //   var birthday = (new Date("September 4, 2021 00:00:00"))
  //   console.log(birthday.toLocaleString())
  //   var current_time = (new Date())
  //   console.log(current_time.toLocaleString())

  //   var time_left = birthday.getTime()  - current_time.getTime() 
  //   console.log(time_left)
  // }
  // setInterval(show_time(), 1000);
  var countDownDate = new Date("Aug 4, 2021 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Happy birthday Cid!!!!";
      document.getElementById("hb").classList.remove("hide");
    }
  }, 1000);

})
