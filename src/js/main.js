document.onmousemove = (e) => e.target.title = `${e.pageX}, ${e.pageY}`;

window.addEventListener('load', function () { // when the page loads
    const canvas = document.getElementById('game-canvas');
    canvas.width = 1500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d'); // get the 2d context of the canvas

    class InputHandler { // class to handle input
        constructor(game) {
            this.game = game;
            window.addEventListener('keydown', (event) => {
                if ((event.key === 'ArrowUp' || event.key === 'ArrowDown')
                    && !this.game.keys.includes(event.key)) {
                    this.game.keys.push(event.key);
                }
                console.log(this.game.keys);
            });
            window.addEventListener('keyup', (event) => {
                if (this.game.keys.includes(event.key)) {
                    this.game.keys = this.game.keys.filter(key => key !== event.key);
                }
                console.log(this.game.keys);
            });
        }
    }

    class Projectile { // class to handle projectiles - lasers, bullets, etc.

    }

    class Particle { // class to handle particle effects - falling screws, corks and bolts that come from damaged enemies

    }

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
            const { maxSpeed, game: { keys } } = this;

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
            this.keys = [];
            this.player = new Player(this);
            this.InputHandler = new InputHandler(this);
        }
        update() {
            this.player.update();
        }
        draw(context) {
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height); // create a new game instance

    // animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas - comment this line to see the trail effect
        game.update(); // update the game
        game.draw(ctx); // draw the game
        requestAnimationFrame(animate); // call the game loop again
    }

    animate(); // start the game loop
});
