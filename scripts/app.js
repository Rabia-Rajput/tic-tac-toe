const playerConfigOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');



const editPlayer1Button = document.getElementById('edit-player-1-btn');
const editPlayer2Button = document.getElementById('edit-player-2-btn');
const cancelConfigButton = document.getElementById('cancel-config-btn');


editPlayer1Button.addEventListener('click' ,openPlayerConfig);
editPlayer2Button.addEventListener('click', openPlayerConfig );
cancelConfigButton.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig );
