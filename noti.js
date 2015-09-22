function setNotification(message, t, c) {
    'use strict';
    var type, color, ele, newele;
    switch (t) {
    case 0:
        type = "icon_happy";
        break;
    case 1:
        type = "icon_unhappy";
        break;
    case 2:
        type = "icon_exclamation-c";
        break;
    case 3:
        type = "icon_stop";
        break;
    case 4:
        type = "icon_bug";
        break;
    default:
        type = "icon_exclamation-c";
        break;
    }
    switch (c) {
    case 0:
        color = "greenback";
        break;
    case 1:
        color = "redback";
        break;
    case 2:
        color = "silverback";
        break;
    default:
        color = "silverback";
        break;
    }
    if (document.getElementById("notiarea").hasAttribute("class")) {
        document.getElementById("notiarea").removeAttribute("class");
    }
    if (document.getElementById("notiimage").hasAttribute("class")) {
        document.getElementById("notiimage").removeAttribute("class");
    }
    document.getElementById("notiarea").setAttribute("class", color);
    document.getElementById("notiimage").setAttribute("class", type);
    document.getElementById("notimessage").innerHTML = message;
    ele = document.getElementById("notification");
    newele = ele.cloneNode(true);
    ele.parentNode.replaceChild(newele, ele);
}

function createNotification(message, t, c) {
    'use strict';
    var type, color;
    switch (t) {
    case 0:
        type = "icon_happy";
        break;
    case 1:
        type = "icon_unhappy";
        break;
    case 2:
        type = "icon_exclamation-c";
        break;
    case 3:
        type = "icon_stop";
        break;
    case 4:
        type = "icon_bug";
        break;
    default:
        type = "icon_exclamation-c";
        break;
    }
    switch (c) {
    case 0:
        color = "greenback";
        break;
    case 1:
        color = "redback";
        break;
    case 2:
        color = "silverback";
        break;
    default:
        color = "silverback";
        break;
    }
    document.body.innerHTML += '<div id="notification" style="display:block">' +
        '<div id="notiarea" class="' + color + '">' +
        '<div id="notiimage" class="' + type + '"></div>' +
        '<div id="notimessage">' + message + '</div>' +
        '</div>' +
        '</div>';
}