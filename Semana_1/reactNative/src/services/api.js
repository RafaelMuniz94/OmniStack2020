import axios from "axios"


const api = axios.create({
    baseURL:'http://localhost:3333'
})


export default api


/**
 * 
 * IOS com emulador: localhost
 * IOS dispositivo fisico: ip da maquina
 * Android com emulador: localhost ( adb reverse)
 * Android com emulador: ip proprio do emulador- Android Estudio(10.0.2.2)
 * Android com emulador Genymotion:  10.0.3.2
 * Android fisico: ip da maquina
 */