module.exports = {
   
    devServer: {
       // see: https://cli.vuejs.org/config/#devserver-proxy)
       // `npm run serve` ne gère que des requêtes statiques vers index.html, css/, etc.
       // les requêtes autres peuvent être redirigées
 
       proxy: {
          '/socket.io/.*': {
             target: 'http://127.0.0.1:3030',
          },
          '/oauth/.*': {
             target: 'http://127.0.0.1:3030',
          },
          '/static/.*': {
             target: 'http://127.0.0.1:3030',
          },
       },
    },
 }
 