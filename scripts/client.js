$(document).ready(onReady);
// declare empty array
let employees = [];

let totalSalaries = 0;

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

    // update our monthly total
    // totalSalaries = totalSalaries + salary;
    // parse is number with decimals
    totalSalaries += parseFloat(newEmployee.salary);
    console.log(totalSalaries);
    
    let monthlySalaries = totalSalaries / 12;

    //empty other total
    $('#monthly').empty();

    let monthlyString = $('#monthly').append(`<p>Total Monthly Salary: $ ${(totalSalaries / 12)} </p>`)

    // $('#monthly').append(`<p>Total Monthly Salary: $ ${(totalSalaries / 12)} </p>`);
    
    if (monthlySalaries >= 20000){
        monthlyString.addClass('dangerZone');
    }

    $('#monthly').append(monthlyString);

    // clearing inputs
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
    // referencing id that already exits aka #tableBody
    // calls delete button's class
    $('#tableBody').on('click', '.deleteBtn', handleDelete)
}

function handleDelete(){
    console.log('clicked delete');
    //remove item from DOM with delete button
    $(this).closest('tr').remove();
    // could also use this..
    // $(this).parent().parent().remove();
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
                <td><button class="btn btn-danger deleteBtn">DELETE</button></td>
            </tr>`

        );
    } //end for
}