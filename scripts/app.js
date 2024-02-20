let editedPlayer = 0;
const players = [
    {
        name: '',
        Symbol: 'X'
    },
    {
        name: '',
        Symbol: 'O'
    }

];

const playerConfigOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-errors');




const editPlayer1Button = document.getElementById('edit-player-1-btn');
const editPlayer2Button = document.getElementById('edit-player-2-btn');
const cancelConfigButton = document.getElementById('cancel-config-btn');


editPlayer1Button.addEventListener('click' ,openPlayerConfig);
editPlayer2Button.addEventListener('click', openPlayerConfig );
cancelConfigButton.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig );


formElement.addEventListener('submit',savePlayerConfig );
