'use strict';

const plotHeight = 500;

window.addEventListener('load', () => {
    
});

class Point {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = plotHeight - y; // so it starts from bottom left
    }
    x() {
        return this.x;
    }
    y() {
        return this.y;
    }
    plot() {
        document.getElementById('graph').insertAdjacentHTML('beforeend', `<circle cx="${this.x}" cy="${this.y}" r="5" fill="#000" />`);
    }
}
