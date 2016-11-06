var font;
var paragraph = "Centuries and centuries of idealism have not failed to influence reality. In the very oldest regions of Tlon, it is not an uncommon occurrence for lost objects to be duplicated. Two people are looking for a pencil. The first one finds it and says nothing. The second finds a second pencil, no less real, but more in keeping with his expectation. These secondary objects are called hronir and, even though awkward in form, are a little larger than the originals. Until recently, the hronir were the accidental children of absent mindedness and forgetfulness.";
var words = paragraph.split(' '); //splitting string array into words


var pictures = new Array(4);  //these arrays will be used to store the images
var bigpics = new Array(4);

var xpos = 0;
var ypos = 0;


function preload() {
  font = loadFont("data/font1.otf");
  for (var i = 0; i < pictures.length; i++) {
    pictures[i] = loadImage("data/object" + i + ".jpg"); 
    //pictures.push(new Photo(loadImage("data/object" + i + ".jpg")));   //I tried using OOP for this hw but every time I ran
  }                                                                      //the code, p5 froze
  for (var i = 0; i < bigpics.length; i++) {
    bigpics[i] = loadImage("data/objectLarge" + i + ".jpg");
   // bigpics.push(new Photo(loadImage("data/objectLarge" + i + ".jpg")));
  }
  

}

function setup() {
  createCanvas(700, 700);
  background(255);
  stroke(3);
  fill(0, 50, 80);
  textFont(font, 36);
}

function draw() {
  //background(255);

  var margin = 20;
  var txtX = margin;
  var txtY = 50;

    if (keyIsPressed) {
      if (key == '8') {                       //if '8' is pressed, a duplicated and reformated version of the word 'hronir'
        noStroke();                           //fades into canvas right above the original
        fill(255, 102, 178, random(0, 15));
        textDuplicate(20, 475);
      }

    }


  for (var i = 0; i < words.length; i++) {

   if (words[i] == 'idealism') {
      //fill(0, 255, 0);

      if (keyIsPressed) {
        if (key == 'i') {                               //if 'i' is pressed, the word 'idealism' changes colors and
          //for (var i = 0; i<pictures.length; i++){    //canvas is filled with images of objects that are picked randomly
          fill(random(255), random(255), random(255));  //from the array
          imageLoop(random(pictures));
         // pictures[i].imageLoop();

        }
      }
    }

    else if (words[i] == 'reality.') {
      //fill(0, 0, 255);
      if (mouseIsPressed) {                           //if the mouse is pressed, the word 'reality' changes colors
                                                      //and the enlarged images of objects are displayed with flipped
        fill(random(255), random(255), random(255));  //r,g,b values
        imageColorChange(random(bigpics));

      }
    }  else {
      fill(0, 50, 80);
    }


    var txtWidth = textWidth(words[i] + ' ');
    if ((txtX + txtWidth) > (width - margin)) {    //formats text to fit nicely into canvas
      txtX = margin;
      txtY += 45;
    }

    text(words[i], txtX, txtY);
    txtX += txtWidth;

  }


}




function textDuplicate(locX, locY) {   //duplicates and reformats particular words in the text and displays them
  var px = locX;                       //at a different location
  var py = locY;
  var characters = new Array(words.length);
  var speed = 1;

  for (var i = 0; i < words.length; i++) { //iterate through array of words in text
    for (var j = 0; j < words[i].length; j++) { //iterate through the characters in those words
      //  println(words[i][j]);

      if (words[i] == 'hronir') {    //if the word is 'hronir', duplicate and reformat it
        // println(words[i][j]);
        var charw = textWidth(words[i][j]); //calculate the width of a character (this will be used to increment spacing)
        //  println(w);
        px += charw;               //increase space between characters in the word based on character width
        //textSize(50);
        text(words[i][j], px, py);  //display the characters
      }

    }
  }
}


function imageLoop(pic) {   //fills up the canvas with different images
  var img = pic;
  frameRate(5);

  image(img, xpos, ypos);   //displays the image
  xpos = xpos + img.width;  //keep updating the x coordinate in order to display the images next to each other

  if (xpos > width) {  //go to next row if the width of the canvas has been reached
    xpos = 0;
    ypos = ypos + img.height;
  }

  if (ypos > height) {
    xpos = 0;
  }

}



function imageColorChange(pic) { //flips r,g,b values in image pixels to create a color change effect
  var picture = pic;

  loadPixels();  //loads pixels in canvas
  picture.loadPixels(); //loads pixels in image

  for (var y = 0; y < picture.height; y++) {
    for (var x = 0; x < picture.width; x++) {
      var current = (x + y * width) * 4;      //one pixel
      //println(current);
      var r = picture.pixels[current];
      var g = picture.pixels[current + 1];
      var b = picture.pixels[current + 2];



      pixels[current] = g;      //reassigning r,g,b values 
      pixels[current + 1] = b;
      pixels[current + 2] = r;
    }
  }

  updatePixels();  //updates pixels in canvas

}

