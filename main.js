let letraB = document.getElementById('letra-b');
let letraI = document.getElementById('letra-i');
let letraN = document.getElementById('letra-n');
let letraG = document.getElementById('letra-g');
let letraO = document.getElementById('letra-o');

let iconPlay = document.getElementById('numeroIniciar');
var contadorBolos = document.getElementById('contador');
let numeroBingo = document.getElementById('numeroBingo');
let playBtn = document.getElementById('play');

var sonido = document.createElement("audio");
sonido.setAttribute('src','tambor.wav');

let ya;
let packB = [];
let packI = [];
let packN = [];
let packG = [];
let packO = [];

let numeroAleatorio = 0;
let bolos = [];
let contador = 0;

for (let i = 1; i < 76; i++) {
    let numero = document.createElement('div');
    numero.classList.add('numeros');

    if (i <= 15) {
        numero.textContent = i;
        letraB.appendChild(numero);
        packB.push(i);
        numero.setAttribute('id','num'+i);
    }

    if (i > 15 && i <= 30) {
        numero.textContent = i;
        letraI.appendChild(numero);
        packI.push(i);
        numero.setAttribute('id','num'+i);
    }

    if (i > 30 && i <= 45) {
        numero.textContent = i;
        letraN.appendChild(numero);
        packN.push(i);
        numero.setAttribute('id','num'+i);
    }

    if (i > 45 && i <= 60) {
        numero.textContent = i;
        letraG.appendChild(numero);
        packG.push(i);
        numero.setAttribute('id','num'+i);
    }

    if (i > 60 && i <= 75) {
        numero.textContent = i;
        letraO.appendChild(numero);
        packO.push(i);
        numero.setAttribute('id','num'+i);
    }
}

iconPlay.addEventListener('click', play);
//iconStop.addEventListener('click', stop);

function jugar() {

    contador = 0;
    numeroAleatorio = Math.floor(Math.random()*75+1);
    //sonarTambor();
    sonido.play();

    if (bolos.length < 1) {
        numeroBingo.textContent = numeroAleatorio;
        bolos.push(numeroAleatorio);
        let numeroPintar = document.getElementById('num'+numeroAleatorio);
        numeroPintar.style.backgroundColor = '#2dce89';
        contadorDeBolos();

    } else {

        do {

            for (let i = 0; i < bolos.length; i++) {

                if (numeroAleatorio === bolos[i]) {
                    contador++;
                }
            }

            if (contador < 1) {
                numeroBingo.textContent = numeroAleatorio;
                bolos.push(numeroAleatorio);
                let numeroPintar = document.getElementById('num'+numeroAleatorio);
                numeroPintar.style.backgroundColor = '#2dce89';
                contadorDeBolos();
            }

        } while (contador == 0);
    }
}

function play() {

    if (playBtn.className === 'icon-pause') {
        playBtn.className = 'icon-play_arrow';
        clearInterval(ya);
        sonido.pause();

    } else {
        playBtn.className = 'icon-pause';
        ya = setInterval('jugar()',4000);
        sonido.play();
    }
}

function contadorDeBolos() {

    contadorBolos.textContent = bolos.length + ' / ' + '75';
}

function sonarTambor() {

    //document.body.appendChild(sonido);
}


