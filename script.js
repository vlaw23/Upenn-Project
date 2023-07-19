// Grayscale Slider
function change() {
  const img = document.querySelector(".image");
  const range = document.querySelector(".range");
  img.style.filter = `contrast(${range.value}%)`;
}

//Next and Previous buttons
var img = new Array(
  "./images/image001.png",
  "./images/image002.png",
  "./images/image003.png",
  "./images/image004.png",
  "./images/image005.png",
  "./images/image006.png",
  "./images/image007.png",
  "./images/image008.png"
);

var imgElement = document.getElementById("imgDemo");
var i = 0;
var imgLen = img.length;

var no_box = document.querySelector(".imnum");

function next() {
  if (i < imgLen - 1) {
    i++;
    imgElement.src = img[i];
    document.getElementsByClassName("prev").disabled = false;
  } else {
    document.getElementsByClassName("next").disabled = true;
  }
  return setNo();
}

function prev() {
  if (i > 0) {
    i--;
    imgElement.src = img[i];
    document.getElementsByClassName("next").disabled = false;
  } else {
    document.getElementsByClassName("prev").disabled = true;
  }

  return setNo();
}

function setNo() {
  // Change innerhtml
  return (no_box.innerHTML = "IMAGE " + (i + 1));
}
