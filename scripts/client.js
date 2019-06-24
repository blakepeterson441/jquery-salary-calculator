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
                <td>${employees[i].first}</td>
                <td>${employees[i].last}</td>
                <td>${employees[i].id}</td>
                <td>${employees[i].title}</td>
                <td>${employees[i].salary}</td>
            </tr>`

        );
    } //end for
}