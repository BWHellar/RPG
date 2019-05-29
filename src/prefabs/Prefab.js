// A Prefab is an array of Game Objects which will be utilized instead of counting on switch statements
class Prefab extends Phaser.GameObjects.Sprite{
    //this constructor will find the location of the sprite and texture
    constructor(scene, name, position, properties) {
        super(scene, position.x, position.y, properties.texture, properties.frame);
        // This is an objet with the levels in our game.
      this.scene = scene;
      this.name = name;
      this.scene.add.existing(this);
      this.scene.groups[properties.group].add(this);
      // As a note in Phsaer. Sprites have their origin set in the middle of said sprite.
      if (properties.scale){
          this.setScale(properties.scale.x, properties.scale.y);
      }
      if (properties.anchor){
        this.setOrigin(properties.anchor.x, properties.anchor.y);
      }
      this.scene.sprites[name] = this;
    }
}
export default Prefab;