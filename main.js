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
      let i = 0;
      let images = [];
      let time = 3000;
      let speed = 500;

      images[0] = "./images/dog-3275593_640.jpg";
      images[1] = "./images/poly-3259432_640.jpg";
      images[2] = "./images/dog-3265713_640.jpg";
      images[3] = "./images/poly-3275592_640.jpg"

      function changeImg() { 
        let imgSrc = images[i];
        $(".responsive").attr("src", imgSrc);

        if(i < images.length - 1) {
          i++;

        } else {
          i = 0;
        }
        setTimeout(changeImg, time);
      }
      
      window.onload = changeImg;
  });