import Memberships from './memberships.js';

export default class Utils {
    constructor(){
        this.memeberships = new Memberships();
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    draw(data){
        // mover bolita
        // mover ventilador
        // mostrar un texto con info
        const ball = document.getElementById('ball');
        ball.style.top = data.y+'px';

        const posicion = document.getElementById('posicion');
        posicion.innerText = data.y;

        const velocidad = document.getElementById('velocidad');
        velocidad.innerText = data.velY;

        const ventilador = document.getElementById('ventilador');
        ventilador.innerText = data.ventilador;

        const objetivo = document.getElementById('objetivo');
        objetivo.innerText = data.objY;
    }

    fuzzification(data){
        let distancia = data.objY - data.posY;

        let centrado = this.memeberships.triangle(distancia, -40, 0, 40);
        let cercaA = this.memeberships.trapezoid(distancia, 20, 80, 120, 180);
        let normalA = this.memeberships.trapezoid(distancia, 120, 160, 240, 280);
        let lejosA = this.memeberships.grade(distancia, 240, 300);

        let cercaB = this.memeberships.trapezoid(distancia, -180, -120, -80, -20);
        let normalB = this.memeberships.trapezoid(distancia, -280, -240, -160, -120);
        let lejosB = this.memeberships.gradeInverted(distancia, -300, -240);

        const numerador = centrado*9.8 + cercaA*4 + normalA*2 + lejosA*1 + cercaB*14 + normalB*15.5 + lejosB*18;
        const denominador = centrado+cercaA+normalA+lejosA+cercaB+normalB+lejosB;
        data.ventilador = numerador/denominador;
        return data;
    }
}