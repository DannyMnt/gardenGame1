//MAKE THE MAGIC HAPPEN

//Coded by Daniel (Apples code)

$(document).ready(function(){

    var ranLeft = Math.floor(Math.random() * 20);
    var ranTop = Math.floor(Math.random() * 20);

    $("#apple1").css({
        left: ranLeft + 60 + '%',
        top: ranTop + 40 + '%'
    })

    ranLeft = Math.floor(Math.random() * 20);
    ranTop = Math.floor(Math.random() * 20);

    $("#apple2").css({
        left: ranLeft + 60 + '%',
        top: ranTop + 40 + '%'
    })

    ranLeft = Math.floor(Math.random() * 20);
    ranTop = Math.floor(Math.random() * 20);

    $("#apple3").css({
        left: ranLeft + 60 + '%',
        top: ranTop + 40 + '%'
    })

})


$("#apple1").click(function(event){
    $(this).animate({
        top: $(".basket").position().top + 20 + 'px',
        left: $(".basket").position().left
    })
})

$("#apple2").click(function(event){
    $(this).animate({
        top: $(".basket").position().top,
        left: $(".basket").position().left + 20 + 'px'
    })
})

$("#apple3").click(function(event){
    $(this).animate({
        top: $(".basket").position().top + 10 + 'px',
        left: $(".basket").position().left + 50 + 'px'
    })
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
  $(".waterdrop").hide();
  $('#wateringcan').click(function () {
      $(this).css('transform', 'rotate(-45deg)');
      $(".waterdrop").show();
  
  

      const screenWidth = 50;
      const screenHeight = 50;

const randomLeft = Math.floor(Math.random() * 5);
const randomTop = Math.floor(Math.random() * 5);
$(".waterdrop").css({
  
  left: randomLeft+ $("#wateringcan").css("left"),
  top: randomLeft+ $("#wateringcan").css("top")


});

console.log(randomLeft);

  });
  console.log($("#wateringcan").css("left"));
  console.log($("#wateringcan").css("top"));
  




});







//Coded by Jan