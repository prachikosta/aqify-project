
var city = 'london';

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/airquality?city=' + city,
    headers: { 'X-Api-Key': 'fQcuEObYOSpyAZkuMiOlWJ9bwg1frO4jGJ1egq0B'},
    success: function(data) {
        console.log(data);

        // document.querySelector(".aoindex").innerHTML = data.overall_aqi;
        // document.querySelector(".pm-2.5").innerHTML = data.PM2.5.concentration;
        // document.querySelector(".pm-10").innerHTML = data.PM10.concentration;
        // document.querySelector(".so-2").innerHTML = data.SO2.concentration;
        // document.querySelector(".co-2").innerHTML = data.CO2.concentration;
        // document.querySelector(".ozone").innerHTML = data.O3.concentration;
        // document.querySelector(".no-2").innerHTML = data.NO2.concentration;

    },
    error: function(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
