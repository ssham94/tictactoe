
document.addEventListener("DOMContentLoaded", function() {
    const board = document.querySelector('table')
    const square = document.querySelectorAll('td');
    let player1 = []
    let player2 = []
    const winConditions = [
        [1,2,3],
        [1,5,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [4,5,6],
        [7,8,9],
        [3,5,7]
    ]
    let turnCounter = 0;
    function checkWinner() {
        for (let index = 0; index < winConditions.length; index++){
            if (player1.includes(winConditions[index][0]) && player1.includes(winConditions[index][1]) && player1.includes(winConditions[index][2])){
                return 'Winner is Player 1'
            } else if (player2.includes(winConditions[index][0]) && player2.includes(winConditions[index][1]) && player2.includes(winConditions[index][2])){
                return 'Winner is Player 2'
            } else if(turnCounter == 9) {
                return 'The Game Is Tied'
            }
        }
    }
    board.addEventListener('click', function(e){
        if (e.target.nodeName == "TD"){
            if (e.target.classList == 'NaN'){
                turnCounter -= 1
            }
            if (e.target.classList != 'NaN'){
                if (turnCounter % 2 == 0){
                    player1.push(parseInt(e.target.classList[0]))
                    e.target.innerHTML = 'X'
                    e.target.classList = NaN
                    e.target.bgColor = 'Blue'
                }
                console.log('player1 list: '+ player1)
            }
            if (e.target.classList != 'NaN'){
                if (turnCounter % 2 != 0){
                    player2.push(parseInt(e.target.classList[0]))
                    e.target.innerHTML = 'O'
                    e.target.classList = NaN
                    e.target.bgColor = 'Red'
                }
                console.log(player2)
            }
        }
        
        if (e.target.nodeName == 'TABLE'){
            alert('YOU THOUGHT YOU CLICKED A SQUARE')
            setTimeout(function(){
                window.location.href="https://www.meme-arsenal.com/memes/13796ad721fe2fada659c68fc005ad02.jpg"
        },1)
        }
        turnCounter += 1
        console.log('turn counter: '+ turnCounter)
        let status = checkWinner()
        if (status){
            setTimeout(function() {alert(status)}, 100)
        }

    })
});
