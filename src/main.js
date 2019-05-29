// This will import and connect out TitleScene from sences
import TitleScene from './scenes/TitleScene';
import BootScene from './scenes/BootScene';
import LoadingScene from './scenes/LoadingScene';
// The things that we imported above we want to turn into an actionable variable.
let titleScene = new TitleScene();
let bootScene = new BootScene();
let loadingScene = new LoadingScene();

// This is our canvas config
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360
};
// We are letting the new instance of the game use the config we set above
let game = new Phaser.Game(config);
// This will now add what we imported and turned into variables and add it to the game we have.
game.scene.add('TitleScene', titleScene);
game.scene.add('BootScene', bootScene);
game.scene.add('LoadingScene', loadingScene);
// We are setting the BootScene to the scene of title so we dont need to individually route everything
game.scene.start('BootScene', {scene: 'title'});