let val;

val = document;
val = document.all[2];
val = document.all.length;
val = document.head.baseURI;
val = document.body;
val = document.doctype;
val = document.contentType;
val = document.characterSet;
val = document.URL;
val = document.domain;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

const scriptArr = Array.from(scripts);

console.log(scriptArr);

scriptArr.forEach(function(script){
    console.log(script.getAttribute('src'));
});

console.log(val);