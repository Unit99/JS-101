 //callback function

 //sychronously
 const posts = [
    {
         title: 'Post one',
         body: ' this is post one'
     },
     {
         title: 'Post two',
         body: ' this is post two'
     }
 ];

 /* function createPost(post) {
     setTimeout(function () {
         posts.push(post);
     }, 2000);
 }

 function getPosts() {
    setTimeout(function(){
        let output = '';

        posts.forEach(function(post){
            output += `<li>${post.body}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
 }

 createPost({title: 'Post three', body: ' this is post three'});

 getPosts(); */

 //asynchronously
 function createPost(post, callBack) {
    setTimeout(function () {
        posts.push(post);
        callBack();
    }, 2000);
}

function getPosts() {
   setTimeout(function(){
       let output = '';

       posts.forEach(function(post){
           output += `<li>${post.body}</li>`;
       });

       document.body.innerHTML = output;
   }, 1000);
}

createPost({title: 'Post three', body: ' this is post three'}, getPosts);