function rndmNum(max) {
    return Math.floor(Math.random() * max);
}
function rndmText() {
    var uncapitalized = 'click me';
    var randomCapitalization = '';
    for (var x = 0; x < uncapitalized.length; x++) {
        randomCapitalization += rndmNum(2) == 0 ? uncapitalized.substring(x, x+1).toUpperCase() : uncapitalized.substring(x, x+1);
    }
    return randomCapitalization;
}
function rndmColor() {
    return `rgb(${rndmNum(256)}, ${rndmNum(256)}, ${rndmNum(256)})`;
}
function rndmBorderStyle() {
    switch (rndmNum(10)) {
        case 0:
            return 'dotted';
            break;
        case 1:
            return 'dashed';
            break;
        case 2:
            return 'solid';
            break;
        case 3:
            return 'double';
            break;
        case 4:
            return 'groove';
            break;
        case 5:
            return 'ridge';
            break;
        case 6:
            return 'inset';
            break;
        case 7:
            return 'outset';
            break;
        case 8:
            return 'none';
            break;
        case 9:
            return 'hidden';
            break;
    }
}
function rndmBorderRadius() {
    switch (rndmNum(10)) {
        case 0:
            return '0';
            break;
        case 1:
            return '2px';
            break;
        case 2:
            return '5px';
            break;
        case 3:
            return '8px';
            break;
        case 4:
            return '10px';
            break;
        case 5:
            return '12px';
            break;
        case 6:
            return '15px';
            break;
        case 7:
            return '20px';
            break;
        case 8:
            return '25px';
            break;
        case 9:
            return '50%';
            break;
    }
}
function randomizeButton(btn) {
    btn.className = "random";
    btn.style.top = rndmNum(600) + 'px';
    btn.style.left = rndmNum(800) + 'px';
    btn.innerHTML = rndmText();
    btn.style.fontSize = `${rndmNum(200) + 50}%`;
    btn.style.padding = `${rndmNum(70)}px`;
    btn.style.backgroundColor = rndmColor();
    btn.style.color = rndmColor();
    btn.style.border = `${rndmNum(10)}px ${rndmBorderStyle()} ${rndmColor()}`;
    btn.style.borderRadius = rndmBorderRadius();
}

function win(btn) {
    btn.innerHTML = 'YOU WIN';
    btn.style.fontSize = '200%';
    btn.style.padding = '20px';
    btn.style.backgroundColor = 'green';
    btn.style.color = 'black';
    btn.style.border = '3px solid black';
    btn.style.borderRadius = '10px';
    btn.style.cursor = 'auto';
    btn.onmouseover = '';
    btn.onclick = '';
}