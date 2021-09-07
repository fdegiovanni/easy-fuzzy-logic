import Utils from './utils.js';

export default class Sistem {
    constructor(){
        this.util = new Utils();
        this.consty = this.util.getRandomArbitrary(150, 450);
        this.data = {
            gravedad: 9.81,
            posY: this.consty,
            velY: 0,
            x: 400,
            y: this.consty,
            objY: 225,
            ventilador: this.util.getRandomArbitrary(1, 120),
            caos: 0
        };
    }

    setCaos(){
        this.data.caos =  this.util.getRandomArbitrary(-3, 3);
    }

    update(){
        setInterval(() => {
            this.data = this.util.fuzzification(this.data);
            this.setCaos();
            this.data.velY += ((this.data.gravedad - this.data.ventilador + this.data.caos) * 0.01);
            this.data.posY += this.data.velY;
            this.data.y = this.data.posY;
            this.util.draw(this.data)
        }, 20);
    }

}
