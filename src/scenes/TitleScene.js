//this class is a extention of Phaser.Scene from our main.js
class TitleScene extends Phaser.Scene {
    constructor() {
        //tells phaser that this scene is named 'TitleScene'. A super is refering to an exended class. Without a super we would pull an empty object.
        super({key: 'TitleScene'});
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
            // We have two sprite types in our Sprites json. We have a text and sprite type
            let sprite = undefined;
            switch(sprite_data.type) {
                case 'sprite':
                // We need to find the position of the sprite and the texture of the sprite that we bring in.
                    sprite = this.add.sprite(sprite_data.position.x, sprite_data.position.y, sprite_data.texture);
                    break;
                case 'text':
                    sprite = this.add.text(sprite_data.position.x, sprite_data.position.y, sprite_data.text, sprite_data.style);
                    break;
            }
            this.sprites[sprite_name] = sprite;
            this.groups[sprite_data.group].add(sprite);
        }
    }
}

export default TitleScene;