const value = document.getElementById('cityname');
const button = document.getElementById('btn');
const region = document.getElementById('region');
const temp = document.getElementById('temp');
const humidity = document.getElementById('hum');

const API_KEY = "3365ae06018448bcb63115219253008"; 

const getData = async (cityname) => {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityname}&aqi=no`);
    return await response.json();
};

button.addEventListener('click', async () => {
        let input = value.value;

        let data = await getData(input);
        
        region.innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
        temp.innerText = `Temperature: ${data.current.temp_c} °C`;
        humidity.innerText = `Humidity: ${data.current.humidity}%`;
});
