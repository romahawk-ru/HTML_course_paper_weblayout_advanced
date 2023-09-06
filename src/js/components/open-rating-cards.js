// ========================================================
import $ from "jquery";

// реализация открытия дополнительных товаров
$(document).ready(function() {
  var list = $(".rating__card--step");
  var button = $("#rating-btn");
  var numInList = list.length;

  if ($(window).width() <= 1280) {
    var numToShow = 6; //сколько показывать элементов при разрешении экрана 576px и менее
  } else if ($(window).width() > 1280) {
    var numToShow = 8; //сколько показывать элементов при разрешении экрана более 576px
  }

  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
  button.click(function() {
    var showing = list.filter(':visible').length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    var nowShowing = list.filter(':visible').length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });
});

// ========================================================
