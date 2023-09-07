let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container button')
let messageContainer = document.querySelector('#msg')
let messageText = document.querySelector('#msg p')
let secondPlayer;

//contador de jogadas

let player1 = 0
let player2 = 0

//adicionando eventos

for (let i = 0; i < boxes.length; i++) {

    //quando alguem clica na caixa

    boxes[i].addEventListener('click', function () {

        let el = checkEl(player1, player2);

        //verifica se é X ou O

        if (this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true)

            this.appendChild(cloneEl);

            // computar jogadas

            if (player1 == player2) {
                player1++;

                if (secondPlayer == 'ia-player') {
                    //executar a jogada
                    computerPlayer();
                    player2++;
                }
            } else {
                player2++
            }

            //checa quem venceu
            checkWinCondition();
        }

    })

}
// 2 player vs ia

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        secondPlayer = this.getAttribute('id')

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none'
        }

        setTimeout(function () {
            let container = document.querySelector('#container')
            container.classList.remove('hide')
        }, 500)
    })
}

// ordem de jogo
function checkEl(player1, player2) {
    if (player1 == player2) {
        el = x
    } else {
        el = o
    }

    return el;

}

//funcao quem ganhou?

function checkWinCondition() {

    let b1 = document.getElementById('b-1')
    let b2 = document.getElementById('b-2')
    let b3 = document.getElementById('b-3')
    let b4 = document.getElementById('b-4')
    let b5 = document.getElementById('b-5')
    let b6 = document.getElementById('b-6')
    let b7 = document.getElementById('b-7')
    let b8 = document.getElementById('b-8')
    let b9 = document.getElementById('b-9')

    //condition

    //horizontal

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if (b1child == 'x' && b2child == 'x' && b3child == 'x') {
            declareWinner('x')
        } else if (b1child == 'o' && b2child == 'o' && b3child == 'o') {
            declareWinner('o')
        }

    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if (b4child == 'x' && b5child == 'x' && b6child == 'x') {
            declareWinner('x')
        } else if (b4child == 'o' && b5child == 'o' && b6child == 'o') {
            declareWinner('o')
        }

    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b7child == 'x' && b8child == 'x' && b9child == 'x') {
            declareWinner('x')
        } else if (b7child == 'o' && b8child == 'o' && b9child == 'o') {
            declareWinner('o')
        }

    }

    //vertical

    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if (b1child == 'x' && b4child == 'x' && b7child == 'x') {
            declareWinner('x')
        } else if (b1child == 'o' && b4child == 'o' && b7child == 'o') {
            declareWinner('o')
        }

    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if (b2child == 'x' && b5child == 'x' && b8child == 'x') {
            declareWinner('x')
        } else if (b2child == 'o' && b5child == 'o' && b8child == 'o') {
            declareWinner('o')
        }

    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b3child == 'x' && b6child == 'x' && b9child == 'x') {
            declareWinner('x')
        } else if (b3child == 'o' && b6child == 'o' && b9child == 'o') {
            declareWinner('o')
        }

    }

    // diagonal

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b1child == 'x' && b5child == 'x' && b9child == 'x') {
            declareWinner('x')
        } else if (b1child == 'o' && b5child == 'o' && b9child == 'o') {
            declareWinner('o')
        }

    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if (b3child == 'x' && b5child == 'x' && b7child == 'x') {
            declareWinner('x')
        } else if (b3child == 'o' && b5child == 'o' && b7child == 'o') {
            declareWinner('o')
        }

    }

    // velha

    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {

        if (boxes[i].childNodes[0] != undefined) {
            counter++
        }
    }

    if (counter == 9) {
        declareWinner('DEU VELHA')
    }

}

// limpar jogo, declarar vencedor, atualizar o placar

function declareWinner(winner) {
    let scoreBoardX = document.querySelector('#x-result');
    let scoreBoardO = document.querySelector('#o-result');
    let msg = ''

    if (winner == 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1
        msg = 'X - VENCEU';
    } else if (winner == 'o') {
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1
        msg = 'O - VENCEU';
    } else {
        msg = 'DEU VELHA';
    }

    //exibir msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove('hide')


    //esconder msg
    setTimeout(function () {
        messageContainer.classList.add('hide')
    }, 4000)
    //zerar jogadas
    player1 = 0
    player2 = 0

    //removendo marcações

    let boxToRemove = document.querySelectorAll('.box div')

    for (let i = 0; i < boxToRemove.length; i++) {
        boxToRemove[i].parentNode.removeChild(boxToRemove[i])
    }
}


// AI player 
function computerPlayer() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for (let i = 0; i < boxes.length; i++) {
        let randowNumber = Math.floor(Math.random() * 5)

        if (boxes[i].childNodes[0] == undefined) {
            if (randowNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        } else {
            filled++
        }
    }

    if (counter == 0 && filled < 9) {
        computerPlayer()
    }

}