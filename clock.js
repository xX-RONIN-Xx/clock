document.addEventListener('DOMContentLoaded', e => {
    function seg() {
        const date = new Date();
        const seconds = date.getSeconds();
        const secDegree = ((seconds / 60) * 360) + 90;// es +90 porque rotamos el div para que quede perpendicular
        let segundero = document.querySelector('.second-hand');
        segundero.style.transform = `rotate(${secDegree}deg)`;
        /***************************************minutes */
        const min = date.getMinutes();
        const minDegree = ((min / 60) * 360) + 90;
        let minutero = document.querySelector('.minute-hand');
        minutero.style.transform = `rotate(${minDegree}deg)`;
        /***************************************hours */
        const hour = date.getHours();
        const hourDegree = (((hour + (min / 60)) / 12) * 360) + 90;//a la hora hay que sumarle la fraccion de minutos, 
        //sino la aguja pegaria un salto al pasar de una hora a otra
        let hora = document.querySelector('.hour-hand');
        hora.style.transform = `rotate(${hourDegree}deg)`;
        /* lo que sigue es para evitar un parpadeo que se produce al reiniciar el ciclo*/
        let hand = document.querySelectorAll('.hand');
        if (seconds == 0) {
            hand.forEach(e => {
                e.classList.remove('transition');
            });
        } else {
            hand.forEach(e => {
                e.classList.add('transition');
            });
        }
    }
    setInterval(() => {
        seg();
    }, 1000);
})