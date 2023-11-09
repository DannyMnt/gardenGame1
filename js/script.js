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
$(document).ready(function(){
    $("#butterfly").mouseover().animate({left:"+=getRandomInt(width-curPosX,-curPosX)",top:"+=getRandomInt(width-curPosY,-curPosY)"},fast);

    $("#butterfly").animate({left:"+=(getRandomInt(30,-30))",top: "+=getRandomInt(30,-30)"},fast);
});

//Coded by Luca
$


//Coded by Jan

