/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Sets up the initial environment for the sketch.
 */
function setup() {
    createCanvas(800, 600);
    background(20, 20, 100);
    //call the function - run the code
    drawSky();
    drawSun();
    drawGround();
    drawBird();

}
function drawSun(){
    pop();
    fill(255,0,0);
    circle(50, 200, 100);
    push();

}


/**
 * Draws the sketch.
 */
function drawSky() {
    push();
    fill(20, 20, 300);
    ellipse(800, 100, 300, 100);
    ellipse(700, 100, 300, 100);
    ellipse(600, 100, 300, 100);
    ellipse(500, 100, 300, 100);
    ellipse(400, 100, 300, 100); 
    ellipse(300, 100, 300, 100);
    ellipse(200, 100, 300, 100);
    ellipse(100, 100, 300, 100);
    fill(20, 20, 200);
    ellipse(800, 40, 300, 100);
    ellipse(700, 40, 300, 100);
    ellipse(600, 40, 300, 100);
    ellipse(500, 40, 300, 100);
    ellipse(400, 40, 300, 100); 
    ellipse(300, 40, 300, 100);
    ellipse(200, 40, 300, 100);
    ellipse(100, 40, 300, 100);
    
    pop();


}
function drawGround() {
    push();
    fill(100, 2155, 100, 100);
    ellipse(800, 600, 300, 100);
    ellipse(700, 550, 300, 100);
    ellipse(600, 600, 300, 100);
    ellipse(500, 550, 300, 100);
    ellipse(400, 600, 300, 100); 
    ellipse(300, 550, 300, 100);
    ellipse(200, 600, 300, 100);
    ellipse(100, 550, 300, 100);
    fill(200, 2155, 100, 100);
    ellipse(800, 600, 300, 100);
    ellipse(700, 550, 300, 100);
    ellipse(600, 600, 300, 100);
    ellipse(500, 550, 300, 100);
    ellipse(400, 600, 300, 100); 
    ellipse(300, 550, 300, 100);
    ellipse(200, 600, 300, 100);
    ellipse(100, 550, 300, 100);
    ellipse(800, 500, 300, 100);
    ellipse(700, 575, 300, 100);
    ellipse(600, 575, 300, 100);
    ellipse(500, 575, 300, 100);
    ellipse(400, 575, 300, 100);
    ellipse(300, 575, 300, 100);
    ellipse(300, 575, 300, 100);
    pop();
    
}
function drawBird(){
   stroke(255, 350, 150, 100);
    arc(500, 250, 400, 100, 180, 360);
    arc(500, 250, 400, 100, 180, 360);
    
    

}
