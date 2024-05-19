export const setMouseCoordinates = () => {
    document.addEventListener('mousemove', (event) => {
        // document.onmousemove = (event) => event.target.title = `${event.pageX}, ${event.pageY}`;

        const coordElement = document.getElementById('mouse-coordinates');
        const x = event.clientX;
        const y = event.clientY;

        coordElement.style.left = `${x + 10}px`; // Offset by 10px for better visibility
        coordElement.style.top = `${y + 10}px`;
        coordElement.textContent = `X: ${x}, Y: ${y}`;
    });
};
