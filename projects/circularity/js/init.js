var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; //declared variable circle. left-undifined. I will use this later to hold individual circles
        var circles = []; //empty array that is waiting to hold the circles
        // TODO 2 : Create a function that draws a circle 
         // Code to draw a circle

         //below the function draws a circle(31) and adds a velocity(32) which is then pushed into the empty circles array(33)

         function drawCircle(){
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas, 10, 10);
            view.addChild(circle);
            circles.push(circle);
         }


        // TODO 3 / 8 : Call the drawCircle() function 
        ///the loop is set up to allow for the circles to be drawn multiple times without it being D.R.Y
        for(var i = 0; i <= 100 ; i++){
            drawCircle();
        }




        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
           
            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            

            // TODO 9 : Iterate over the array
            //this basically animates the circles by updating their postions without being repetative
           for(var k = 0; k < circles.length; k++){
            physikz.updatePosition(circles[k]);
            game.checkCirclePosition(circles[k]);
           }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            //the code below basically sets the perameters for the boundries the circles are held within for the screen which will help
            //them know where to stay

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            if (circle.x < 0){
                circle.x = canvas.width
            }
            if(circle.y < 0){
                circle.y = canvas.height
            }
            if(circle.y > canvas.height){
                circle.y = 0
            }
            

            // TODO 7 : YOUR CODE STARTS HERE //////////////////////
            


            // YOUR TODO 7 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
