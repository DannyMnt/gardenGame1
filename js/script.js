//MAKE THE MAGIC HAPPEN

//Coded by Daniel (Apples code)




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

const clientWidth = $("window").
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
  $(".waterdrop").hide();
  $('#wateringcan').click(function () {
      $(this).css('transform', 'rotate(-45deg)');
      $(".waterdrop").show();
  
  

      const screenWidth = 50;
      const screenHeight = 50;

const randomLeft = Math.floor(Math.random() * screenWidth);
const randomTop = Math.floor(Math.random() * screenHeight);

$(".waterdrop").css({
  left: randomLeft + 600 +'px',
  top: randomTop + 550+'px'
});
  
  
  });





});







//Coded by Jan