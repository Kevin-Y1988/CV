var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomDiceeImage1 = "dice" + randomNumber1 + ".png";
// var randomDiceeImage2 = "dice" + randomNumber2 + ".png";

// var randomImageSource1 = "images/" + randomDiceeImage1;
// var randomImageSource2 = "images/" + randomDiceeImage2;

// var image1 = document.querySelectorAll("img")[0];
// var image2 = document.querySelectorAll("img")[1];

document.querySelectorAll("img")[0].setAttribute("src" , "dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src" , "dice" + randomNumber2 + ".png");



if (randomNumber1 < randomNumber2) {

document.querySelector("h1").innerHTML = "Jing赢了，Kevin是二傻子!";
}
else if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "Kevin赢了，Jing是瘪犊子!";
}
  else{
document.querySelector("h1").innerHTML = "两个小垃圾，重赛!";
  }
