$( document ).ready(onReady);

let employees = [];

function addEmployee() {
    console.log('in addEmployee');

    let newEmployee = {
        first: $('#firstIn').val(),
        last: $('#lastIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        salary: $('#salaryIn').val()
    }
    console.log('adding:', newEmployee);
    employees.push(newEmployee);
    showEmployees();
}

function onReady() {
    console.log('addEmployees');
    $('#addEmployeeButton').on('click', addEmployee);
}

function showEmployees() {
    console.log('in showEmployees');
    let el = $('#employeesOut');
    // empty our output element
    el.empty();
    // loop through the inventory
    for (let i = 0; i < employees.length; i++) {
        // append each item to the DOM
        el.append(`<li>${employees[i].first} ${employees[i].last} ${employees[i].id} ${employees[i].title} ${employees[i].salary}</li>`);
    } //end for
}

