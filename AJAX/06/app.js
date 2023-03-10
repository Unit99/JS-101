document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApi);

//Get data from local text file
function getText(){
    fetch('test.txt')
    .then(res => res.text()).then(data =>{
        console.log(data);
        document.getElementById('output').innerHTML = data;
    }).catch(function(error){
        console.log(error);
    })
}

//Get data from local JSON file
function getJson(){
    fetch('test.json')
    .then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);

        let output = '';

        data.forEach(function(post){
            output += `<li>${post.body}</li>`
        });

        document.getElementById('output').innerHTML = output;
    }).catch(function(error){
        console.log(error);
    })
}

//Get data from an external API
function getApi(){
    fetch('https://api.github.com/users').then(function(res){
        return res.json();
    }).then(function(data){
        let output = '';

        data.forEach(function(user){
            output += `<li>${user.login}</li>`

            document.getElementById('output').innerHTML = output;
        }).catch(function(error){
            console.log(error);
        })
    })
}