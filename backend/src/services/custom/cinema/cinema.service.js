const axios = require('axios')
module.exports = function(app) {
    class CinemaService {
        async find(params) {
        return [];
        }
        async get(id) {
            let data;
            let res = {};

            var now = new Date();
            var nextMonth = new Date(now.getTime() + 4 * 7 * 24 * 60 * 60 * 1000).toISOString().substring(0,10);
            var lastMonth = new Date(now.getTime() - 4 * 7 * 24 * 60 * 60 * 1000).toISOString().substring(0,10);

            let index = 0;
            for(var i=1; i<11; i++){
                var options = {
                    method: 'GET',
                    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.CINEMA_API_KEY}&language=en-US&page=${i}&region=FR`
                  };
                  
                  await axios.request(options).then(function (response) {
                      data = response.data
                      for(var movie in data.results){
                          var date = new Date(data.results[movie].release_date).toISOString().substring(0,10)
                          if(date > lastMonth && date < nextMonth){
                            res[index] = data.results[movie];
                            index++;
                          }
                      }
                  }).catch(function (error) {
                      res = {err: "not found"}
                      console.error(error);
                  });

            }

            let entries = Object.entries(res);

            let sorted = entries.sort((a, b) => new Date(a[1].release_date).getTime() - new Date(b[1].release_date).getTime());

            let length = sorted.length;
            if(length > 15){
                sorted.splice(15,length - 15);
            }

            return await sorted            
        }

        async create(data, params) {}
        async update(id, data, params) {}
        async patch(id, data, params) {}
        async remove(id, params) {}
        setup(app, path) {}
    }

    app.use('cinema',new CinemaService())
  
}
  