




document.getElementById('generate').addEventListener('click', performAction);
var feeling=document.createElement('DIV');
document.getElementById("feeling").appendChild(feeling);
//Here we use the api key from Open Weather Journal API using city id
function performAction(){
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?id=';
var newId =  document.getElementById('id').value;
let apiKey = '&appid=23012caa6cd9437d2588b8f412b67f5f';
getWeather(baseURL,newId, apiKey);
feeling.innerHTML=document.getElementById('feelingLabel').value;


}
async function getWeather (baseURL,newId ,apikey){

  const res = await fetch(baseURL+newId+apikey)
  try {

    const projectData = await res.json();
    
    console.log(typeof projectData.weather[0].description);
  console.log(projectData);
  if (projectData.message) {
    alert('City not found');
  }else{
    
  feeling.innerHTML=document.getElementById('feelingLabel').value+"<br>The city is: "+ projectData.name+", "+projectData.sys.country+"<br> the longitude: "+projectData.coord.lon +"<br> the latitude: "+projectData.coord.lat +"<br >the weather is "+projectData.weather[0].main+" "+projectData.weather[0].description+"<br> the wind speed is "+projectData.wind.speed;
  }
    return projectData;
  }  catch(error) {
    console.log("error", error);
   
  }
}

