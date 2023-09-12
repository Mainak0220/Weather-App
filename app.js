// 5d752b87bbd487e9153bbe697f1c4fda


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



const weatherApi={
    key:"5d752b87bbd487e9153bbe697f1c4fda",
    baseurl:"https://api.openweathermap.org/data/2.5/weather"
}

//Event listner functions on keypress 

const searchinputBox = document.getElementById('input-box');
searchinputBox.addEventListener('keypress', (event) => {

    if(event.keyCode == 13){
        
    console.log(searchinputBox.value);
    getWeatherReport(searchinputBox.value);
    document.querySelector('.weather-body').style.display="block";  
    }
    
});

//Get weather report
function getWeatherReport(city){
    fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}


//Show weather report
function showWeatherReport(weather){
    console.log(weather);

    let city=document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML =`${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML =`${Math.floor(weather.main.temp_min)}&deg;C(min)/${Math.ceil(weather.main.temp_max)}&deg;C(max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage (todayDate);

    if(weatherType.textContent == 'Clear')
    {
        document.body.style.backgroundImage="url('clear.jpg')";
    }

    else if(weatherType.textContent == 'Clouds')
    {
        document.body.style.backgroundImage="url('cloudy.jpg')";
    }

    else if(weatherType.textContent == 'Haze')
    {
        document.body.style.backgroundImage="url('haze.jpg')";
    }

    else if(weatherType.textContent == 'Rain')
    {
        document.body.style.backgroundImage="url('rain.jpg')";
    }

    else if(weatherType.textContent == 'Snowfall')
    {
        document.body.style.backgroundImage="url('snow.jpg')";
    }

    else if(weatherType.textContent == 'Thunderstrom')
    {
        document.body.style.backgroundImage="url('thunderstrom.jpg')";
    }
}


//Date manage 
function dateManage(dateArg){
    
    let days = ["Suuday","Monday","Tuesday","Wednesday","Friday","Saturday"];

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} ${day} ${year}`;
}