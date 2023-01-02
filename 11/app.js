//Template literals
const name = 'Sanjib';
const age = 31;
const job = 'web developer';
const city = 'Kolkata';
let html;

function hello(){
    return 'hello';
}

//Without template strings (ES5)
html = '<ul>' +
'<li>Name: ' + name + '</li>' +
'<li>Age: ' + age + '</li>' +
'<li>Job: ' + job + '</li>' +
'<li>City: ' + city + '</li>' +
'</ul>';

//With template strings/ template literals(ES6)
html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>

    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30': 'Under 30'}</li>
</ul>
`;


document.body.innerHTML = html;