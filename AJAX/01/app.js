document.querySelector('button').addEventListener('click', loadData);

function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onprogress = function(){
        //for spinners/loaders
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);

        if(this.status === 200 && this.readyState === 4){
            //console.log(this.responseText);

            document.querySelector('#output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    xhr.send();
}

//readyState values
//0 : request not initiated
//1: server connection established
//2: request received
//3: processing request
//4: request finished and response is ready


//HTTP Response Status Codes
//200: "OK"
//403: "Forbidden"
//404: "Not found"