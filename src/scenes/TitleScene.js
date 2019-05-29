//this class is a extention of Phaser.Scene from our main.js
import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab.js';
import TextPrefab from '../prefabs/TextPrefab.js';

class TitleScene extends JSONLevelScene {
    constructor() {
        //tells phaser that this scene is named 'TitleScene'. A super is refering to an exended class. Without a super we would pull an empty object.
        super('TitleScene');
        
        this.prefab_classes = {
            background: Prefab.prototype.constructor,
            text: TextPrefab.prototype.constructor
        }
    }
}

export default TitleScene;