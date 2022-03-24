var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawBlade(x, y){
        var hitZoneSize = 25; //creates the  size of the hitzone
        var damageFromObstacle = 10; //sets the damage of the obstacle
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the hitzone and stores it in this variable
        
        sawBladeHitZone.x = x; // x postion of the hitzone
        sawBladeHitZone.y = y; //y postion of the hitzone
        game.addGameItem(sawBladeHitZone); //add the hitzone to the game
        
        var obstacleImage = draw.bitmap('img/sawblade.png'); //draws and stores the image in the variable
        sawBladeHitZone.addChild(obstacleImage); //adds the image to the hitzone so we can see it

        obstacleImage.x = -25; //tweaks the image 25 pixels to the left
        obstacleImage.y = -25; //tweaks the image 25 pixels up
       
        }

        createSawBlade(400, 350);
        createSawBlade(500, 370);
        createSawBlade(250, 350);


        function createEnemy(x,y){
            var enemy = game.createGameItem('enemy',25); //creates game item and stores it in the variable enemy
        var redSquare = draw.rect(50,50,'red'); //creates rectangle that stores as redSquare
        redSquare.x = -25; 
        redSquare.y = -25;
        enemy.addChild(redSquare); //adds the redSquare to the enemy game item


        enemy.x = x;
        enemy.y = y;

        game.addGameItem(enemy); //adds enemy to the game

        enemy.velocityX = -1; //causes the enemy to move one pixel to the left on the x position

        enemy.rotationalVelocity = 10; //makes enemy rotate

        enemy.onPlayerCollision = function() {
        console.log('The enemy has hit Halle');
        game.changeIntegrity(-10) //takes away health when hit
    };

         enemy.onProjectileCollision = function() {
        console.log('The projectile has hit Halle');
        game.changeIntegrity(5)//gives health when player shoots enemy
        enemy.flyTo(100,100); 
    };
        }

        function createReaward (){
              var reward = game.createGameItem('reward',25); //creates game item and stores it in the variable enemy
        var blueSquare = draw.rect(50,50,'blue'); //creates rectangle that stores as redSquare
        blueSquare.x = -25; 
        blueSquare.y = -25;
        reward.addChild(blueSquare); //adds the redSquare to the enemy game item


        reward.x = x;
        reward.y = y;

        game.addGameItem(reward); //adds reward to the game

        reward.velocityX = -1; //causes the reward to move one pixel to the left on the x position

        reward.rotationalVelocity = 10; //makes reward rotate

        reward.onPlayerCollision = function() {
        console.log('The reward has hit Halle');
        game.changeIntegrity(10) //gives health when hit
    };

        }


        var levelData = {
        "name": "Robot Romp",
        "number": 1, 
        "speed": -3,
        "gameItems": [
	{ "type": "sawblade", "x": 400, "y": groundY -50},
	{ "type": "sawblade", "x": 600, "y": groundY -40},
	{ "type": "sawblade", "x": 800, "y": groundY -30},

    { "type": "enemy", "x": 400, "y": groundY -50 },
	{ "type": "enemy", "x": 600, "y": groundY -80},
	{ "type": "enemy", "x": 900, "y": groundY -30},

    { "type": "reward", "x": 700, "y": groundY -70 },
	{ "type": "reward", "x": 600, "y": groundY -90},
	{ "type": "reward", "x": 600, "y": groundY -60},
    ]
};

    for(var i = 0; i < levelData.gameItems.length; i++){
        var gameItem = levelData.gameItems[i];

        if (gameItem.type === "sawblade"){
            createSawBlade(gameItem.x, gameItem.y);
        }

        if (gameItem.type === "enemy"){
            createEnemy(gameItem.x, gameItem.y);
        }

        if (gameItem.type === "reward"){
            createReward(gameItem.x, gameItem.y);
        }
    }

        




        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
