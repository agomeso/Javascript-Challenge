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
    //date / time
    //city
    //state
    //country
    //shape
    var inputDatetime = d3.select("#datetime");
    var inputCity = d3.select("#cities");
    var inputState = d3.select("#states");
    var inputCountry = d3.select("#countries");
    var inputShape = d3.select("#shapes");

    // Get the value property of the input element
    var inputDateValue = inputDatetime.property("value");
    var inputCityValue = inputCity.property("value");
    var inputStateValue = inputState.property("value");
    var inputCountryValue = inputCountry.property("value");
    var inputShapeValue = inputShape.property("value");


    if (inputDateValue === "" && inputCityValue === "" && inputStateValue === "" && inputCountryValue === "" && inputShapeValue === "") {
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
    // There are 26 possible combinations for a single field, two, three, four or all five search fields
    else {
        //single field search - five combinations
        if (inputDateValue !== "") { var filteredData = tableData.filter(hoba => hoba.datetime === inputDateValue); }
        if (inputCityValue !== "") { var filteredData = filteredData.filter(hoba => hoba.city === inputCityValue); }
        if (inputStateValue !== "") { var filteredData = filteredData.filter(hoba => hoba.state === inputStateValue); }
        if (inputCountryValue !== "") { var filteredData = filteredData.filter(hoba => hoba.country === inputCountryValue); }
        if (inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.shape === inputShapeValue); }

        //two fields - ten combinations
        if (inputDateValue !== "" && inputCityValue !== "") { var filteredData = tableData.filter(hoba => hoba.datetime === inputDateValue && hoba.city === inputCityValue); }
        if (inputDateValue !== "" && inputStateValue !== "") { var filteredData = filteredData.filter(hoba => hoba.datetime === inputDateValue && hoba.state === inputStateValue); }
        if (inputDateValue !== "" && inputCountryValue !== "") { var filteredData = filteredData.filter(hoba => hoba.datetime === inputDateValue && hoba.country === inputCountryValue); }
        if (inputDateValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.datetime === inputDateValue && hoba.shape === inputShapeValue); }
        if (inputCityValue !== "" && inputStateValue !== "") { var filteredData = filteredData.filter(hoba => hoba.city === inputCityValue && hoba.state === inputStateValue); }
        if (inputCityValue !== "" && inputCountryValue !== "") { var filteredData = filteredData.filter(hoba => hoba.city === inputCityValue && hoba.country === inputCountryValue); }
        if (inputCityValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.city === inputCityValue && hoba.shape === inputShapeValue); }
        if (inputStateValue !== "" && inputCountryValue !== "") { var filteredData = filteredData.filter(hoba => hoba.state === inputStateValue && hoba.country === inputCountryValue); }
        if (inputStateValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.state === inputStateValue && hoba.shape === inputShapeValue); }
        if (inputCountryValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.country === inputCountryValue && hoba.shape === inputShapeValue); }

        //three fields - ten combinations
        if (inputDateValue !== "" && inputCityValue !== "" && inputStateValue !== "") { var filteredData = tableData.filter(hoba => hoba.datetime === inputDateValue && hoba.city === inputCityValue && hoba.state === inputStateValue); }
        if (inputDateValue !== "" && inputCityValue !== "" && inputCountryValue !== "") { var filteredData = filteredData.filter(hoba => hoba.datetime === inputDateValue && hoba.city === inputCityValue && hoba.country === inputCountryValue); }

        if (inputCityValue !== "" && inputStateValue !== "" && inputCountryValue !== "") { var filteredData = filteredData.filter(hoba => hoba.city === inputCityValue && hoba.state === inputStateValue && hoba.country === inputCountryValue); }
        if (inputCityValue !== "" && inputCountryValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.city === inputCityValue && hoba.country === inputCountryValue && hoba.shape === inputShapeValue); }


        if (inputDateValue !== "" && inputCityValue !== "" && inputStateValue !== "" && inputCountryValue !== "") { var filteredData = tableData.filter(hoba => hoba.datetime === inputDateValue && hoba.city === inputCityValue && hoba.state === inputStateValue && hoba.country === inputCountryValue); }
        if (inputDateValue !== "" && inputCityValue !== "" && inputStateValue !== "" && inputCountryValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.datetime === inputDateValue && hoba.city === inputCityValue && hoba.state === inputStateValue && hoba.country === inputCountryValue && hoba.shape === inputShapeValue); }




        if (inputCityValue !== "" && inputStateValue !== "" && inputCountryValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.city === inputCityValue && hoba.state === inputStateValue && hoba.country === inputCountryValue && hoba.shape === inputShapeValue); }




        if (inputStateValue !== "" && inputCountryValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.state === inputStateValue && hoba.country === inputCountryValue && hoba.shape === inputShapeValue); }

        if (inputDateValue !== "" && inputCityValue !== "" && inputStateValue !== "" && inputCountryValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.datetime === inputDateValue && hoba.city === inputCityValue && hoba.state === inputStateValue && hoba.country === inputCountryValue && hoba.shape === inputShapeValue); }
        if (inputDateValue !== "" && inputCityValue !== "" && inputStateValue !== "" && inputCountryValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.datetime === inputDateValue && hoba.city === inputCityValue && hoba.state === inputStateValue && hoba.country === inputCountryValue && hoba.shape === inputShapeValue); }
        if (inputDateValue !== "" && inputCityValue !== "" && inputStateValue !== "" && inputCountryValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.datetime === inputDateValue && hoba.city === inputCityValue && hoba.state === inputStateValue && hoba.country === inputCountryValue && hoba.shape === inputShapeValue); }
        if (inputDateValue !== "" && inputCityValue !== "" && inputStateValue !== "" && inputCountryValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.datetime === inputDateValue && hoba.city === inputCityValue && hoba.state === inputStateValue && hoba.country === inputCountryValue && hoba.shape === inputShapeValue); }
        if (inputDateValue !== "" && inputCityValue !== "" && inputStateValue !== "" && inputCountryValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.datetime === inputDateValue && hoba.city === inputCityValue && hoba.state === inputStateValue && hoba.country === inputCountryValue && hoba.shape === inputShapeValue); }



        var table = d3.select("tbody"); if (inputDateValue !== "" && inputCityValue !== "" && inputStateValue !== "" && inputCountryValue !== "" && inputShapeValue !== "") { var filteredData = filteredData.filter(hoba => hoba.datetime === inputDateValue && hoba.city === inputCityValue && hoba.state === inputStateValue && hoba.country === inputCountryValue && hoba.shape === inputShapeValue); }
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

