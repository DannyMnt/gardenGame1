

//Coded by Daniel

const apples = ["#apple1", "#apple2", "#apple3"];
const appleInBasket = [false, false, false];
const oaklogs = ["#oaklog1", "#oaklog2", "#oaklog3"];
var treeFallen = false;
var temp;
let isRotated = false;
const screenWidth = $(window).width();

oaklogs.forEach(function (item) {
  $(item).hide();
});
var numberOfLogs = parseInt($("#number").text());
var numberOfPlanks = parseInt($("#inventoryOakPlankNumber").text());
var numberOfSticks = parseInt($("#inventoryStickNumber").text());
var showCrafting = false;
$("#basketfront").css("z-index", "3");

$(document).ready(function () {
  // Clone dirt block until the full screen width is covered
  var value = 4;
  for (var i = 0; i < screenWidth; i += 30) {
    var clone = $("#grass").clone();
    clone.attr("id", "grass");
    $("body").append(clone);
    clone.css("left", value + "%");
    value += 2;
  }

  //Positioning the apples randomly in the tree
  apples.forEach(function (item) {
    var ranLeft = Math.floor(Math.random() * 20);
    var ranTop = Math.floor(Math.random() * 10);
    $(item).css({
      left: ranLeft + 60 + "%",
      top: ranTop + 55 + "%",
      "z-index": "2",
    });
  });
  //Apples pickup animation

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
    if (treeFallen == false) rotateApple("#apple1");
    setTimeout(function () {
      $("#apple1").animate({
        top: $(".basket").position().top + 160 + "px",
        left: $(".basket").position().left + 40 + "px",
      }); //specific basket coordinates for every apple
      $("#apple1").css("transform", "rotate(0deg)");
    }, delay);
    appleInBasket[0] = true;
  });

  $("#apple2").click(function () {
    var delay = treeFallen ? 10 : 600;
    if (treeFallen == false) rotateApple("#apple2");
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
    if (treeFallen == false) rotateApple("#apple3");
    setTimeout(function () {
      $("#apple3").animate({
        top: $(".basket").position().top + 170 + "px",
        left: $(".basket").position().left + 80 + "px",
      });
      $("#apple3").css("transform", "rotate(0deg)");
    }, delay);
    appleInBasket[2] = true;
  });

  //Coded by Tadeas (butterfly)
  // returns random number within range
  function getRandomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let mushroomCount = 0;
  let isFlipped = false;
  let toolSelected = "net";

  //getting the width and height of the butterfly picture so it doesnt go outside the screen
  const butterflyWidth = $("#butterfly").width();
  const butterflyHeight = $("#butterfly").height();

  //constants for the general random movement
  const movementAmount = 30;
  const movementSpeed = 1000;

  // had to use this otherwise the butterfly would go back to the
  //same position if flew from when the user hovered their mouse over it

  let shouldMove = true;

  // function generates the new position for the butterfly to move to (only for general movement)
  function generateNewPos() {
    // get current position of the butterfly
    const curPosX = $("#butterfly").offset().left;
    const curPosY = $("#butterfly").offset().top;

    let flipMultiplier = isFlipped ? 100 : 1;

    let newPosX = curPosX > 0 ? curPosX : Math.abs(curPosX);
    let newPosY = curPosY > 0 ? curPosY : Math.abs(curPosY);
    let movementX = getRandomIntFromRange(-movementAmount, movementAmount);
    let movementY =
      getRandomIntFromRange(-movementAmount, movementAmount) * flipMultiplier;

    //generate movement and check if its not leaving the screen
    while (true) {
      if (isInBounds(newPosX + movementX, newPosY + movementY)) {
        break;
      }
      movementX = getRandomIntFromRange(-movementAmount, movementAmount);
      movementY =
        getRandomIntFromRange(-movementAmount, movementAmount) * flipMultiplier;
    }
    newPosX += movementX;

    newPosY += movementY;
    return [newPosX, newPosY];
  }

  // check if a certain position is not outside the screen
  function isInBounds(posX, posY) {
    if (posX < 0 || posX > width) {
      return false;
    }

    if (posY < 0 || posY > height) {
      return false;
    }

    return true;
  }

  // function that moves the butterfly (general movement)
  function moveImg() {
    if (shouldMove) {
      let newPos = generateNewPos();

      $("#butterfly").animate(
        { left: newPos[0], top: newPos[1] },
        movementSpeed,
        function () {
          moveImg();
        }
      );
    }
  }

  //function that stops the general movement and quickly moves
  //the butterfly to a random position on the screen (when hovered over)

  function teleportImg() {
    shouldMove = false;
    let newPosX = getRandomIntFromRange(0, width);
    let newPosY = getRandomIntFromRange(0, height);
    $("#butterfly")
      .stop()
      .animate(
        {
          left: newPosX,
          top: newPosY,
        },
        100,
        function () {
          shouldMove = true;
          moveImg();
        }
      );
  }

  const width = Math.min(
    $(document).width() - butterflyWidth,
    1900 - butterflyWidth
  );
  const height = $(document).height() - butterflyHeight;

  moveImg();

  $("#butterfly")
    .mouseenter(function () {
      if (toolSelected === "net") teleportImg();
    })
    .mouseleave(function () {
      if (toolSelected === "net") moveImg();
    });

  //moves the cow right
  function moveCowRight() {
    $("#mooshroom").css({ transform: "scaleX(1)" });
    $("#mooshroom").animate({ left: "80%" }, 6000, "linear", function () {
      setTimeout(function () {
        moveCowLeft();
      }, 1000);
    });
  }

  //moves the cow left
  function moveCowLeft() {
    $("#mooshroom").css({ transform: "scaleX(-1)" });
    $("#mooshroom").animate({ left: "10%" }, 6000, "linear", function () {
      setTimeout(function () {
        moveCowRight();
      }, 1000);
    });
  }

  moveCowRight();

  function flipWebsite() {
    isFlipped = !isFlipped;
    $("body").toggleClass("flip");

    setTimeout(function () {
      if (isFlipped) {
        $("body").toggleClass("flip");
        isFlipped = false;
      }
    }, getRandomIntFromRange(15000, 25000));
  }

  //Coded by Luca

  let clickCount = 0; // using a counter to monitor state
  $(".waterdrop").hide(); // avoiding having waterdrops in the corner
  $("#wateringcan").click(function () {
    $(document).mouseup(function () {
      $(document).off("mousemove");

      $(this).css("transform", "rotate(0deg)");
      $(".waterdrop").hide();
      $("#wateringcan").css({
        // holding it in place
        top: 60 + "%",
        left: 40 + "%",
      });
    });
  });

  $("#wateringcan").click(function () {
    clickCount++;
    if (clickCount == 1) pourWaterdrops(); // waterdrops appear and fall
    if (clickCount % 2 === 1) {
      $(this).css("transform", "rotate(-45deg)");
      $(".waterdrop").show();
      $("#wateringcan").click(function () {});
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
    // separating divs
    drops.push($(".waterdrop").eq(i));
  }

  function pourWaterdrops() {
    for (let i = 0; i < drops.length; i++) {
      setTimeout(function () {
        // separating divs
        pour(drops[i]);
      }, i * 500); // Delay
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

  updateBackgroundColor();
  setInterval(updateBackgroundColor, 60000); // Simple background changer based on device time

  function updateBackgroundColor() {
    var currentHour = new Date().getHours();
    var currentColor = getBackgroundColor(currentHour);
    $("body").css("background-color", currentColor);
  }

  function getBackgroundColor(hour) {
    if (hour < 6) {
      return "#FFF0BD";
    } else if (hour < 9) {
      return "#F0E68C";
    } else if (hour < 12) {
      return "#83C1DE ";
    } else if (hour < 15) {
      return "##87CEEB ";
    } else if (hour < 18) {
      return "#FF7F50";
    } else if (hour < 21) {
      return "#F7CAC9";
    } else {
      return "#FF9999";
    }
  }

  const helpButton = document.getElementById("help-button");
  const helpPopup = document.getElementById("help-popup");

  let isHelpPopupVisible = false;
  // realized our page was too complicated and implemented a small guide
  helpButton.addEventListener("click", () => {
    if (!isHelpPopupVisible) {
      helpPopup.style.display = "block";
      isHelpPopupVisible = true;
    } else {
      helpPopup.style.display = "none";
      isHelpPopupVisible = false;
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

  var prevX = 0; // Variable to store the previous x-coordinate
  var $imgElement = $("#net-image");
  $(document.body).on("mousemove", function (e) {
    $imgElement.css({
      left: e.clientX + 5 + "px",
      top: e.clientY,
      "z-index": "3",
    });
    number = 1;

    // Check if x-coordinate is increasing or decreasing
    if (e.clientX >= prevX) {
      $imgElement.css({
        transform: "scaleX(-1)",
        left: e.clientX - $imgElement.width() - 20 + "px",
      }); // No mirroring
    } else if (e.clientX < prevX) {
      $imgElement.css({
        transform: "scaleX(1)",
        left: e.clientX + 10 + "px",
      }); // Mirror horizontally
    }

    if (toolSelected === "wateringcan") {
      if (isRotated) {
        $imgElement.css({
          transform: "scaleX(1) rotate(-45deg)",
          top: e.clientY - $imgElement.height() / 2,
          left: e.clientX - $imgElement.width() / 2 + "px",
        });
      } else {
        $imgElement.css({
          transform: "scaleX(1)",
          top: e.clientY - $imgElement.height() / 2,
          left: e.clientX - $imgElement.width() / 2 + "px",
        });
      }
    }
    prevX = e.clientX;
  });

  $(window).bind("mousewheel DOMMouseScroll", function (event) {
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      //scroll up
      number++;
      if (number > 9) number = 1;
    } else {
      number--;
      //scroll down
      if (number <= 0) number = 9;
    }
    navSelection(number);
  });

  //Coded together
  $(document).keypress(function (event) {
    navSelection(+event.key);

    if (event.key !== "6") {
      isRotated = false;
      $imgElement.css({
        transform: "rotate(0deg)",
      });
    }

    if (event.key === "e") {
      toolSelected == "craftingTable";
      if (showCrafting == false) showCrafting = true;
      else showCrafting = false;
      if (showCrafting == true) {
        $("#crafting").show();
        $("#craftingStation1").click(function () {
          if (numberOfLogs > 0) {
            numberOfLogs--;
            $("#number").text(String(numberOfLogs));
            numberOfPlanks += 4;
            $("#inventoryOakPlank").show();
            $("#inventoryOakPlankNumber").show();
            $("#inventoryOakPlankNumber").text(String(numberOfPlanks));
            if (numberOfLogs == 0) {
              $("#number").hide();
              $("#inventoryOakLog").hide();
            }
          }
        });
        $("#craftingStation2").click(function () {
          if (numberOfPlanks > 0) {
            numberOfPlanks -= 2;
            $("#inventoryOakPlankNumber").text(String(numberOfPlanks));
            $("#inventoryStick").show();
            numberOfSticks += 4;
            $("#inventoryStickNumber").show();
            $("#inventoryStickNumber").text(String(numberOfSticks));
            if (numberOfPlanks == 0) {
              $("#inventoryOakPlankNumber").hide();
              $("#inventoryOakPlank").hide();
            }
          }
        });
        $("#craftingStation3").click(function () {
          if (numberOfPlanks >= 2 && numberOfSticks >= 1) {
            numberOfPlanks -= 2;
            $("#inventoryOakPlankNumber").text(String(numberOfPlanks));
            numberOfSticks--;
            $("#inventoryStickNumber").text(String(numberOfSticks));
            $("#inventoryWoodenSword").show();
            if (numberOfSticks == 0) {
              $("#inventoryStickNumber").hide();
              $("#inventoryStick").hide();
            }
            if (numberOfPlanks == 0) {
              $("#inventoryOakPlankNumber").hide();
              $("#inventoryOakPlank").hide();
            }
          }
        });
      } else {
        $("#crafting").hide();
        $("#oakPlank").hide();
        $("numberOfCrafts").hide();
      }
    }
    if (event.key === "1") {
      toolSelected = "net";
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
      toolSelected = "axe";
      $("#net-image").show();
      $imgElement.attr("src", "../images/axe.png");
      $imgElement.css({
        width: "5rem",
      });

      $("#tree").click(function () {
        if (toolSelected === "axe") {
          $("#tree").hide();
          oaklogs.forEach(function (item) {
            $(item).show();
          });
          treeFallen = true;
          for (var i = 0; i < 3; i++) {
            if (appleInBasket[i] == false) {
              $(apples[i]).animate({
                top: 87 + "%",
              });
            }
          }
        }
      });
    }

    if (event.key === "3") {
      toolSelected = "log";
    }

    if (event.key === "4") {
      toolSelected = "scissors";
      $("#net-image").show();
      $imgElement.attr("src", "../images/scissors.png");
      $imgElement.css({
        width: "5rem",
      });
      $imgElement.css("z-index", "3");
      $("#minecraftNavSelected").css({
        left: "calc(50% - 60px)",
      });
    }

    if (toolSelected === "scissors") {
      let timeout = 0;
      $("#mooshroom").click(function () {
        // Check if the scissors are currently selected
        if (
          $("#net-image").is(":visible") &&
          $("#mooshroom").attr("src") === "images/mooshroom.png"
        ) {
          $("#mooshroom").attr("src", "images/cow.png");
          mushroomCount++;
          console.log(mushroomCount);
          $("#inventoryMushroom").show();
          $("#mushroomNumber").show();
          $("#mushroomNumber").text(mushroomCount);
          clearTimeout(timeout);
          timeout = setTimeout(function () {
            $("#mooshroom").attr("src", "images/mooshroom.png");
          }, getRandomIntFromRange(10000, 30000));
        }
      });
    }

    if (event.key === "5") {
      toolSelected = "mushroom";
    }

    if (event.key === "f" && toolSelected === "mushroom" && mushroomCount > 0) {
      mushroomCount--;
      if (mushroomCount > 0) {
        $("#mushroomNumber").text(mushroomCount);
      } else {
        $("#inventoryMushroom").hide();
        $("#mushroomNumber").hide();
      }

      flipWebsite();
    }

    // coded by Luca & Jan
    if (event.key === "6") {
      toolSelected = "wateringcan";
      $("#net-image").show();
      $imgElement.attr("src", "../images/wateringcan.png");
      $imgElement.css({
        width: "10rem",
      });
      $imgElement.css("z-index", "3");
      $("#minecraftNavSelected").css({
        left: "calc(50% + 60px)",
      });
    }
  });
  $("#net-image").click(() => {
    if (toolSelected != "wateringcan") return;
    isRotated = !isRotated;
    var drops = [];
    for (var i = 0; i < 3; i++) {
      drops.push($(".waterdrop").eq(i));
    }
    if (!isRotated) {
      $imgElement.css("transform", `rotate(0deg)`);
    } else {
      $imgElement.css("transform", `rotate(-45deg)`);
      pourWaterDrops();
    }

    function pourWaterDrops() {
      for (let i = 0; i < drops.length; i++) {
        setTimeout(function () {
          pour(drops[i]);
        }, i * 500); // Delay each animation by 500ms
      }
    }

    function pour(waterdrop) {
      const wateringcanPosition = $imgElement.position();
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
            if (isRotated) {
              pour(waterdrop);
            }
          },
        }
      );
    }
  });

  $(".oaklog").click(function () {
    $("#inventoryOakLog").show();
    $("#number").show();
    numberOfLogs++;
    $("#number").text(String(numberOfLogs));
    $(this).hide();
  });
});

// Code ownership is not limited to the names above said code
// We added code everywhere
