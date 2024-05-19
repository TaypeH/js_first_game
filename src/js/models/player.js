class Player { // class to handle the main character
    constructor(game) {
        this.game = game;
        this.height = 120; // the same as the sprite
        this.width = 50; // the same as the sprite
        this.x = 20;
        this.y = 100;
        this.speedY = 0;
        this.maxSpeed = 2;
    }

    update() {
        this.playerMovement();
    }

    draw(context) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    playerMovement() {
        const { maxSpeed, game: { keys } } = this; // keys is an array of pressed keys

        switch (true) {
            case keys.includes('ArrowUp'):
                this.speedY = -maxSpeed;
                break;
            case keys.includes('ArrowDown'):
                this.speedY = maxSpeed;
                break;
            default:
                this.speedY = 0;
                break;
        }

        this.y += this.speedY;
    }
}

export default Player;
