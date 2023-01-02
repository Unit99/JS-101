//Chuck Norris jokes generator

document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    //const num = document.getElementById('number').value;

    //console.log(num);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.chucknorris.io/jokes/random`, true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);

            console.log(response);

            document.getElementById('output').innerHTML += `
            <li>${response.value}</li>
            `;
        }else{
            document.getElementById('output').innerHTML += `            
            <li>something went wrong</li>
            `;
        }
    }

    xhr.send();

    e.preventDefault();

}
