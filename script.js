'use strict';

var euro = document.getElementById('euros-input');
var dollar = document.getElementById('dollar-input');
var convertBtn = document.getElementById('convert-btn');
var refresh = document.getElementById('refresh');

refresh.onclick = function () {
    euro.value = 0;
    dollar.value = 0;
}

convertBtn.onclick = function (event) {
    if (euro.value > 0) {

        // lire les euros   
        var euros = euro.value;
        // convertir en dollard
        dollar.value = euros * 0.8;
        // mettre à jour le champs dollar
    }
    if (dollar.value > 0) {

        // lire les dollards   
        var dollards = dollar.value;
        // convertir en euros
        euro.value = dollards / 0.8;

    }
}









