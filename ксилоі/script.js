const buttons = document.getElementsByClassName('xylo-button')
for (var i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    button.addEventListener('click', soundButtonDidTap)
}

function soundButtonDidTap(event) {
    let button = event.currentTarget 
    let soundName = button.getAttribute('data-sound')
    let audio = new Audio(`${soundName}.wav`) 
    audio.play()
}

        
