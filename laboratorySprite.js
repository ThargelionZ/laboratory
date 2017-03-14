var buttonSprite,
    backgroundSprite,
    foregroundSprite,
    hammerSprite,
    bucketSprite,
    potionSprite,
    lightningSprite,
    geekoSprite;



function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Sprite.prototype.draw = function(renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};

function initSprites(img){
    buttonSprite = new Sprite(img, 486, 829, 47, 47);
    backgroundSprite = new Sprite(img, 0, 0, 900, 676);
    foregroundSprite = new Sprite(img, 0, 710, 432, 228);
    hammerSprite = new Sprite(img, 493, 705, 77, 86);
    bucketSprite = new Sprite(img, 597, 721, 51, 61);
    potionSprite = new Sprite(img, 677, 719, 62, 66);
    lightningSprite = new Sprite(img, 935, 15, 236, 661);
    geekoSprite = new Sprite(img, 583, 794, 72, 92);
}
