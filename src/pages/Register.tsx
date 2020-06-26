import React, { useState, useEffect } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading } from '@ionic/react';
import { toast } from '../toast';
import { registerUser } from '../firebaseConfig'

//import ExploreContainer from '../components/ExploreContainer';
//import './HOme.css';

const Register: React.FC = () => {

    const [busy, setBusy] = useState<boolean>(false)

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    async function register(){

        setBusy(true)
        //console.log(username, email, password, cpassword);
        if (password !== cpassword ) {
            return toast('No son iguales las contrasenias')
        }
        if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
            return toast('Es requerido el nombre, el email y la consenia')            
        }

        const res = await registerUser(username, email, password)

        if (res) {
            toast('Usuario resgistrado exitosamete')
        }

        setBusy(false)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>CURSITO</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading message="Registro en progeso por favor espere..." duration={0} isOpen={busy} />
            <IonContent className="ion-padding">
                <IonInput type="text" placeholder="nombre de usuario" onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
                <IonLabel color="tertiary" > Ingrese su correo: </IonLabel>
                <IonInput type="text" placeholder="correo" onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
                <IonLabel color="tertiary" > Ingrese su contraseña: </IonLabel>
                <IonInput type="password" placeholder="Contrasenia" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                <IonLabel color="tertiary" > Confirme su contraseña: </IonLabel>
                <IonInput type="password" placeholder="Confirma Contrasenia" onIonChange={(e: any) => setCPassword(e.target.value)}></IonInput>
                <IonButton expand="block" color="tertiary" onClick={register}>REGISTRARSE</IonButton>

                <p>Ya tienes una cuenta? <a href="login">Login</a> </p>
            </IonContent>
        </IonPage>
    );

};

export default Register;