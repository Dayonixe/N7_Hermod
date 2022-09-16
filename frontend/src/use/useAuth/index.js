import { reactive, computed } from "vue"

import app from "@/feather-client"
import auth from "@feathersjs/authentication-client"

const user = reactive({
   userReady: false,
   data: {},
   errorLogs: false
})

const login = async (email, password) => {
    await app.configure(auth({
        storage: window.localStorage,
    }))
    await app.authenticate({
        strategy: "local",
        email,
        password
    }).then(data => {
        console.log(data)
        user.data.username = data.user.username;
        user.data.email = data.user.email;
        user.data.id = data.user.id;
        user.userReady = true;
        user.errorLogs = false;
    }).catch(err => {
        console.log(err.message)
        user.errorLogs = true;
    })
}

const logout = () => {
    // app.logout()
    user.data = {};
    user.userReady = false;
    user.errorLogs = false;
    app.emit('logout')
    console.log('LOGOUT')
}

const signUp = async (username, email, password) => {
    await app.service('users').create({username, email, password})
    login(email, password)
}

const getUser = computed(() => {
    let res = {
        error: user.errorLogs,
        data: null
    }
    if(!user.userReady){
        return res
    }
    res.data = user.data
    return res
})

export function useAuth() {
    return {
        getUser, login, logout, signUp
    }
}