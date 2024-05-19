import InputHandler from "./inputHandler.js";
import Player from "./player.js";

class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.keys = [];
        this.player = new Player(this);
        this.inputHandler = new InputHandler(this);
    }
    update() {
        this.player.update();
    }
    draw(context) {
        this.player.draw(context);
    }
}

export default Game;
