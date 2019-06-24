$(document).ready(onReady);
// declare empty array
let employees = [];

function addEmployee() {
    console.log('in addEmployee');
    // setting values
    let newEmployee = {
        first: $('#firstIn').val(),
        last: $('#lastIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        salary: $('#salaryIn').val()
    }
    $('#firstIn').val('');
    $('#lastIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');

    console.log('adding:', newEmployee);
    // push employees into array
    employees.push(newEmployee);
    // call function
    showEmployees();
}

function onReady() {
    console.log('addEmployees');
    // add employee on button click
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