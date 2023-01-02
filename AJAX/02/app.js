document.getElementById('customer').addEventListener('click', showCustomer);
document.getElementById('customers').addEventListener('click', showCustomers);

function showCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    const customerOutput = document.getElementById('output');

    xhr.onload = function () {
        if (this.status === 200 && this.readyState === 4) {

            const customer = JSON.parse(this.responseText);

            console.log(customer);

            customerOutput.innerHTML = `<ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Phone: ${customer.phone}</li>
                <li>Department: ${customer.dept}</li>
            </ul>`
        }
    }

    xhr.send();

    e.preventDefault();
}

function showCustomers() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    const customersOutput = document.getElementById('output2');

    xhr.onload = function () {
        if (this.status === 200 && this.readyState === 4) {

            const customers = JSON.parse(this.responseText);

            let customerList = '';

            customers.forEach(function (customer) {
                customerList += `<ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Phone: ${customer.phone}</li>
                <li>Department: ${customer.dept}</li>
            </ul>`;
            });

            //console.log(customerList);

            customersOutput.innerHTML = customerList;
        }        
    }

    xhr.send();

    //e.preventDefault();
}