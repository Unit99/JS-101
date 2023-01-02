//window methods/object/properties

//Prompt
// const input = prompt();
// alert(input);

//Confirm
// if(confirm('Are you sure')){
//     console.log('YES');
// }else{
//     console.log('NO');
// }

//outerHeight and innerHeight
let val;

val = window.outerHeight;
//val = window.outerWidth;

//innerWidth and innerHeight
//val = window.innerWidth;
val = window.innerHeight;

//Scroll points
val = window.scrollY;

//location object
val = window.location;
//val = window.location.hostname;
val = window.location.href;
val = window.location.port;
val = window.location.search;

//redirect
//window.location.href = 'https://google.com';

//reload
//window.location.reload();

//history object
//window.history.go();

val = window.history.length;


//navigator object
val = window.navigator;
val = window.navigator.userAgent;

console.log(val);

