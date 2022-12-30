( function(){ // IIFE, fugindo do escopo global
// Initial data
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

// Functions
function updateClock(){
    let now = new Date();
    let hour = now.getHours( );
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    // Convertendo segundos/minutos para graus e compensado com -90deg pq no js o 0deg é no canto direito, como se fosse 45deg;
    let secondDeg = ((360 / 60) * second) - 90;
    let mdeg = ((360 / 60) * minute) - 90;
    // o relógio só tem 12 horas, ou seja, ele precisa de 2 voltas pra dar 24
    let hdeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${secondDeg}deg)`;
    mElement.style.transform = `rotate(${mdeg}deg)`;
    hElement.style.transform = `rotate(${hdeg}deg)`;
}

function fixZero(time){
    return time < 10 ? `0${time}` : time
}
// Cria um intervalo em looping de 1s
setInterval(updateClock, 1000);
updateClock();
}() );

