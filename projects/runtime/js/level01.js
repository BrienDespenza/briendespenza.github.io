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
        { "type": "sawblade", "x": 400, "y": groundY -150},
        { "type": "sawblade", "x": 600, "y": groundY -20},
        { "type": "sawblade", "x": 1000, "y": groundY -150},

        { "type": "sawblade", "x": 1300, "y": groundY -1},
        { "type": "sawblade", "x": 1900, "y": groundY -20},
        { "type": "sawblade", "x": 2000, "y": groundY -150},
    
    
        { "type": "enemy", "x": 200, "y": groundY -50 },
        { "type": "enemy", "x": 600, "y": groundY -80},
        { "type": "enemy", "x": 900, "y": groundY -30},

        { "type": "enemy", "x": 1100, "y": groundY -50 },
        { "type": "enemy", "x": 1400, "y": groundY -80},
        { "type": "enemy", "x": 1600, "y": groundY -30},

        { "type": "enemy2", "x": 1900, "y": groundY -40 },
        { "type": "enemy2", "x": 2200, "y": groundY -40},
        { "type": "enemy2", "x": 2400, "y": groundY -40},

       
        { "type": "enemy", "x": 2900, "y": groundY -80},
        { "type": "enemy", "x": 2600, "y": groundY -30},
    
        { "type": "reward", "x": 700, "y": groundY -50 },
        { "type": "reward", "x": 600, "y": groundY -50},
        { "type": "reward", "x": 1000, "y": groundY -50},

        

        ]
    };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

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

        obstacleImage.x = -15; //tweaks the image 25 pixels to the left
        obstacleImage.y = -35; //tweaks the image 25 pixels up
       
        }

        //createSawBlade(400, 350);
        //createSawBlade(500, 370);
       // createSawBlade(250, 350);


        function createEnemy(x,y){
            var enemy = game.createGameItem('enemy',25); //creates game item and stores it in the variable enemy
        //var redSquare = draw.rect(50,50,'red'); //creates rectangle that stores as redSquare
        var bat = draw.bitmap('img/bat.png');
        bat.x = -40; 
        bat.y = -20;
        enemy.addChild(bat); //adds the bat to the enemy game item


        enemy.x = x;
        enemy.y = y;

        bat.scaleX = 1.5;//makes the bat lager on the x scale
        bat.scaleY = 1.5;//makes the bat lager on the y scale

        game.addGameItem(enemy); //adds enemy to the game

        enemy.velocityX = -1; //causes the enemy to move one pixel to the left on the x position

        //enemy.rotationalVelocity = 10; //makes enemy rotate

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

        function createEnemy2(x,y){
            var enemy2 = game.createGameItem('enemy2',25); //creates game item and stores it in the variable enemy
        //var redSquare = draw.rect(50,50,'red'); //creates rectangle that stores as redSquare
        var wolf = draw.bitmap('img/wolf.png');
        wolf.x = -40; 
        wolf.y = -50;
        enemy2.addChild(wolf); //adds the wolf to the enemy game item


        enemy2.x = x;
        enemy2.y = y;

        wolf.scaleX = 1.5;//makes the wolf lager on the x scale
        wolf.scaleY = 1.5;//makes the wolf lager on the y scale

        game.addGameItem(enemy2); //adds enemy to the game

        enemy2.velocityX = -1; //causes the enemy to move one pixel to the left on the x position

        //enemy2.rotationalVelocity = 10; //makes enemy rotate

        enemy2.onPlayerCollision = function() {
        console.log('The enemy has hit Halle');
        game.changeIntegrity(-10) //takes away health when hit
    };

        enemy2.onProjectileCollision = function() {
        console.log('The projectile has hit Halle');
        game.changeIntegrity(5)//gives health when player shoots enemy
        enemy2.flyTo(100,100); 
    };
        }

        function createReward(x, y){
              var reward = game.createGameItem('reward', 25); //creates game item and stores it in the variable enemy
        //var blueSquare = draw.rect(50,50,'blue'); //creates rectangle that stores as redSquare
        var orb = draw.bitmap('img/orb.png');
        orb.x = -10; 
        orb.y = -20;
        reward.addChild(orb); //adds the redSquare to the enemy game item


        reward.x = x;
        reward.y = y;

        game.addGameItem(reward); //adds reward to the game

        reward.velocityX = -1; //causes the reward to move one pixel to the left on the x position

        //reward.rotationalVelocity = 10; //makes reward rotate

        reward.onPlayerCollision = function() {
            console.log('The reward has hit Halle');
            game.changeIntegrity(10) //gives health when hit

         };
         reward.onProjectileCollision = function(){
             console.log('The project has hit Halle');
             game.increaseScore(200);
             reward.fadeOut();
         };

        }


    for(var i = 0; i < levelData.gameItems.length; i++){
        var gameItem = levelData.gameItems[i];

        if (gameItem.type === "sawblade"){
            createSawBlade(gameItem.x, gameItem.y);
        }

        if (gameItem.type === "enemy"){
            createEnemy(gameItem.x, gameItem.y);
        }

        
        if (gameItem.type === "enemy2"){
            createEnemy2(gameItem.x, gameItem.y);
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
