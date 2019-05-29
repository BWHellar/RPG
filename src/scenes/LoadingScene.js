// This class will load assests and alert the player while its loading
class LoadingScene extends Phaser.Scene{
    constructor(){
        super({key: 'LoadingScene'});
   
    }
    //while data is loading out put the text "loading..."
    init (data){
        this.level_data = data.level_data;

        let loading_message = this.add.text(320,240,"Loading...", {font: "48px Arial", fill: "#ffffff"});
    }
    preload(){
        let assets = this.level_data.assets;
        // We want to iterate through our assets so that it will say every asset that is currently loading
        for(let asset_key in assets) {
            let asset = assets[asset_key];
            switch (asset.type)    {
                case "image":
                    this.load.image(asset_key, asset.source);
                    break;
                case "spritesheet":
                    this.load.spritesheet(asset_key, asset.source, {frameWidth: asset.frame_width, frameHeight: asset.frame_height, frames: asset.frames, margin: asset.margin, spacing: asset.spacing});
                    break;
            }
        }
    }
    create(){
        this.scene.start('TitleScene', {level_data: this.level_data});
    }
}
export default LoadingScene;