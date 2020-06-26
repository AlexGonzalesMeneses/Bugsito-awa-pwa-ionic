import React, { useState, useEffect } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading, IonImg } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom'
import { loginUser } from '../firebaseConfig'
import { toast } from '../toast';
import { setUserState } from '../redux/actions';
import { useDispatch } from 'react-redux';
//import ExploreContainer from '../components/ExploreContainer';
//import './HOme.css';

const Login: React.FC = () => {

    const [busy, setBusy] = useState<boolean>(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login(){

        setBusy(true)
        const res : any = await loginUser(email, password)
        if(!res){
            toast('Error Loggin with your credentials')
        }else{
            console.log(res)
            dispatch(setUserState(res.user.email))
            history.replace('/dashboard')
            toast('You have logged in!')
        }
        //console.log(` ${res ? 'Login success' : 'Login Failed'} `)
        setBusy(false)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>CURSITO</IonTitle>
                </IonToolbar>
            </IonHeader>
            {<IonLoading message="por favor espere..." duration={0} isOpen={busy} />}
            <IonContent className="ion-padding">
                <IonImg src='assets/icon/iconnew.png' ></IonImg>
                <IonLabel color="tertiary" > Ingrese su correo: </IonLabel>
                <IonInput type="email" placeholder="Correo" onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
                <IonLabel color="tertiary" > Ingrese su contraseña: </IonLabel>
                <IonInput type="password" placeholder="Contrasenia" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                <IonButton expand="block" color="tertiary" onClick={login}>Login</IonButton>
                <p>Eres nuevo? <a href="register">Registrarse</a></p>
            </IonContent>
        </IonPage>
    );

};

export default Login;