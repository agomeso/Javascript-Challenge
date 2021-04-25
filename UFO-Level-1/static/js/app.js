// Assign the data from data.js to a descriptive variable
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

//On load
var table = d3.select("tbody");
table.html("");
var tableBody = d3.select("tbody");
tableData.forEach(UFOData => {
    var trow = tableBody.append("tr")
    Object.values(UFOData).forEach(value => {
        trow.append("td").text(value)
    })
})

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    // console.log(tableData);

    if (inputValue === "") {
        var table = d3.select("tbody");
        table.html("");
        var tableBody = d3.select("tbody");
        tableData.forEach(UFOData => {
            var trow = tableBody.append("tr")
            Object.values(UFOData).forEach(value => {
                trow.append("td").text(value)
            })
        })
    }
    else {

        var filteredData = tableData.filter(fecha => fecha.datetime === inputValue);

        console.log(filteredData);

        var table = d3.select("tbody");
        table.html("");
        var tableBody = d3.select("tbody");
        filteredData.forEach(UFOData => {
            var trow = tableBody.append("tr")
            Object.values(UFOData).forEach(value => {
                trow.append("td").text(value)
            })
        })
    }

}
