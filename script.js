function randomizeButton(btn) {
    btn.className = "random";
    btn.style.top = Math.floor(Math.random() * 600) + 'px';
    btn.style.left = Math.floor(Math.random() * 800) + 'px';
    btn.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    btn.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    var randomBorderStyle;
    switch (Math.floor(Math.random() * 10)) {
        case 0:
            randomBorderStyle = 'dotted';
            break;
        case 1:
            randomBorderStyle = 'dashed';
            break;
        case 2:
            randomBorderStyle = 'solid';
            break;
        case 3:
            randomBorderStyle = 'double';
            break;
        case 4:
            randomBorderStyle = 'groove';
            break;
        case 5:
            randomBorderStyle = 'ridge';
            break;
        case 6:
            randomBorderStyle = 'inset';
            break;
        case 7:
            randomBorderStyle = 'outset';
            break;
        case 8:
            randomBorderStyle = 'none';
            break;
        case 9:
            randomBorderStyle = 'hidden';
            break;
    }
    btn.style.border = `${Math.floor(Math.random() * 10)}px ${randomBorderStyle} rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    var uncapitalized = 'click me';
    var randomCapitalization = '';
    for (var x = 0; x < uncapitalized.length; x++) {
        randomCapitalization += Math.floor(Math.random() * 2) == 0 ? uncapitalized.substring(x, x+1).toUpperCase() : uncapitalized.substring(x, x+1);
    }
    btn.innerHTML = randomCapitalization;
    btn.style.fontSize = `${Math.floor(Math.random() * 200) + 50}%`;
    btn.style.padding = `${Math.floor(Math.random() * 70)}px`;
    var randomBorderRadius;
    switch (Math.floor(Math.random() * 10)) {
        case 0:
            randomBorderRadius = '0';
            break;
        case 1:
            randomBorderRadius = '2px';
            break;
        case 2:
            randomBorderRadius = '5px';
            break;
        case 3:
            randomBorderRadius = '8px';
            break;
        case 4:
            randomBorderRadius = '10px';
            break;
        case 5:
            randomBorderRadius = '12px';
            break;
        case 6:
            randomBorderRadius = '15px';
            break;
        case 7:
            randomBorderRadius = '20px';
            break;
        case 8:
            randomBorderRadius = '25px';
            break;
        case 9:
            randomBorderRadius = '50%';
            break;
    }
    btn.style.borderRadius = randomBorderRadius;
}

function win(btn) {
    btn.innerHTML = 'YOU WIN';
    btn.style.backgroundColor = 'green';
    btn.style.color = 'black';
    btn.style.border = '3px solid black';
    btn.style.fontSize = '200%';
    btn.style.padding = '20px';
    btn.style.borderRadius = '10px';
    btn.style.cursor = 'auto';
    btn.onmouseover = '';
    btn.onclick = '';
}