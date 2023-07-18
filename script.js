$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
//let fungusHP = 100;

let fungusHP = 100;
let attackAP = 100;

let attacks = [
   {
    name:'Arcane Scepter',
    apCost:12,
    hpDamage:14
   },
   {
    name:'Entangle',
    apCost:23,
    hpDamage:9
   },
   {
    name:'Dragon Blade',
    apCost:38,
    hpDamage:47
   },
   {
    name:'Star Fire',
    apCost:33,
    hpDamage:25
   },


]

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    // $('.attacks').on('click', humanAttack);
    $('.attack-btn.arcane-scepter').on('click', attackArcaneScepter);
    $('.attack-btn.entangle').on('click', attackEntangle);
    $('.attack-btn.dragon-blade').on('click', attackDragonBlade);
    $('.attack-btn.star-fire').on('click', attackStarFire);

   

    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

}

// function render(){
//     // update the text above the attack buttons
//     $('.ap-text').text(attackAP + ' AP');


// }

// function humanAttack(){
//     console.log('Good Job!');
//     let losePoints=0;
//     losePoints  += attackshpDamage();
//     console.log(attacks.hpDamage());

// }

function attackArcaneScepter(){
    console.log('Arc');
    let losePoints =  attacks[0].hpDamage;
    let costAp = attacks[0].apCost;

    // reduce your attack points(AP)
    //make the fungus lose hit points(HP)
    fungusHP = fungusHP - losePoints;
    attackAP = attackAP - costAp

    //HP and AP can't be negative 
    if(fungusHP < 0 ){
        fungusHP = 0;
    }

    if(attackAP < 0 ){
        attackAP = 0;
    }

    // update the text above the attack buttons
    $('.ap-text').text(attackAP + ' AP');

    // update the text above the fungus
    $('.hp-text').text(fungusHP + ' HP');

    if(fungusHP == 0){
        $('.freaky-fungus.walk').replaceWith($('.dead'));
    }

    if(attackAP== 0){
        $('.freaky-fungus.walk').replaceWith($('.jump'));
    }

    console.log('fungusHP:', fungusHP);
    console.log('attackAP:', attackAP);
}

function attackEntangle(){
    console.log('Ent');
    let losePoints =  attacks[1].hpDamage;
    let costAp = attacks[1].apCost;

    // reduce your attack points(AP)
    //make the fungus lose hit points(HP)
    fungusHP = fungusHP - losePoints;
    attackAP = attackAP - costAp;

    //HP and AP can't be negative 
    if(fungusHP < 0 ){
        fungusHP = 0;
    }

    if(attackAP < 0 ){
        attackAP = 0;
    }

    // update the text above the attack buttons
    $('.ap-text').text(attackAP + ' AP');

    // update the text above the fungus
    $('.hp-text').text(fungusHP + ' HP');

    if(fungusHP == 0){
        $('.freaky-fungus.walk').replaceWith($('.dead'));
    }

    if(attackAP== 0){
        $('.freaky-fungus.walk').replaceWith($('.jump'));
    }

    console.log('fungusHP:', fungusHP);
    console.log('attackAP:', attackAP);
}

function attackDragonBlade(){
    console.log('Drange');
    let losePoints =  attacks[2].hpDamage;
    let costAp = attacks[2].apCost;

    // reduce your attack points(AP)
    //make the fungus lose hit points(HP)
    fungusHP = fungusHP - losePoints;
    attackAP = attackAP - costAp;

    //HP and AP can't be negative 
    if(fungusHP < 0 ){
        fungusHP = 0;
    }

    if(attackAP < 0 ){
        attackAP = 0;
    }

    // update the text above the attack buttons
    $('.ap-text').text(attackAP + ' AP');

    // update the text above the fungus
    $('.hp-text').text(fungusHP + ' HP');

    if(fungusHP == 0){
        $('.freaky-fungus.walk').replaceWith($('.dead'));
    }

    if(attackAP== 0){
        $('.freaky-fungus.walk').replaceWith($('.jump'));
    }
    
    console.log('fungusHP:', fungusHP);
    console.log('attackAP:', attackAP);
}

function attackStarFire(){
    console.log('Star');
    let losePoints =  attacks[3].hpDamage;
    let costAp = attacks[3].apCost;

    // reduce your attack points(AP)
    //make the fungus lose hit points(HP)
    fungusHP = fungusHP - losePoints;
    attackAP = attackAP - costAp;

    //HP and AP can't be negative 
    if(fungusHP < 0 ){
        fungusHP = 0;
    }

    if(attackAP < 0 ){
        attackAP = 0;
    }

    // update the text above the attack buttons
    $('.ap-text').text(attackAP + ' AP');

    // update the text above the fungus
    $('.hp-text').text(fungusHP + ' HP');

    if(fungusHP == 0){
        $('.freaky-fungus.walk').replaceWith($('.dead'));
    }

    if(attackAP== 0){
        $('.freaky-fungus.walk').replaceWith($('.jump'));
    }

    console.log('fungusHP:', fungusHP);
    console.log('attackAP:', attackAP);
}


