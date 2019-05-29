
//this class is a extention of Phaser.Scene from our main.js
class JSONLevelScene extends Phaser.Scene {
    constructor(key) {
        //tells phaser that this scene is named 'TitleScene'. A super is refering to an exended class. Without a super we would pull an empty object.
        super({key: key});
    }
    init(data)  {
        this.level_data = data.level_data;
    }
    //creates sprites
    create() {
        this.groups = {};
        this.level_data.groups.forEach(function(group_name){
            this.groups[group_name] = this.add.group();
        }, this);
        // this will go through the sprites we have designated in our json file.
        this.sprites = {};
        for (let sprite_name in this.level_data.sprites) {
            let sprite_data = this.level_data.sprites[sprite_name];
            if (this.prefab_classes.hasOwnProperty(sprite_data.type)) {
                let sprite = new this.prefab_classes[sprite_data.type](this, sprite_name, sprite_data.position, sprite_data.properties);
            }
        }
    }
}

export default JSONLevelScene;