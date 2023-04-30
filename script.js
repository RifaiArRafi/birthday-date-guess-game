let nyoba = document.getElementById('nyoba')
let br = document.createElement('br')
let no_but = document.getElementById('no-button');
let yes_but = document.getElementById('yes-button');
let yes_val = document.getElementById('yes-button').value;
let boxes = document.getElementsByClassName('small-box');
let span = document.getElementById('span');
let data_set_label = document.getElementById('data-set'); 
let set = 2;
let date = 0;
let display = 1;
let i = 0;
let click_count = 1;
let angka = document.createElement('span');
let container = document.getElementById('container');
let ready = document.getElementById('ready');

let dates = [
    [[ 1,  3,  5,  7],
     [ 9, 11, 13, 15],
     [17, 19, 21, 23],
     [25, 27, 29, 31]],
    [[ 2,  3,  6,  7],
     [10, 11, 14, 15],
     [18, 19, 22, 23],
     [26, 27, 30, 31]],
    [[ 4,  5,  6,  7],
     [12, 13, 14, 15],
     [20, 21, 22, 23],
     [28, 29, 30, 31]],
    [[ 8,  9, 10, 11],
     [12, 13, 14, 15],
     [24, 25, 26, 27],
     [28, 29, 30, 31]],
    [[16, 17, 18, 19],
     [20, 21, 22, 23],
     [24, 25, 26, 27],
     [28, 29, 30, 31]]
    ]   ;

    for(let i = 0; i <1; i++){
        for(let j = 0; j < 4; j++){
            for (let k = 0; k < 4; k++){
                angka.innerText += dates[i][j][k] + ", ";
                container.append(angka); 
            }
            angka.innerHTML += "<br>"
        }
    }
    
    function show(val) {
        if (val === 'yes'){
            date += dates[i][0][0];
        }
        i++;

        if(click_count < 5){
            container.innerText = " ";
            angka.innerText = "";
        }
        if(click_count === 5){
            data_set_label.innerHTML = "Your birthday is ";
            container.innerText = date;
            angka.innerText = "";
        }

        if (click_count === 5) {
            console.log(date);
        }

       if (set < 6) {
           span.innerHTML = set++;
       }
        
        for(let j = 0; j < 4; j++){
            for (let k = 0; k < 4; k++){
                if(display < 5){
                angka.innerText += dates[display][j][k] + ", ";
                container.append(angka); 
                }
            }
            angka.innerHTML += "<br>"
        }
        display++;
        click_count++;
    }
    
    
    
