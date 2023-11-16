//MAKE THE MAGIC HAPPEN

//Coded by Daniel

const apples = ["#apple1", "#apple2", "#apple3"];
const appleInBasket = [false, false, false];
const oaklogs = ["#oaklog1", "#oaklog2", "#oaklog3"];
var treeFallen = false;
oaklogs.forEach(function(item){
  $(item).hide();
})
var numberOfLogs = 0;
var showCrafting = false;

$(document).ready(function () {
  // Clone dirt block until the full screen width is covered
  const screenWidth = $(window).width();
  var value = 4;
  for(var i = 0; i < screenWidth; i += 89){
    var clone = $("#grass").clone();
    clone.attr("id", "grass");
    $("body").append(clone);
    clone.css("left", value +"%");
    value += 4;
  }

  apples.forEach(function (item) {
    var ranLeft = Math.floor(Math.random() * 20);
    var ranTop = Math.floor(Math.random() * 10);
    $(item).css({
      left: ranLeft + 60 + "%",
      top: ranTop + 55 + "%",
      "z-index": "2"
    });
  });
});

function rotateApple(apple) {
  $(apple).css("transform", "rotate(20deg)");
  setTimeout(function () {
    $(apple).css("transform", "rotate(-20deg)");
  }, 200);
  setTimeout(function () {
    $(apple).css("transform", "rotate(20deg)");
  }, 400);
  setTimeout(function () {
    $(apple).css("transform", "rotate(20deg)");
  }, 600);
}

$("#apple1").click(function () {
  var delay = treeFallen ? 10 : 600;
  if(treeFallen == false)
    rotateApple("#apple1");
  setTimeout(function () {
    $("#apple1").animate({
      top: $(".basket").position().top + 160 + "px",
      left: $(".basket").position().left + 40 + "px",
    });
    $("#apple1").css("transform", "rotate(0deg)");
  }, delay);
  appleInBasket[0] = true;
});

$("#apple2").click(function () {
  var delay = treeFallen ? 10 : 600;
  if(treeFallen == false)
    rotateApple("#apple2");
  setTimeout(function () {
    $("#apple2").animate({
      top: $(".basket").position().top + 150 + "px",
      left: $(".basket").position().left + 60 + "px",
    });
    $("#apple2").css("transform", "rotate(0deg)");
  }, delay);
  appleInBasket[1] = true;
});

$("#apple3").click(function () {
  var delay = treeFallen ? 10 : 600;
  if(treeFallen == false)
    rotateApple("#apple3");
  setTimeout(function () {
    $("#apple3").animate({
      top: $(".basket").position().top + 170 + "px",
      left: $(".basket").position().left + 80 + "px",
    });
    $("#apple3").css("transform", "rotate(0deg)");
  }, delay);
  appleInBasket[2] = true;
});

//Coded by Tadeas

const butterflyWidth = $("#butterfly").width();
const butterflyHeight = $("#butterfly").height();


const movementAmount = 30;
const movementSpeed = 1000;

let isMoving = true;

function generateNewPos(){
  var curPosX = $("#butterfly").offset().left;
  var curPosY = $("#butterfly").offset().top;

  let newPosX = curPosX;
  let newPosY = curPosY;
  let movementX = 0;
  let movementY = 0;
  while(true){
    movementX = getRandomIntFromRange(-movementAmount,movementAmount);
    movementY = getRandomIntFromRange(-movementAmount,movementAmount);
    
    if(isInBounds(newPosX + movementX, newPosY + movementY)){
      break;
    }
  }
  
    newPosX += movementX;
  
    newPosY += movementY;
  
  return [newPosX,newPosY];
}

function isInBounds(posX, posY){
  const documentWidth = $(document).width();
  const documentHeight = $(document).height();

  if (posX < 0 || posX > documentWidth) {
    return false;
  }

  if (posY < 0 || posY > documentHeight) {
    return false;
  }

  return true;
}

function moveImg(){
  if(isMoving){
    var newPos = generateNewPos();

    $("#butterfly").animate({left: newPos[0], top: newPos[1]},movementSpeed,function(){moveImg();});
  }
}

function getRandomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(document).ready(function () {
  const width = $(document).width() - butterflyWidth;
  const height = $(document).height() - butterflyHeight;
  

  moveImg();

  $("#butterfly").mouseover(function(){
    isMoving = false;
    let newPosX = getRandomIntFromRange(0,width);
    let newPosY = getRandomIntFromRange(0,height);
    
    $("#butterfly").stop().animate({
      left: newPosX,
      top: newPosY,
    },100);
  });
  $("#butterfly").mouseout(function(){
    isMoving = true;
    moveImg();
  })
  
});

//Coded by Luca

$(document).ready(function () {
  let clickCount = 0;

  $(".waterdrop").hide();
  $("#wateringcan").click(function () {
$(document).mousemove(function(event) {
          $("#wateringcan").css({
            top: event.pageY - 25,
            left: event.pageX - 25
          });// do first click and second click using let clicks be 0;
        });
$(document).mouseup(function() {
          $(document).off('mousemove');

          $(this).css("transform", "rotate(0deg)");
          $(".waterdrop").hide();
          $("#wateringcan").css({
            top: 60 + "%",
            left: 40 + "%",
          });

        });

  });

  $("#wateringcan").click(function () {
    clickCount++;
    if(clickCount==1)pourWaterdrops();
    if (clickCount % 2 === 1) {
      $(this).css("transform", "rotate(-45deg)");
      $(".waterdrop").show();
      $("#wateringcan").click(function() {
        
      });
    
    } else {
      $(this).css("transform", "rotate(0deg)");
      $(".waterdrop").hide();
      $("#wateringcan").css({
        top: 60 + "%",
        left: 40 + "%",
        
        
      });

    }
  });

  var drops = [];
  for (var i = 0; i < 3; i++) {
    drops.push($(".waterdrop").eq(i));
  }

  function pourWaterdrops() {
    for (let i = 0; i < drops.length; i++) {
      setTimeout(function () {
        pour(drops[i]);
      }, i * 500); // Delay each animation by 500ms
    }
  }

  function pour(waterdrop) {
    const wateringcanPosition = $("#wateringcan").position();
    const startV = wateringcanPosition.top + Math.random() * 20 + 60;
    const startH = wateringcanPosition.left + Math.random() * 20 - 10;
    const speed = Math.random() * 1200 + 800;
    const endV = 2000;

    waterdrop.css({
      top: startV + "px",
      left: startH + "px",
      visibility: "visible",
    });

    $({
      pos: startV,
    }).animate(
      {
        pos: endV,
      },
      {
        duration: speed,
        step: function (now) {
          waterdrop.css({
            top: now + "px",
          });
        },
        complete: function () {
          waterdrop.css({
            visibility: "hidden",
          });
          pour(waterdrop);
        },
      }
    );
  }
});
//Coded by Jan

const navSelection = (num) => {
  switch (num) {
    case 1:
      temp = "calc(50% - 240px)";
      break;
    case 2:
      temp = "calc(50% - 180px)";
      break;
    case 3:
      temp = "calc(50% - 120px)";
      break;
    case 4:
      temp = "calc(50% - 60px)";
      break;
    case 5:
      temp = "calc(50%)";
      break;
    case 6:
      temp = "calc(50% + 60px)";
      break;
    case 7:
      temp = "calc(50% + 120px)";
      break;
    case 8:
      temp = "calc(50% + 180px)";
      break;
    case 9:
      temp = "calc(50% + 240px)";
      break;
  }

  $("#minecraftNavSelected").css({
    left: temp,
  });
  $("#net-image").hide();
};

$(document).ready(function () {
  var prevX = 0; // Variable to store the previous x-coordinate
  var $imgElement = $("#net-image");
  $(document.body).on("mousemove", function (e) {
    $imgElement.css({
      left: e.clientX + 5 + "px",
      top: e.clientY - 5 + "px",
      "z-index": "3"
    });
    number = 1;

    // Check if x-coordinate is increasing or decreasing
    if (e.clientX > prevX) {
      $imgElement.css({
        transform: "scaleX(-1)",
        left: e.clientX - $imgElement.width() - 5 + "px",
      }); // No mirroring
    } else if (e.clientX < prevX) {
      $imgElement.css({
        transform: "scaleX(1)",
        left: e.clientX - $imgElement.width - 5 + "px"
      }); // Mirror horizontally
    }

    prevX = e.clientX;
  });

  $(window).bind("mousewheel DOMMouseScroll", function (event) {
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      // scroll up
      number++;
      if (number > 9) number = 1;
    } else {
      number--;
      // scroll down
      if (number <= 0) number = 9;
    }
    navSelection(number);
  });

  $(document).keypress(function (event) {
    if(event.key === "e"){
      if(showCrafting == false)
        showCrafting = true;
      else
        showCrafting = false;
      if(showCrafting == true)
        $("#craftingTableGrid").show();
      else
        $("#craftingTableGrid").hide();
    }
    navSelection(+event.key);
    if (event.key === "1") {
      $("#net-image").show();
      $imgElement.attr("src", "../images/net.png");
      $imgElement.css({
        width: "10rem",
      });
      $("#minecraftNavSelected").css({
        left: "calc(50% - 240px)",
      });
    }

    if (event.key === "2") {
      $("#net-image").show();
      $imgElement.attr("src", "../images/axe.png");
      $imgElement.css({
        width: "5rem",
      });
      $("#tree").click(function(){
        $("#tree").hide();
        oaklogs.forEach(function(item){
          $(item).show();
        })
        treeFallen = true;
        for(var i = 0; i < 3; i++){
          if(appleInBasket[i] == false){
              $(apples[i]).animate({
              top: 87 + "%"
            })
          }
        }
      })
    }
  });
  $(".oaklog").click(function(){
    $("#inventoryOakLog").show();
    $("#number").show();
    numberOfLogs++;
    $("#number").text(numberOfLogs);
    $(this).hide();
  })
});
