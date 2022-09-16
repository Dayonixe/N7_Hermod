const axios = require('axios')
module.exports = function(app) {
    class WeatherService {
        async find(params) {
        return [];
        }
        async get(id, params) {
            console.log(id)
            let data;
            let lat, long;

            await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${id.text}&limit=5&appid=${process.env.WEATHER_API_KEY}`)
                .then(rep => {
                    lat = rep.data[0].lat;
                    long = rep.data[0].lon;
                }).catch(err => {
                    data = {err: "no city"};
                    console.error(err.toString())})
                .finally(() => {
                    console.log("Ok")
            })

            await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${process.env.WEATHER_API_KEY}`)
                .then(rep => { 
                    data = rep.data
                })
                .catch(err => {
                    data = {err: "no city"};
                    console.error(err.toString())})
                .finally(() => {
                    console.log("Ok")
            })
            return await data            
        }

        async create(data, params) {}
        async update(id, data, params) {}
        async patch(id, data, params) {}
        async remove(id, params) {}
        setup(app, path) {}
    }

    app.use('weather',new WeatherService())
  
}
  