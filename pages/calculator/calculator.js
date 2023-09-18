"use strict"

 const output = document.getElementById("output");
 const button = document.getElementsByClassName("but");
 const calc = document.getElementsByClassName("main");
 const box = document.getElementById("notMain");

 function enableDragging(element) {
    let dragging = false;
    let xOffset;
    let yOffset;
    // Начало перетаскивания
    element.addEventListener("mousedown", startDragging);
    function startDragging(event) {
      dragging = true;
      xOffset = event.clientX - element.offsetLeft;
      yOffset = event.clientY - element.offsetTop;
      document.addEventListener("mousemove", drag);
      document.addEventListener("mouseup", stopDragging);
    }
    // Перетаскивание
    function drag(event) {
      if (dragging) {
        calc[0].style.left = event.clientX - xOffset + "px";
        calc[0].style.top = event.clientY - yOffset + "px";
      }
    }
    // Остановка перетаскивания
    function stopDragging() {
      dragging = false;
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", stopDragging);
    }
  }
  enableDragging(calc[0]);


 for(let i = 0; i < button.length; i ++) {
    button[i].addEventListener("click", function() {
        switch(i) {
            case 0:
                output.textContent += "0";
            break;
            case 1:
                output.textContent += "(";
            break;
            case 2:
                output.textContent += ")";
            break;
            case 3:
                output.textContent += "*";
            break;
            case 4:
                output.textContent += "1";
            break;
            case 5:
                output.textContent += "2";
            break;
            case 6:
                output.textContent += "3";
            break;
            case 7:
                output.textContent += "/";
            break;
            case 8:
                output.textContent += "4";
            break;
            case 9:
                output.textContent += "5";
            break;
            case 10:
                output.textContent += "6";
            break;
            case 11:
                output.textContent += "-";
            break;
            case 12:
                output.textContent += "7";
            break;
            case 13:
                output.textContent += "8";
            break;
            case 14:
                output.textContent += "9";
            break;
            case 15:
                output.textContent += "+";
            break;
            case 16:
                output.textContent += ".";
            break;
            case 17:
                const currentContent = output.textContent;
                output.textContent = currentContent.slice(0, -1);
            break;
            case 18:
                output.textContent = "";
            break;
            case 19:
                const expression = output.textContent;
                const result = eval(expression);
                output.textContent = result;
            break;
        }
      });
 }

 