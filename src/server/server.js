import axios from "axios";

const url = 'http://api.weatherstack.com/current?access_key=e52618db47ac452c7f0003bfd8bcd564'

const getWeather = (query) => {
    
    axios.get(`${url}/&query=${query}`).then((response) => console.log(response.data))

}