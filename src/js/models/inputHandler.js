class InputHandler { // class to handle input
    constructor(game) {
        this.game = game;
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.addEventListeners();
    }

    addEventListeners() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown({ key }) {
        const { keys } = this.game;
        const arrowKeys = ['ArrowUp', 'ArrowDown']; // only allow up and down arrow keys

        if (arrowKeys.includes(key) && !keys.includes(key)) {
            keys.push(key);
        }
    }

    handleKeyUp({ key }) {
        const { keys } = this.game;

        if (keys.includes(key)) {
            keys.splice(keys.indexOf(key), 1);
        }
    }
}

export default InputHandler;
