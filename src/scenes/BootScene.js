class BootScene extends Phaser.Scene{
    constructor(){
        super({key: 'BootScene'});
        // This is an objet with the levels in our game.
        this.levels = {
           title: {key: 'TitleScene', path: 'assets/levels/title_screen.json'} 
        };
    }
    preload(){
        // We could do this for each level but we want to automate it to go through what we have.
        for (let level_name in this.levels){
            let level = this.levels[level_name];
            this.load.json(level_name, level.path);
        }
    }
    create(data){
        // This will allow us to get the level we stated above in this.levels.  It was cached earlier and now we are going to retrieve the object.
        let level_data = this.cache.json.get(data.scene);
        this.scene.start('LoadingScene', {level_data: level_data});
    }
}
export default BootScene;