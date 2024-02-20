
function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid; // +'1' => 1
   
    playerConfigOverlay.style.display = 'block'; 
    backdropElement.style.display = 'block';
     

}
function closePlayerConfig(){
    playerConfigOverlay.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorOutputElement.textContent = '';

}
function savePlayerConfig(event){

event.preventDefault();  // prevent browser to send request(page doesnt reload)
const formData = new FormData(event.target); // (create objects with key 'new')built in blueprints
const enteredPlayername = formData.get('playername');//.trim()//trim:remove white spaces

if ( !enteredPlayername) {  // enteredPlayername === ''
          event.target.firstElementChild.classList.add('error')
          errorOutputElement.textContent = 'Please enter a valid name!';
    return;

} 
const updatedPlayerData = document.getElementById('player-' + editedPlayer + '-data');
updatedPlayerData.children[1].textContent = enteredPlayername;




}