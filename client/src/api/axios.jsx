import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    }
})


export const LoginUser = (userData) => {
    return api.post("/auth/login",userData)
}

export const SignupUser = (userData) => {
    return api.post("/auth/signup",userData)
}

export const getContact = (userId) => {
    return api.get(`/users/${userId}/get-contacts`)
}

export const addContact = (userId,data) => {
    return api.post(`/users/${userId}/add-contact`,data)
}

export const deleteContact = (userId,contactId) => {
    return api.delete(`/users/${userId}/contacts/${contactId}`)
}

export const getMessages = (userId,contactId) => {
    return api.get(`/users/${userId}/messages/${contactId}`)
}

export const addMessages = (userId,contactId,message) => {
    return api.post(`/users/${userId}/messages/${contactId}`,message)
}