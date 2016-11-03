var font;
var paragraph = "Centuries and centuries of idealism have not failed to influence reality. In the very oldest regions of Tlon, it is notan uncommon occurrence for lost objects to be duplicated. Two people are looking for a pencil. The first one finds it and says nothing. The second finds a second pencil, no less real, but more in keeping with his expectation. These secondary objects are called hronir and, even though awkward in form, are a little larger than the originals. Until recently, the hronir were the accidental children of absent mindedness and forgetfulness.";
var words = paragraph.split(' ');

function preload() {
  font = loadFont("data/font1.otf");
  // paragraph = loadStrings("data/borges.txt");

}

function setup() {
  createCanvas(700, 700);
  background(255);
  stroke(3);
  fill(0, 50, 80);
  textFont(font, 36);
  noLoop();
}

function draw() {
  background(255);

  var margin = 20;
  var txtX = margin;
  var txtY = 50;
  for (var i = 0; i < words.length; i++) {

    if (words[i] == 'hronir') {
  println(words)
      //println("hello");
      fill(255, 255, 0);
    }
      else if (words[i] == 'reality.') {
      fill(0, 0, 255);
    } else if (words[i] == 'idealism') {
      fill(0, 255, 0);
    } 
   else {
      fill(0, 50, 80);
    }


    var txtWidth = textWidth(words[i] + ' ');
    if ((txtX + txtWidth) > (width - margin)) {
      txtX = margin;
      txtY += 36;
    }
    
    text(words[i], txtX, txtY);
    txtX += txtWidth;


  }



}
function textJitter(){
  
}
function imageLoop() {
  
}