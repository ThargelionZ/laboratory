var canvas,
    width,
    height,
    renderingContext,
    frames = 0,
    buttonActivated = false,
    hammerTable = false,
    bucketTable = false,
    potionTable = false,
    geekoTable = true,
    mouseX,
    mouseY,
    geekoAlive = false;




function main() {
    windowSetUp();
    canvasSetUp();
    loadGraphics();

    document.body.appendChild(canvas);
}

function windowSetUp() {
    width = window.innerWidth;
    height = window.innerHeight;

    var inputEvent = "touchstart";
    if(width >= 500){
        width = 900;
        height = 676;
        inputEvent = "mousedown";
    }

    // Create a listener on the input event.

    document.addEventListener(inputEvent, onclick);
    //document.addEventListener("mouseup", onup);
}

// function onup(evt) {
//
// }

function onclick(evt) {
    mouseX = evt.offsetX;
    mouseY = evt.offsetY;

    if(mouseX == null || mouseY == null){
        mouseX = evt.touches[0].clientX;
        mouseY = evt.touches[0].clientY;
    }

    // if button is clicked
    if(554 < mouseX && mouseX < 554 + buttonSprite.width &&
       387 < mouseY && mouseY < 387 + buttonSprite.height
    ){
        buttonActivated = true;
        setTimeout(function() {
            buttonActivated = false;
        }, 500);
        if(bucketTable && hammerTable && potionTable){
            bucketTable = false;
            hammerTable = false;
            potionTable = false;
            geekoAlive = true;
        }
    }

    if(geekoAlive){
        if(120 < mouseX && mouseX < 120 + hammerSprite.width &&
            460 < mouseY && mouseY < 460 + hammerSprite.height
        ){
            geekoTable = false;
        }
    }

    if(geekoAlive){
        if(650 < mouseX && mouseX < 650 + hammerSprite.width &&
            120 < mouseY && mouseY < 120 + hammerSprite.height
        ){
            geekoTable = true;
        }
    }


    // if hammer is clicked
    if(120 < mouseX && mouseX < 120 + hammerSprite.width &&
        130 < mouseY && mouseY < 130 + hammerSprite.height
    ){
        hammerTable = true;
    }
    // if bucket is clicked
    else if(300 < mouseX && mouseX < 300 + bucketSprite.width &&
        150 < mouseY && mouseY < 150 + bucketSprite.height
    ){
        bucketTable = true;
    }
    // if potion is clicked
    else if(480 < mouseX && mouseX < 480 + potionSprite.width &&
        140 < mouseY && mouseY < 140 + potionSprite.height
    ){
        potionTable = true;
    }


    if(bucketTable && (120 < mouseX && mouseX < 120 + bucketSprite.width &&
        470 < mouseY && mouseY < 470 + bucketSprite.height)) {
        bucketTable = false;
    }
    if(hammerTable && (30 < mouseX && mouseX < 30 + hammerSprite.width &&
        460 < mouseY && mouseY < 460 + hammerSprite.height)) {
        hammerTable = false;
    }
    if(potionTable && (200 < mouseX && mouseX < 200 + potionSprite.width &&
        470 < mouseY && mouseY < 470 + potionSprite.height)) {
        potionTable = false;
    }


}

function canvasSetUp() {
    canvas = document.createElement("canvas");

    canvas.style.border = "15px solid #382b1d";
    canvas.style.margin = "0px auto";

    canvas.width = width;
    canvas.height = height;

    renderingContext = canvas.getContext("2d");
}

function loadGraphics() {
    // Initiate the sprite sheet
    var img = new Image();
    img.src = "images/labsheet.png";
    img.onload = function() {
        initSprites(this);
        //renderingContext.fillStyle = "#8BE4FD";
        // NOT NECESSARY alienSprite[0].draw(renderingContext, 50, 50);
        gameLoop()
    };
}

function gameLoop() {
    update();
    render();

    window.requestAnimationFrame(gameLoop);
}

function update() {
    frames++;
    // alien.update();

    // if(currentState !== states.Score){
    //     foregroundPosition = (foregroundPosition - 3) % 24; //Play around with the modulus number for the framerate. Play with the subtraction for speed
    // }
    //
    // if(currentState === states.Game){
    //     corals.update();
    // }

    //console.log(frames);
}

function render() {
    renderingContext.fillRect(0, 0, width, height);
    backgroundSprite.draw(renderingContext, 0, 0);
    foregroundSprite.draw(renderingContext, -100, 450);

    if(hammerTable){
        hammerSprite.draw(renderingContext, 30, 460);
    } else {
        hammerSprite.draw(renderingContext, 120, 130);
    }

    if(bucketTable){
        bucketSprite.draw(renderingContext, 120, 470);
    } else {
        bucketSprite.draw(renderingContext, 300, 150);
    }

    if(potionTable){
        potionSprite.draw(renderingContext, 200, 470);
    } else {
        potionSprite.draw(renderingContext, 480, 140);
    }

    buttonSprite.draw(renderingContext, 554, 387);
    if(buttonActivated){
        lightningSprite.draw(renderingContext, 0, -100);
    }

    if(geekoAlive){
        if(!geekoTable){
            geekoSprite.draw(renderingContext, 650, 120);
        } else {
            geekoSprite.draw(renderingContext, 120, 460);
        }

    }
}
