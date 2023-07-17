$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
//let fungusHP = 100;

let fungusHP = 100;
let attackAP = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $('.attacks').on('click', humanAttack);
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function humanAttack(){
    console.log('Good Job!');
    let losePoints = 

}
