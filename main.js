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
      let speed = 500;
      let autoSwitch = true;
      let autoSwitchSpeed = 4000;
  
      //get the first slide and add active class
      $(".slides").first().addClass("active");
      //hide all slides
      $(".slides").hide();
      //show first slide
      $(".active").show();

      // $("#next").on("click", nextSlide);   DOES NOT WORKING !!!!
      // $("#prev").on("click", prevSlide);   DOES NOT WORKING !!!!

    if(autoSwitch === true) {
      setInterval(nextSlide, autoSwitchSpeed)
    }

    //switch to next slide
    function nextSlide() {
      $(".active").removeClass("active").addClass("old-active");
          if($(".old-active").is(":nth-child(3)")) {
            $(".slides").first().addClass("active");
          } else {
            $(".old-active").next().addClass("active");
          }
          $(".old-active").removeClass("old-active");
          $(".slides").fadeOut(speed);
          $(".active").fadeIn(speed);
    }

    //switch to prev slide
    function prevSlide() {
      $(".active").removeClass("active").addClass("old-active");
        if($(".old-active").is(":first-child")) {
          $(".slides").last().addClass("active");
        } else {
          $(".old-active").prev().addClass("active");
        }
        $(".old-active").removeClass("old-active");
        $(".slides").fadeOut(speed);
        $(".active").fadeIn(speed);
    }
  });