//MAKE THE MAGIC HAPPEN

//Coded by Daniel (Apples code)

const apples = ["#apple1", "#apple2", "#apple3"];

$(document).ready(function () {

  apples.forEach(function(item){
    var ranLeft = Math.floor(Math.random() * 20);
    var ranTop = Math.floor(Math.random() * 20);
    $(item).css({
      left: ranLeft + 60 + '%',
      top: ranTop + 40 + '%',
      'z-index': '2'
    })
  });
  
})

function rotateApple(apple){
  $(apple).css('transform', 'rotate(20deg)')
  setTimeout(function(){
    $(apple).css('transform', 'rotate(-20deg)')
  },200)
  setTimeout(function(){
    $(apple).css('transform', 'rotate(20deg)')
  },400)
  setTimeout(function(){
    $(apple).css('transform', 'rotate(20deg)')
  },600)
}

$("#apple1").click(function(){
  rotateApple("#apple1"); 
  setTimeout(function(){
    $("#apple1").animate({
      top: $(".basket").position().top + 150 + 'px',
      left: $(".basket").position().left + 40 + 'px',
    })
    $("#apple1").css('transform', 'rotate(0deg)')
  }, 600)
})

$("#apple2").click(function(){
  rotateApple("#apple2");
  setTimeout(function(){
    $("#apple2").animate({
      top: $(".basket").position().top + 140 + 'px',
      left: $(".basket").position().left + 60 + 'px'
    })
    $("#apple2").css('transform', 'rotate(0deg)')
  }, 600)
})

$("#apple3").click(function(){
  rotateApple("#apple3");
  setTimeout(function(){
    $("#apple3").animate({
      top: $(".basket").position().top + 160 + 'px',
      left: $(".basket").position().left + 80 + 'px'
    })
    $("#apple3").css('transform', 'rotate(0deg)')
  }, 600)
})

//Coded by Tadeas

const width = $("window").width();
const heigth = $("window").height();

let curPosX = $("#butterfly").offset().left;
let curPosY = $("#butterfly").offset().top;

function getRandomInt(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const clientWidth = $("window");
$(document).ready(function () {
  $("#butterfly").mouseover().animate({
    left: "+=getRandomInt(width-curPosX,-curPosX)",
    top: "+=getRandomInt(width-curPosY,-curPosY)"
  }, fast);

  $("#butterfly").animate({
    left: "+=(getRandomInt(30,-30))",
    top: "+=getRandomInt(30,-30)"
  }, fast);
});


//Coded by Luca

$(document).ready(function () {
  let clickCount = 0;

  $(".waterdrop").hide();

  $('#wateringcan').click(function () {
    clickCount++;

    if (clickCount % 2 === 1) {

      $(this).css('transform', 'rotate(-45deg)');
      $(".waterdrop").show();
      if (clickCount < 2)
        pour($('.waterdrop'));
    } else {

      $(this).css('transform', 'rotate(0deg)');
      $(".waterdrop").hide();
      $('#wateringcan').css({
        top: 60 + "%",
        left: 40 + "%"
      });

    }
  });

  function pour(waterdrop) {
    const wateringcanPosition = $('#wateringcan').position();
    const startV = wateringcanPosition.top + Math.random() * 20 + 50;
    const startH = wateringcanPosition.left + Math.random() * 20 - 10;
    const speed = Math.random() * 1200 + 800;
    const endV = 1000;

    waterdrop.css({
      top: startV + 'px',
      left: startH + 'px',
      visibility: 'visible'
    });

    $({
      pos: startV
    }).animate({
      pos: endV
    }, {
      duration: speed,
      step: function (now) {
        waterdrop.css({
          top: now + 'px'
        });
      },
      complete: function () {
        waterdrop.css({
          visibility: 'hidden'
        });
        pour(waterdrop);
      }
    });
  }
});





//Coded by Jan

$(document).ready(function(){
  var prevX = 0; // Variable to store the previous x-coordinate
  var $imgElement = $('#net-image');
  $(document).keypress(function(event){
      if(event.key === '1'){
          $imgElement.attr('src', '../images/net.png');
      }
      
      if(event.key === '2'){
          $imgElement.attr('src', '../images/chainsaw.png');
          2221222
      }
  })

  $(document.body).on('mousemove', function(e) {
    $imgElement.css({
      left: (e.clientX + 5) + 'px',
      top: (e.clientY - 5) + 'px',
      width: '10rem'
    });

    $imgElement.css({'border': '1px solid black'})
    console.log(e.clientX)
    // Check if x-coordinate is increasing or decreasing
    if (e.clientX > prevX) {
      $imgElement.css({'transform' : 'scaleX(-1)',
  left:(e.clientX - $imgElement.width() - 15) + "px"
  }); // No mirroring 
  } else if (e.clientX < prevX) {
      $imgElement.css('transform', 'scaleX(1)'); // Mirror horizontally
    }

    prevX = e.clientX; // Update the previous x-coordinate
  });
  // $('#net-image').on('click', function(event) {
  //     event.stopPropagation();
  //     $("[id]").click(function() {
  //         var elementId = $(this).attr("id");
  //         console.log("Clicked on element with ID: " + elementId);
  //     });
  //     // Your click event code for #net-image goes here
  // });
  // $("[id]").click(function() {
  //     var elementId = $(this).attr("id");
  //     console.log("Clicked on element with ID: " + elementId);
  // });
  // $('#wateringcan').click(function(){
  //     console.log("Clicking on the water can");
  //     $(this).css('transform', 'rotate(-45deg)');
  //   });
});



