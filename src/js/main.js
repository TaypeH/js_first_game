window.addEventListener('load', function () { // when the page loads
    const canvas = document.getElementById('game-canvas');
    canvas.width = 1500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d'); // get the 2d context of the canvas

    class InputHandler { // class to handle input

    }

    class Projectile { // class to handle projectiles - lasers, bullets, etc.

    }

    class Particle { // class to handle particle effects - falling screws, corks and bolts that come from damaged enemies

    }

    class Player { // class to handle the main character
        constructor(game) {
            this.game = game;
            this.width = 120; // the same as the sprite
            this.height = 50; // the same as the sprite
            this.x = 20;
            this.y = 100;
            this.speedY = 0;
        }
        update() {
            this.y += this.speedY;
        }
        draw(context) {
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    class Enemy { // class to handle enemies

    }

    class Layer { // class to handle layers - background, foreground, etc.

    }

    class Background { // class to handle the background - put all together

    }

    class UI { // class to handle the score, timer and other UI elements

    }

    class Game { // class to handle the game - put all together
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player(this);
        }
        update() {
            this.player.update();
        }
        draw(context) {
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height); // create a new game instance

});
