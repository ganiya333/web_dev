
const dice = document.getElementById('dice-btn');
let rollCounter = 0; 

function dice_game() {
    var random_dice_1 = Math.floor((Math.random() * 6) + 1);
    var dice_location = "images/dice" + random_dice_1 + ".png"; 
    var img1 = document.querySelectorAll("img")[0]; 
    img1.setAttribute("src", dice_location);

    var random_dice_2 = Math.floor((Math.random() * 6) + 1);
    var dice_location2 = "images/dice" + random_dice_2 + ".png"; 
    var img2 = document.querySelectorAll("img")[1]; 
    img2.setAttribute("src", dice_location2);

    var sum = random_dice_1 + random_dice_2;
    rollCounter++; 

    document.getElementById('sum').innerText = 'Sum: ' + sum;
    document.getElementById('roll-counter').innerText = 'Roll Count: ' + rollCounter;
    if (random_dice_1 === random_dice_2) {
        document.getElementById('win-message').innerText = 'You win!';
    } else {
        document.getElementById('win-message').innerText = ''; 
    }
}

dice.addEventListener('click', dice_game); 

