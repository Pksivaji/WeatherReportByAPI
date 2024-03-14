
const Temp=document.querySelector(".temp");
const Humidity=document.querySelector(".humidity");
const windSpeed=document.querySelector(".wind");
const myCity=document.querySelector(".city");
const searchBox=document.querySelector(".search-box");
const searchBtn=document.querySelector(".search-btn");
const weatherIcon=document.querySelector(".weather");

const apiKey="bb1e06a43686cb5aa73682d037050582";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error-msg").style.display="block";
        document.querySelector(".container2").style.display="none";  
        document.querySelector(".loading").style.display="none";  

    }
    else{
        var data=await response.json();
        console.log(data);
        Temp.innerHTML=Math.round(data.main.temp)+"°C";
        Humidity.innerHTML=Math.round(data.main.humidity)+"%";
        windSpeed.innerHTML=Math.round(data.wind.speed)+"km/h";
        myCity.innerHTML=data.name;

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="./assets/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="./assets/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="./assets/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="./assets/drizzle.png";
        }
        else  {
            weatherIcon.src="./assets/mist.png";
        }

    document.querySelector(".container2").style.display="block"; 
    document.querySelector(".error-msg").style.display="none";
    document.querySelector(".loading").style.display="none"; 
    }
    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
 