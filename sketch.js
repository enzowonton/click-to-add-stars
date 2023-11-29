//setup
function setup() {
  createCanvas(400, 400);
  background('black');
}
//building scene
function draw() {
  //crescent moon
  fill('grey');
  ellipse(50, 50, 70);
  fill('black')
  noStroke();
  ellipse(70, 60, 70);
  //big yellow star
  fill('yellow');
  ellipse(200, 150, 50)
  fill('black');
  ellipse(175, 125, 50);
  ellipse(225, 125, 50);
  ellipse(175, 175, 50);
  ellipse(225, 175, 50);
  //small white stars
  fill('white');
  ellipse(50, 300, 5);
  ellipse(50, 50, 5);
  ellipse(335, 235, 5);
  //adding instructions
  fill('yellow');
  textFont('courier new');
  textSize(24);
  text('Click to add stars!', 60, 350)
}
//adding interactivity
function mousePressed() {
  fill('white');
  noStroke();
  ellipse(random(width), random(height), 5, 5)
}