var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        
        var tree 

        var buildings = [];

        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'purple');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            
                //everytime the loop runs it creates a circle with a rancom x and y respective to the canvas and is added to it
            for(var i = 0; i <= 100; i++){
                var circle = draw.circle(3,'white','LightGray',3);// creares a variable called circle that holds each circle
                circle.x = canvasWidth*Math.random();// multiplies canvasWidth with a random decimal to assign it to circle.x
                circle.y = groundY*Math.random();//multiplies groundY with a random decimal to assign it to circle Y
                background.addChild(circle); // adds circle to backghround
            }
            
                 var moon = draw.bitmap('img/moon.png'); //created a variable called moon. Draw.bitmap draws the img and stores it in the images folder
            moon.x = canvasWidth - 300; //assigns x corridnate of moon 
            moon.y = 100; //assigns y corridnate of moon 
            moon.scaleX = - 0.5; //controls the x placement of the moon
            moon.scaleY = 0.5; //controls the y placemnet of the moon
            background.addChild(moon);

            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for(var i=0;i<5;i++) {
            var buildingHeight = 300*Math.random(); //creates a variable called buildingHeight that holds the height of the building in pixels 
            var building = draw.rect(75,buildingHeight,'Black','Black',1); // creates a variable called building that holds the data for the drawn building
            building.x = 200*i; //positions the x of each building 200 pixeks from the next building
            building.y = groundY-buildingHeight; //sets the y of the building off of GroundY based on buildingHeight
            background.addChild(building); // adds building to background so it can be seen
            buildings.push(building); // pushes each individual building to the buildings array
}
            
            // TODO 4: Part 1 - Add a tree
            tree = tree = draw.bitmap('img/tree.png'); //reassigns the drawn image of the tree
            tree.x = 600; //assigns an x value to tree
            tree.y = groundY - 230;
            background.addChild(tree);
            tree.scaleX = 1; //changes the x scale of tree
            tree.scaleY = 1; //changes the y scale of tree
            background.addChild(tree);

        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 3; //taking the value of tree.x (position x) and decreasing it by one pixel everytime the update function runs
            
            if(tree.x < -200) {
             tree.x = canvasWidth;
}
            
            // TODO 5: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
