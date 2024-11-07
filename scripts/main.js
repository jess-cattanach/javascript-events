let growth = document.querySelector('#growth');
growth.onclick = () => {
    if (growth.getAttribute('src') === 'images/littlebabies.jpg')
    {
        growth.setAttribute('src', 'images/grownbabies.jpg');
    }
    else{
        growth.setAttribute('src', 'images/littlebabies.jpg');
    }
};

let deviousCricket = document.querySelector('#cricketTrouble');
deviousCricket.onmouseover = () => {
    if (deviousCricket.getAttribute('src') === 'images/cricketgoldfish.jpg')
        {
            deviousCricket.setAttribute('src', 'images/cricketinsink.jpg');
        }
        else{
            deviousCricket.setAttribute('src', 'images/cricketgoldfish.jpg');
        }
};

let evilTex = document.querySelector('#texasTrouble');
evilTex.onmouseover = () => {
    if (evilTex.getAttribute('src') === 'images/texasundercouch.jpg')
        {
            evilTex.setAttribute('src', 'images/inbox.jpg');
        }
        else{
            evilTex.setAttribute('src', 'images/texasundercouch.jpg');
        }
};

//format for image changes taken from Prof McAdams' example.