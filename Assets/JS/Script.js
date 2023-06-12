// Áudios:

const trilha_sonora = new Audio('Assets/Sounds/Trilha_Sonora.mp3');

const yahoo = new Audio("Assets/Sounds/Pulo.mp3");

const fim = new Audio("Assets/Sounds/Fim_de_Jogo.mp3");

// Elementos - HTML:

const mario = document.getElementById("mario");

const cano = document.getElementById("pipe");

const nuvens = document.getElementById("clouds");

// Variável de Controle:

var derrota = false;

// Funções:

function comecar()
{
    
    // Eventos da Página:

    document.addEventListener("keydown", pular);

    document.getElementById("initialize_game").style.display = "none";

    document.getElementById("game").style.display = "flex";

    document.getElementById("reload_game").style.display = "none";

    trilha_sonora.play()
    
}

const pular = () => {

    mario.classList.add("jump");

    yahoo.play()

    setTimeout(retornar, 500);

}

const retornar = () => {

    mario.classList.remove("jump");

}

const verificar_status = setInterval(
    
    () => {

        if(derrota == false)
        {

            const posicao_mario = Number(window.getComputedStyle(mario).bottom.replace("px", ""));

            //const posicao_mario = +window.getComputedStyle(mario).bottom.replace("px", "");

            const posicao_cano = cano.offsetLeft;

            const posicao_nuvens = nuvens.offsetLeft;

            if(posicao_cano > 0 && posicao_cano <= 64 && posicao_mario < 70)
            {

                mario.style.bottom = posicao_mario + "px";

                cano.style.left = posicao_cano + "px";

                nuvens.style.left = posicao_nuvens + "px";

                //cano.style.right = "87%";

                morrer();

                fim.play()

                setTimeout(() => {

                    document.getElementById("game").style.display = "none";

                    document.getElementById("reload_game").style.display = "flex";

                    }, 8000

                );
                
            }

        }

        else
        {

            clearInterval(verificar_status);

        }
    
    }, 10

);

function morrer()
{

    mario.style.animation = "none";

    cano.style.animation = "none";

    nuvens.style.animation = "none";

    mario.classList.remove("jump");

    trilha_sonora.pause();

    mario.src = "Assets/Images/Morte.png";

    mario.style.width = "5%";

    derrota = true;

    document.removeEventListener("keydown", pular);

}

function reiniciar()
{

    window.location.reload(true);
    
}
