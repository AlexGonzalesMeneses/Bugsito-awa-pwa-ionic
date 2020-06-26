import * as firebase from 'firebase' 
import { toast } from './toast'
import { resolve } from 'dns'
import { rejects } from 'assert'
const config = {
    apiKey: "AIzaSyBc56FO4wyT7bZh9kVnsCnOi8fZTdPj3MA",
    authDomain: "appcurso-12cd9.firebaseapp.com",
    databaseURL: "https://appcurso-12cd9.firebaseio.com",
    projectId: "appcurso-12cd9",
    storageBucket: "appcurso-12cd9.appspot.com",
    messagingSenderId: "400194038502",
    appId: "1:400194038502:web:468a7afd1ced7c0376a927",
    measurementId: "G-45MLD2EVMP"
}

firebase.initializeApp(config)

export function getCurrentUser(){
    return new Promise((resolve, rejects) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
            if(user){
                resolve(user)
            }else{
                resolve(null)
            }
            unsubscribe()
        })
    })
}

export function logoutUser(){
    return firebase.auth().signOut()
}

//firebase.auth()
export async function loginUser(email: string, password: string){
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        //console.log(res)
        return res
    }catch(error){
        toast(error.message, 4000)
        //console.log(error);
        return false
    }
    
    //autenticate with firebase 
    //if present, show dashboard
    //if not, show error
}

export async function registerUser(username: string, email: string, password: string){
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch(error) {
        //console.log(error)
        toast(error.message)
        return false
    }
}
