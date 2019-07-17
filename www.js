
function updateDailyWeather() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            console.log("Successful...");
            let todaysDate = new Date();
            let today = document.getElementById("day");
            today.innerText = todaysDate;

            let weatherDataDays = JSON.parse(this.response);
            let currentTemp = document.getElementById("currentTemp");
            currentTemp.innerText = weatherDataDays.main.temp;

            let weatherCondition = JSON.parse(this.reponse);
            let weatherIcon = document.getElementById("icon");
                if (weatherCondition['weather'].main === 'clouds') {
                    weatherIcon.src = "/cloud.gif";
                }
                if (weatherCondition[weather].main === 'clear') {
                    weatherIcon.src = "/sunny.gif";
                }
        } else {
            
            console.log("failure...")
            
        }
    };
    xhttp.open("GET", 'https://api.openweathermap.org/data/2.5/weather?q=provo,US&units=imperial&mode=JSON&appid=a23d5fb1cf08e5768b8553d9f194ec3e', true);
    xhttp.send();
}
        

function updateForecast() {
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            //---------------------
            console.log("Successful...");
            //console.log(this.responseText);
            // This is where you would update the HTML elements above
            // with the data you pull from the API call response
            // document.getElementById("demo").innerHTML = this.responseText;
            //---------------------

            let weatherDataDays = JSON.parse(this.response);
           // console.log(weatherDataDays.list);
           // console.log(weatherDataDays.list.length);

            for(let counter = 0; counter < weatherDataDays.list.length; counter++) {
                
                let currentDay = weatherDataDays.list[counter];
                console.log(currentDay);

                // Pulling out the dt_text value (date/time) 
                // and parsing it to a JavaScript date
    let weatherDate = new Date(currentDay.dt_txt + ' UTC');
    console.log(weatherDate);
                // Pulling the month from the data for comparison
                // Remember, JavaScript months are zero indexed
                // to get the right moneth for comparison, you
                // will need to add 1 to it
                console.log(weatherDate.getMonth() + 1);
                // Pulling the day of the month from the date object
                console.log(weatherDate.getDate());
            }


        } else {
            
            //---------------------
            console.log("failure...")
            // error message for user that API is down
            //---------------------
            
        }
    };
    xhttp.open("GET", 'https://api.openweathermap.org/data/2.5/forecast?q=provo,US&units=imperial&mode=JSON&appid=a23d5fb1cf08e5768b8553d9f194ec3e', true);
    xhttp.send();
}
        
//---------------------
// Make sure you call the function to begin the request for information
// In the weather widget, you will want to call this function using the
// onClick event of the form submit button
updateDailyWeather();
updateForecast();