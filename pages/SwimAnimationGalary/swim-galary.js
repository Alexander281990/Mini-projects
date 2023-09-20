"use strict";

const img = document.getElementsByClassName("img");
const containerWidth = img[0].parentElement.clientWidth;
const containerLeft = img[0].parentElement.offsetLeft;
for(let i = 0; i < img.length; i++) {
    const randomX = Math.floor(Math.random() * containerWidth);
    img[i].style.left = `${randomX}px`;
    if (randomX > containerWidth - img[i].clientWidth) {
        img[i].style.left = '0px';
    }
}
function trackPositionY() {
    for(let i = 0; i < img.length; i ++) {
        let rect = img[i].getBoundingClientRect();
        let posY = rect.top;
        if(posY < -160) {
            const randomX = Math.floor(Math.random() * containerWidth);
            img[i].style.left = `${randomX}px`;
            if (randomX > containerWidth - img[i].clientWidth) {
                img[i].style.left = '35px';
            }
        }
    }
}
setInterval(trackPositionY, 500);




