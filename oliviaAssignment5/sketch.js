var font;
var paragraph = "Centuries and centuries of idealism have not failed to influence reality. In the very oldest regions of Tlon, it is not an uncommon occurrence for lost objects to be duplicated. Two people are looking for a pencil. The first one finds it and says nothing. The second finds a second pencil, no less real, but more in keeping with his expectation. These secondary objects are called hronir and, even though awkward in form, are a little larger than the originals. Until recently, the hronir were the accidental children of absent mindedness and forgetfulness.";
var words = paragraph.split(' ');

var picnum = 4;
var index = 0;
var pictures = new Array(picnum);

var xpos = 0;
var ypos = 0;


function preload() {
  font = loadFont("data/font1.otf");
  for (var i = 0; i < pictures.length; i++) {
    pictures[i] = loadImage("data/object" + i + ".jpg");
  }

}

function setup() {
  createCanvas(700, 700);
  background(255);
  stroke(3);
  fill(0, 50, 80);
  textFont(font, 36);


  //noLoop();
}

function draw() {
  //background(255);

  //imageColorChange()
  var margin = 20;
  var txtX = margin;
  var txtY = 50;
  
if (keyIsPressed){
  if (key == '8'){
      noStroke();
      fill(255,102,178, random(0, 5) );
      textDuplicate(20, 475);
  }

}


  for (var i = 0; i < words.length; i++) {
    
    
      if (words[i] == 'reality.') {
      //fill(0, 0, 255);

      if (mouseIsPressed) {
        fill(random(255), random(255), random(255));
      }
    } else if (words[i] == 'idealism') {
      //fill(0, 255, 0);

      if (keyIsPressed) {
        if (key == 'i') {
          fill(random(255), random(255), random(255));
          imageLoop(random(pictures));
        }
      }
    } else {
      fill(0, 50, 80);
    }


    var txtWidth = textWidth(words[i] + ' ');
    if ((txtX + txtWidth) > (width - margin)) {
      txtX = margin;
      txtY += 45;
    }

    text(words[i], txtX, txtY);
    txtX += txtWidth;

  }


}



function textDuplicate(locX, locY) {
  var px = locX;
  var py = locY;
  var characters = new Array(words.length);
  var speed = 1;
  
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      //  println(words[i][j]);

      if (words[i] == 'hronir') {
        // println(words[i][j]);
        var charw = textWidth(words[i][j]);
      //  println(w);
        px += charw;
        text(words[i][j], px, py);
     }

    }
  }
}


function imageLoop(pic) {
  var img = pic;
  frameRate(5);

  image(pic, xpos, ypos);
  xpos = xpos + img.width;

  if (xpos > width) {
    xpos = 0;
    ypos = ypos + img.height;
  }

  if (ypos > height) {
    xpos = 0;
  }

}


function imageColorChange() {
  //object.filter("blur", 10);
  //image(object, 0, 0);


  // var x = floor(random(object.width));
  // var y = floor(random(object.height));
  loadPixels();
  object.loadPixels();

  for (var y = 0; y < object.height; y++) {
    for (var x = 0; x < object.width; x++) {
      var current = (x + y * width) * 4;
      //println(current);
      var r = object.pixels[current];
      var g = object.pixels[current + 1];
      var b = object.pixels[current + 2];

      //var dis = dist(x, y, mouseX, mouseY);
      // var distort = map(dis, 0, 50, 8, 0);

      // r = random(50);
      // g = random(50);
      // b = random(50);

      pixels[current] = g;
      pixels[current + 1] = b;
      pixels[current + 2] = r;
      //pixels[current + 3] = 255;
    }
  }
  //noStroke()
  // fill(r, g, b, 100);
  // ellipse(x, y, distort, distort);


  //object.updatePixels();
  updatePixels();

}