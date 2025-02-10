import axios from 'axios'

export default function ApiComponent() {

    const instance = axios.create({
        baseURL: 'http://localhost:8180',
        headers: {
            'Content-Type': 'application/json'
        }        
    })

    return {
        instance,
    }
}