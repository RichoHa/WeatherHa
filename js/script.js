var myAPIkey = "ab1af9bd1a8500447caf0bf0f0a1518d";
var searchButtonjs = document.getElementById("searchButton");
var userLocation; //insert 

searchButtonjs.addEventListener('click', searchButtonClicked); //make function when buttne is clicked

function searchButtonClicked(){//inserted
  userLocation = document.getElementById("userInputHere").value;
  getCurrentWeather();
}

//day1 Function
function getCurrentWeather() {

    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userLocation}&units=metric&appid=${myAPIkey}`;


  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

        document.getElementById("day1Location").innerText= data.city.name;
        console.log(data)

        //Getting the Date, Day, Month and Time.
        var currentDay1 = data.list[0].dt_txt;
        var dd1 = currentDay1.substr(8,2);
        var mm1 = currentDay1.substr(5,2);
        var yyyy1 = currentDay1.substr(0,4);
        
        document.getElementById("day1Date").innerText= dd1+"/"+mm1+"/"+yyyy1;

        //Weather Icon day 1
        if(data.list[0].weather[0].main=="Clouds"){
          document.getElementById("day1Weather").classList.add("fas");
          document.getElementById("day1Weather").classList.add("fa-cloud");
        } else if(data.list[0].weather[0].main=="Clear"){
          document.getElementById("day1Weather").classList.add("fas");
          document.getElementById("day1Weather").classList.add("fa-sun"); 
        } else if(data.list[0].weather[0].main=="Rain"){
          document.getElementById("day1Weather").classList.add("fas");
          document.getElementById("day1Weather").classList.add("fa-cloud-rain"); 
        }
        else{
          document.getElementById("day1Weather").innerHTML = data.list[0].weather[0].main;
        }
        //Weather Icon day 2
        if(data.list[7].weather[0].main=="Clouds"){
          document.getElementById("day2Weather").classList.add("fas");
          document.getElementById("day2Weather").classList.add("fa-cloud");
        } else if(data.list[7].weather[0].main=="Clear"){
          document.getElementById("day2Weather").classList.add("fas");
          document.getElementById("day2Weather").classList.add("fa-sun"); 
        } else if(data.list[7].weather[0].main=="Rain"){
          document.getElementById("day2Weather").classList.add("fas");
          document.getElementById("day2Weather").classList.add("fa-cloud-rain"); 
        }
        else{
          document.getElementById("day1Weather").innerHTML = data.list[7].weather[0].main;
        }

        //Weather Icon day 3
        if(data.list[15].weather[0].main=="Clouds"){
          document.getElementById("day3Weather").classList.add("fas");
          document.getElementById("day3Weather").classList.add("fa-cloud");
        } else if(data.list[15].weather[0].main=="Clear"){
          document.getElementById("day3Weather").classList.add("fas");
          document.getElementById("day3Weather").classList.add("fa-sun"); 
        } else if(data.list[15].weather[0].main=="Rain"){
          document.getElementById("day3Weather").classList.add("fas");
          document.getElementById("day3Weather").classList.add("fa-cloud-rain"); 
        }
        else{
          document.getElementById("day3Weather").innerHTML = data.list[15].weather[0].main;
        }

        //Weather Icon day 4
        if(data.list[23].weather[0].main=="Clouds"){
          document.getElementById("day4Weather").classList.add("fas");
          document.getElementById("day4Weather").classList.add("fa-cloud");
        } else if(data.list[23].weather[0].main=="Clear"){
          document.getElementById("day4Weather").classList.add("fas");
          document.getElementById("day4Weather").classList.add("fa-sun"); 
        } else if(data.list[23].weather[0].main=="Rain"){
          document.getElementById("day4Weather").classList.add("fas");
          document.getElementById("day4Weather").classList.add("fa-cloud-rain"); 
        }
        else{
          document.getElementById("day4Weather").innerHTML = data.list[23].weather[0].main;
        }

        //Weather Icon day 5
        if(data.list[31].weather[0].main=="Clouds"){
          document.getElementById("day5Weather").classList.add("fas");
          document.getElementById("day5Weather").classList.add("fa-cloud");
        } else if(data.list[31].weather[0].main=="Clear"){
          document.getElementById("day5Weather").classList.add("fas");
          document.getElementById("day5Weather").classList.add("fa-sun"); 
        } else if(data.list[31].weather[0].main=="Rain"){
          document.getElementById("day5Weather").classList.add("fas");
          document.getElementById("day5Weather").classList.add("fa-cloud-rain"); 
        }
        else{
          document.getElementById("day5Weather").innerHTML = data.list[31].weather[0].main;
        }

        //Weather Icon day 6
        if(data.list[39].weather[0].main=="Clouds"){
          document.getElementById("day6Weather").classList.add("fas");
          document.getElementById("day6Weather").classList.add("fa-cloud");
        } else if(data.list[39].weather[0].main=="Clear"){
          document.getElementById("day6Weather").classList.add("fas");
          document.getElementById("day6Weather").classList.add("fa-sun"); 
        } else if(data.list[39].weather[0].main=="Rain"){
          document.getElementById("day6Weather").classList.add("fas");
          document.getElementById("day6Weather").classList.add("fa-cloud-rain"); 
        }
        else{
          document.getElementById("day6Weather").innerHTML = data.list[39].weather[0].main;
        }


      
        document.getElementById("day1Temp").innerText= "Temp: "+data.list[0].main.temp+" deg";
        document.getElementById("day1Wind").innerText= "Wind: "+data.list[0].wind.speed+" MPH";
        document.getElementById("day1Humidity").innerText= "Humidity: "+data.list[0].main.humidity+" %";
        document.getElementById("day1UVIndex").innerText= "";
        
        //day2
        var currentDay2 = data.list[7].dt_txt;
        var dd2 = currentDay2.substr(8,2);
        var mm2 = currentDay2.substr(5,2);
        var yyyy2 = currentDay2.substr(0,4);
        
        document.getElementById("day2Date").innerText= dd2+"/"+mm2+"/"+yyyy2;
        //document.getElementById("day2Weather").innerHTML= data.list[7].weather[0].main;
        document.getElementById("day2Temp").innerText= "Temp: "+data.list[7].main.temp+" deg";
        document.getElementById("day2Wind").innerText= "Wind: "+data.list[7].wind.speed+" MPH";
        document.getElementById("day2Humidity").innerText= "Humidity: "+data.list[7].main.humidity+" %";

        //day3
        var currentDay3 = data.list[15].dt_txt;
        var dd3 = currentDay3.substr(8,2);
        var mm3 = currentDay3.substr(5,2);
        var yyyy3 = currentDay3.substr(0,4);
        
        document.getElementById("day3Date").innerText= dd3+"/"+mm3+"/"+yyyy3;
        //document.getElementById("day3Weather").innerHTML= data.list[15].weather[0].main;
        document.getElementById("day3Temp").innerText= "Temp: "+data.list[15].main.temp+" deg";
        document.getElementById("day3Wind").innerText= "Wind: "+data.list[15].wind.speed+" MPH";
        document.getElementById("day3Humidity").innerText= "Humidity: "+data.list[15].main.humidity+" %";

        //day4
        var currentDay4 = data.list[23].dt_txt;
        var dd4 = currentDay4.substr(8,2);
        var mm4 = currentDay4.substr(5,2);
        var yyyy4 = currentDay4.substr(0,4);
        
        document.getElementById("day4Date").innerText= dd4+"/"+mm4+"/"+yyyy4;
        //document.getElementById("day4Weather").innerHTML= data.list[23].weather[0].main;
        document.getElementById("day4Temp").innerText= "Temp: "+data.list[23].main.temp+" deg";
        document.getElementById("day4Wind").innerText= "Wind: "+data.list[23].wind.speed+" MPH";
        document.getElementById("day4Humidity").innerText= "Humidity: "+data.list[23].main.humidity+" %";

        //day5
        var currentDay5 = data.list[31].dt_txt;
        var dd5 = currentDay5.substr(8,2);
        var mm5 = currentDay5.substr(5,2);
        var yyyy5 = currentDay5.substr(0,4);
        
        document.getElementById("day5Date").innerText= dd5+"/"+mm5+"/"+yyyy5;
        //document.getElementById("day5Weather").innerHTML= data.list[31].weather[0].main;
        document.getElementById("day5Temp").innerText= "Temp: "+data.list[31].main.temp+" deg";
        document.getElementById("day5Wind").innerText= "Wind: "+data.list[31].wind.speed+" MPH";
        document.getElementById("day5Humidity").innerText= "Humidity: "+data.list[31].main.humidity+" %";

        //day6
        var currentDay6 = data.list[39].dt_txt;
        var dd6 = currentDay6.substr(8,2);
        var mm6 = currentDay6.substr(5,2);
        var yyyy6 = currentDay6.substr(0,4);
        
        document.getElementById("day6Date").innerText= dd6+"/"+mm6+"/"+yyyy6;
        //document.getElementById("day6Weather").innerHTML= data.list[39].weather[0].main;
        document.getElementById("day6Temp").innerText= "Temp: "+data.list[39].main.temp+" deg";
        document.getElementById("day6Wind").innerText= "Wind: "+data.list[39].wind.speed+" MPH";
        document.getElementById("day6Humidity").innerText= "Humidity: "+data.list[39].main.humidity+" %";
    });
}



