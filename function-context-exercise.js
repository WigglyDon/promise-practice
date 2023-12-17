// exercise ::
// Create bound copies of printFullName and printDetails to person called...
// boundPrintFullName and boundPrintDetails

var testPerson = {
    firstName : "John",
    lastName : "Smith",
    age : 23
};

function printFullName()
{
    console.log(this.firstName + " " + this.lastName);
}

function printDetails()
{
    console.log(this.firstName + " is " + this.age + " years old");
}

// TODO: create bound copies of printFullName and printDetails.
var boundPrintFullName = printFullName.bind(testPerson);
var boundPrintDetails = printDetails.bind(testPerson);

boundPrintFullName();
boundPrintDetails();