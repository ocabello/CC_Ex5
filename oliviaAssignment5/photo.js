function Photo(pictures) {
  var img = pictures;
  var xpos = 0;
  var ypos = 0;

  
  
  this.imageLoop = function(){

  frameRate(5);

  image(img, xpos, ypos);
  xpos = xpos + img.width;

  if (xpos > width) {
    xpos = 0;
    ypos = ypos + img.height;
  }

  if (ypos > height) {
    xpos = 0;
  }
  }
  
  this.imageColorChange = function(){


  loadPixels();
  img.loadPixels();

  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      var current = (x + y * width) * 4;
      //println(current);
      var r = img.pixels[current];
      var g = img.pixels[current + 1];
      var b = img.pixels[current + 2];



      pixels[current] = g;
      pixels[current + 1] = b;
      pixels[current + 2] = r;
    }
  }

  updatePixels();
  }
}