console.log("....WEATHER FORECASTING.............")
//const fetch ='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=3SLNJ38JSV9XWEMX43NWF4M8S'
const apiURL ="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
 function FetchAPI(url,city){
    
fetch(apiURL +city+ `?key=${apiKey}`)
    .then((res)=>{
    //     if(res.status==400){
    //       
    //     }
    //     else{
    //          
    //     }

    return res.json();
    }).then((data)=>{
        
        checkWeather(data);
    }).catch((error)=>{
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    });
  
    

  
 }





 function checkWeather(data){ 
   console.log(data);
   
    document.querySelector(".city").innerHTML=data.address.toUpperCase();
    document.querySelector(".temp").innerHTML=data.days[0].temp;
    document.querySelector(".temp").innerHTML=data.days[0].temp+"°C";
    document.querySelector(".Humidity").innerHTML=data.days[0].humidity+"%";
    document.querySelector(".WindSpeed").innerHTML=data.days[0].windspeed+"Km/h";
   

    
    
    if(data.currentConditions.icon==="clear"||"clear-day"){
        img.src="./images/clear.png";
    }
   
    if(data.currentConditions.icon==="clear-night"){
        img.src="./images/clear-night.png";
    }
   
    else if(data.days[0].conditions=="Clouds"){
        img.src="./images/rain.png";

    }  
    else if(data.currentConditions.icon=="cloudy"||"partly-cloudy-day"){
        
        img.src="./images/clouds.png";

    }
    else if(data.currentConditions
        .icon=="snow"||"snow-showers-day"){
        img.src="./images/snow.png";

    }
    else if(data.days[0].conditions=="Mist"){
        img.src="./images/mist.png";

    } 
    else if(data.days[0].conditions=="snow"){
        img.src="./images/snow.png";

    }     
        
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    
}
const apiKey="3SLNJ38JSV9XWEMX43NWF4M8S";

const searchBox =document.querySelector(".search input");
const searchButton =document.querySelector(".search button");
const img =document.querySelector(".weather-icon");
searchButton.addEventListener("click",()=>{     
   
    FetchAPI(apiKey,searchBox.value);
})


