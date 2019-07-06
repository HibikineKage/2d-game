import * as Phaser from 'phaser';
import rico from './assets/img/rico.png';
import nyan from './assets/img/nyan.png';

const 
  keySetting = {
    up: Phaser.Input.Keyboard.KeyCodes.W,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    right: Phaser.Input.Keyboard.KeyCodes.D,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
  };
class Main extends Phaser.Scene {
  preload() {
    this.load.image('rico', rico);
    this.load.image('nyan', nyan);
  }

  create() {
    const logo = this.physics.add.image(100, 100, 'nyan');

    logo.setBounce(0, 0);
    logo.setFrictionX(1);
    logo.setCollideWorldBounds(true);

    this.key = this.input.keyboard.addKeys(keySetting);
  }
  key!: { [key in keyof typeof keySetting]: Phaser.Input.Keyboard.Key };
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  physics: { default: 'arcade', arcade: { gravity: { y: 1500 } } },
  scene: new Main({}),
};
new Phaser.Game(config);
