document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the button click
    document.querySelector('.search').addEventListener('click', function() {
        // Retrieve the city value when the button is clicked
        var city = document.querySelector('.input').value;
        console.log("City:", city);
        this.style.borderColor = "white";

        // Make the AJAX request with the retrieved city value
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/airquality',
            data: {
                city: city
            },
            headers: {
                'X-Api-Key': 'fQcuEObYOSpyAZkuMiOlWJ9bwg1frO4jGJ1egq0B'
            },
            success: function(data) {
                // Handle the response data
                console.log(data);
                // Update HTML elements with the received data
                document.querySelector('.city').innerHTML = city;
                document.querySelector(".aqindex").innerHTML = data.overall_aqi;
                document.querySelector(".no").innerHTML = data['NO2'].concentration;
                document.querySelector(".pm_two").innerHTML = data['PM2.5'].concentration;
                document.querySelector(".pm_ten").innerHTML = data['PM10'].concentration;
                document.querySelector(".so2").innerHTML = data['SO2'].concentration;
                document.querySelector(".co2").innerHTML = data['CO'].concentration;
                document.querySelector(".ozone").innerHTML = data['O3'].concentration;

                // Update the air quality status image and text based on the AQI value
                if (data.overall_aqi <= 50) {
                    document.querySelector('.status-img').src = "Good.png";
                    document.querySelector('.status').innerHTML = "Good";
                } else if (data.overall_aqi >= 51 && data.overall_aqi <= 100) {
                    document.querySelector('.status-img').src = "moderate.png";
                    document.querySelector('.status').innerHTML = "Moderate";
                } else if (data.overall_aqi >= 101 && data.overall_aqi <= 150) {
                    document.querySelector('.status-img').src = "ok ok.png";
                    document.querySelector('.status').innerHTML = "Unhealthy for sensitive group";
                } else if (data.overall_aqi >= 151 && data.overall_aqi <= 200) {
                    document.querySelector('.status-img').src = "bad.png";
                    document.querySelector('.status').innerHTML = "Unhealthy";
                } else if (data.overall_aqi >= 201 && data.overall_aqi <= 300) {
                    document.querySelector('.status-img').src = "very bad2.png";
                    document.querySelector('.status').innerHTML = "Very Unhealthy";
                } else {
                    document.querySelector('.status-img').src = "Good.png";
                    document.querySelector('.status').innerHTML = "Good";
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // If there's an error in the request, log the error message
                console.error('Error: ', textStatus, errorThrown);
            }
        });
    });
});
