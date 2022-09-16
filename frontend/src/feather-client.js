import io from 'socket.io-client'

import feathers from '@feathersjs/client'

const app = feathers()

// const socket = io(process.env.BASE_URL)
const socket = io('127.0.0.1:3030') // seems like with no argument, connection is made with the server which served index.html
app.configure(feathers.socketio(socket))
app.configure(feathers.authentication({
    storage: window.localStorage
}))

app.configure(feathers.authentication({ storage: window.sessionStorage }))


export default app