import Game from './models/game.js';
import { setMouseCoordinates } from './utils/mouseCoordinates.js';

window.addEventListener('load', function () { // when the page loads
    // setMouseCoordinates(); // set the mouse coordinates

    const canvas = document.getElementById('game-canvas');
    canvas.width = 1500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d'); // get the 2d context of the canvas

    class Projectile { // class to handle projectiles - lasers, bullets, etc.

    }

    class Particle { // class to handle particle effects - falling screws, corks and bolts that come from damaged enemies

    }

    class Enemy { // class to handle enemies

    }

    class Layer { // class to handle layers - background, foreground, etc.

    }

    class Background { // class to handle the background - put all together

    }

    class UI { // class to handle the score, timer and other UI elements

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
