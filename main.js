$(function() {
    let welcomeTxt = $('#text');
    let welcomeTxtLetters = $('#text').text().split("");
    $('#text').text(""); //clear the welcome text msg
    $.each(welcomeTxtLetters, function(idx, elem) {  //loop through the letters 
      let createSpan = $("<span/>").text(elem).css({
        opacity: 0
      });
      createSpan.appendTo(welcomeTxt);
      createSpan.delay(idx * 70);
      createSpan.animate({
        opacity: 1
      }, 1100);
      
    });
  });

  $(function() {
      
  });