/*Entry point for the game
* Author: Brad Barclay
* 9/22/21 added Phaser boiler-plate code
*/



var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

//initial scene is main menu
function preload ()
{
  this.load.image('sky', 'assets/phaser3-tutorial-src/assets/sky.png');
  this.load.image('ground', 'assets/phaser3-tutorial-src/assets/platform.png');
  this.load.image('star', 'assets/phaser3-tutorial-src/assets/star.png');
  this.load.image('bomb', 'assets/phaser3-tutorial-src/assets/bomb.png');
  this.load.spritesheet('dude', 'assets/phaser3-tutorial-src/assets/dude.png',
      { frameWidth: 32, frameHeight: 48 }
  );

}

function create ()
{
  this.add.image(400, 300, 'sky');
  this.add.image(400, 300, 'ground');
  this.add.image(400, 300, 'star');
  this.add.image(400, 300, 'bomb');
  this.add.image(400, 300, 'dude');

}

function update ()
{
}