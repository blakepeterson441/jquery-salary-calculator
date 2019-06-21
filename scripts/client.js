$(document).ready(onReady);

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
    let el = $('#tableBody');
    // empty our output element
    el.empty();
    // loop through the inventory
    for (let i = 0; i < employees.length; i++) {
        // append each item to the DOM
        el.append(
            `<tr>
                <th>${employees[i].first}</th>
                <th>${employees[i].last}</th>
                <th>${employees[i].id}</th>
                <th>${employees[i].title}</th>
                <th>${employees[i].salary}</th>
            </tr>`

        );
    } //end for
}