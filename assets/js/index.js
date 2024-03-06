let puntosUsuario = 0;
let puntosPc = 0; 
let NumeroJuegos = document.querySelector('#numeroJuegos');
let CantidadJuegos = document.querySelector('#cantidadJuegos');
let aJugar = document.querySelector('#aJugar');
let puntajeUsuario = document.querySelector('#puntajeUsuario');
let puntajePc = document.querySelector('#puntajePc');
let elijeMano = document.querySelector('#elijeMano');
let btnManos = document.querySelectorAll('.lpm');
let btnReset = document.querySelector('#btnReset');
let btnActivar = document.querySelector('#btnActivar');
let btnSiguientePartida = document.querySelector('#btnSiguientePartida');
let juego = document.querySelector('#juego');
let seleccionado = 0;
let numSelect = 0;
let cont = 1;
let contUsuario = 0;
let contCom = 0;
let imgR = document.querySelector('#imgR');
let resulGlobal = document.querySelector('#resulGlobal');
btnReset.classList.add("d-none");
btnSiguientePartida.classList.add("d-none");
juego.classList.add("d-none");

NumeroJuegos.addEventListener('change', numero);

function numero()
{
    let selectedOption = NumeroJuegos[NumeroJuegos.selectedIndex];
    if(selectedOption != "Cuantos Juegos Quiere Jugar")
    {
        numSelect = selectedOption.value;
        return numSelect;
    }
}  

function comenzar()
{
    console.log(select());
    if(numero() != "Cuantos Juegos Quiere Jugar" && select() != 0)
    {            
            if(cont <= numero())
            {
                btnActivar.classList.add("d-none");
                elijeMano.classList.remove("d-none");
                juego.classList.remove("d-none");
                document.getElementById('cantidadJuegos').disabled = true;
                document.getElementById('numeroJuegos').disabled = true;
                cont++;
                btnSiguientePartida.addEventListener("click", siguiente);
                document.querySelector('#img1').setAttribute('src', 'assets/img/mano_piedra_izquierda.png');
                document.querySelector('#img2').setAttribute('src', 'assets/img/mano_piedra_derecha.png');
                
            }
            else
            {
                btnActivar.classList.remove("d-none");
                btnReset.addEventListener("click", resetBtn);
                btnSiguientePartida.classList.add("d-none");
                btnReset.classList.remove("d-none");
                aJugar.innerText = "SE TERMINARON LAS PARTIDAS, "+resultado();
                imgR.innerText = " Iniciar Nueva Partida";
                document.querySelector('#img1').setAttribute('src', 'assets/img/mano_piedra_izquierda.png');
                document.querySelector('#img2').setAttribute('src', 'assets/img/mano_piedra_derecha.png');
                
            }
    }
    else
    {
            Swal.fire('Error', "Ingrese Cantidad juegos y al mejor de.", 'error');
    }
    
}

btnManos.forEach(boton =>{
    boton.addEventListener("click", iniciar);
});


function iniciar(e)
{
    let Pc = Math.floor(Math.random()*3);
    let Usuario = e.currentTarget.id;

   
        //Eleccion Usuario y asignar imagen segun corresponda.
        if(Usuario == "Piedra")
        {
            document.querySelector('#img1').setAttribute('src', 'assets/img/mano_piedra_izquierda.png');
        }
        else if(Usuario == "Papel")
        {
            document.querySelector('#img1').setAttribute('src', 'assets/img/mano_papel_izquierda.png');
        }
        else if(Usuario == "Tijera")
        {
            document.querySelector('#img1').setAttribute('src', 'assets/img/mano_tijera_izquierda.png');
        }

        //Eleccion PC y cambiar imagen o mano segun corresponda.
        if(Pc == 0)
        {
            Pc = "Piedra";
            document.querySelector('#img2').setAttribute('src', 'assets/img/mano_piedra_derecha.png');
        }
        else if(Pc == 1)
        {
            Pc = "Papel";
            document.querySelector('#img2').setAttribute('src', 'assets/img/mano_papel_derecha.png');
        }
        else if(Pc == 2)
        {
            Pc = "Tijera";
            document.querySelector('#img2').setAttribute('src', 'assets/img/mano_tijera_derecha.png');
        }

        //Juego empate o Ganador
        if(Usuario == "Piedra" && Pc == "Piedra") //empate
        {
            aJugar.innerText = "Empate vuelva a intentar";
        }
        else if(Usuario == "Papel" && Pc == "Papel") //empate
        {
            aJugar.innerText = "Empate vuelva a intentar";
        }
        else if(Usuario == "Tijera" && Pc == "Tijera") //empate
        {
            aJugar.innerText = "Empate vuelva a intentar";
        }
        else if(Usuario == "Piedra" && Pc == "Papel") // Com vence a Usuario
        {
            aJugar.innerText = "Ganador Jugador Com";
            puntosPc++;
            puntajePc.innerText = puntosPc;
        }
        else if(Usuario == "Piedra" && Pc == "Tijera") //Usuario vence a Com
        {
            aJugar.innerText = "Ganador Jugador Usuario";
            puntosUsuario++;
            puntajeUsuario.innerText = puntosUsuario;
        }
        else if(Usuario == "Papel" && Pc == "Piedra")
        {
            aJugar.innerText = "Ganador Jugador Usuario";
            puntosUsuario++;
            puntajeUsuario.innerText = puntosUsuario;
        }
        else if(Usuario == "Tijera" && Pc == "Piedra")
        {
            aJugar.innerText = "Ganador Jugador Com";
            puntosPc++;
            puntajePc.innerText = puntosPc;
        }
        else if(Usuario == "Papel" && Pc == "Tijera")
        {
            aJugar.innerText = "Ganador Jugador Com";
            puntosPc++;
            puntajePc.innerText = puntosPc;
        }
        else if(Usuario == "Tijera" && Pc == "Papel")
        {
            aJugar.innerText = "Ganador Jugador Usuario";
            puntosUsuario++;
            puntajeUsuario.innerText = puntosUsuario;
        }

        if(puntosUsuario === seleccionado || puntosPc === seleccionado)
        {
            if(puntosUsuario === seleccionado)
            {
                aJugar.innerText = "El Juego Termino ¡Ganaste la Partida "+(cont-1)+"!"; 
                contUsuario++;
                
            }

            if(puntosPc === seleccionado)
            {
                aJugar.innerText = "El Juego Termino ¡Perdiste la Partida "+(cont-1)+" contra Com!";
                contCom++;
            }
            resulGlobal.innerText = "MARCADOR GLOBAL USUARIO "+contUsuario+" - "+contCom+" COM";
            elijeMano.classList.add("d-none");
            btnSiguientePartida.classList.remove("d-none");
            
        }  
}

function resultado()
{
    if(contUsuario > contCom)
    {
        return "USUARIO FUE EL GANADOR.";
    }
    else if(contCom > contUsuario)
    {
        return "PERDISTE CONTRA COM.";
    }
    else
    {
        return "FUE UN EMPATE."
    }
}

CantidadJuegos.addEventListener('change', select);

function select()
{
    let Option = CantidadJuegos[CantidadJuegos.selectedIndex];

    if(Option != "Al mejor de")
    {
        if(Option.text == "Una")
        {
            seleccionado = 1;
        }
        else if(Option.text == "Tres")
        {
            seleccionado = 3;
        }
        else if(Option.text == "Cinco")
        {
            seleccionado = 5;
        }
        else if(Option.text == "Siete")
        {
            seleccionado = 7;
        }
        return seleccionado;
    }
}

function siguiente()
{
    btnSiguientePartida.classList.add("d-none");
    btnReset.classList.add("d-none");
    btnActivar.classList.remove("d-none");;
    puntosUsuario = 0;
    puntosPc = 0;
    puntajeUsuario.innerText = puntosUsuario;
    puntajePc.innerText = puntosPc;
    aJugar.innerText = "A JUGAR....!!!";
    document.querySelector('#img1').setAttribute('src', 'assets/img/mano_piedra_izquierda.png');
    document.querySelector('#img2').setAttribute('src', 'assets/img/mano_piedra_derecha.png');
}

function resetBtn()
{
    btnReset.classList.add("d-none");
    btnActivar.classList.remove("d-none")
    juego.classList.add("d-none");
    elijeMano.classList.add("d-none");
    puntosUsuario = 0;
    puntosPc = 0;
    cont = 1;
    contUsuario = 0;
    contCom = 0;
    resulGlobal.innerText = "MARCADOR GLOBAL USUARIO 0 - 0 COM";
    puntajeUsuario.innerText = puntosUsuario;
    puntajePc.innerText = puntosPc;
    aJugar.innerText = "A JUGAR....!!!";
    document.querySelector('#formJuego').reset();
    document.getElementById('cantidadJuegos').disabled = false;
    document.getElementById('numeroJuegos').disabled = false;
    document.querySelector('#img1').setAttribute('src', 'assets/img/mano_piedra_izquierda.png');
    document.querySelector('#img2').setAttribute('src', 'assets/img/mano_piedra_derecha.png');
}


if(document.querySelector('#listImagenes'))
{
    let listImagenes = document.querySelector('#listImagenes');
    listImagenes.onclick = function(e)
    {
        e.preventDefault();

        let listImg = document.querySelector('#listImagenes').value;

        if(listImg == 1)
        {
            document.querySelector(".card").style.backgroundImage = 'url("assets/img/estacion-internacional.jpg")';  
        }
        else if(listImg == 2)
        {
            document.querySelector(".card").style.backgroundImage = 'url("assets/img/Gta5-LosSantos.jpg")';
        }
        else if(listImg == 3)
        {
            document.querySelector(".card").style.backgroundImage = 'url("assets/img/Granja.jpg")';
        }
        else if(listImg == 4)
        {
            document.querySelector(".card").style.backgroundImage = 'url("assets/img/Andromeda.jpg")';
        }
        else if(listImg == 5)
        {
            document.querySelector(".card").style.backgroundImage = 'url("assets/img/PlayaCaribe.jpg")';
        }
    }
}