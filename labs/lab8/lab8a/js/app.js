function biggify(id, factor) {
  //increase width and height by 10% on click
  var factor = 1.1;
  var dvPixel = document.getElementById(id);
  var height = parseInt(dvPixel.style.height) * factor;
  var width = parseInt(dvPixel.style.width) * factor;

  if (height >= 1) {
    dvPixel.style.height = height + "px";
  }
  if (width >= 1) {
    dvPixel.style.width = width + "px";
  }
}
