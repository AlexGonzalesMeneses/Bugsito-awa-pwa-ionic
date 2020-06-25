import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading, IonButton,IonImg } from '@ionic/react';
import { useSelector } from 'react-redux';
import { logoutUser } from '../firebaseConfig'
import { useHistory } from 'react-router';

const Dashboard: React.FC = () => {

    const email = useSelector((state :any) => state.user.email)
    const [busy, setBusy] = useState(false)
    const history = useHistory()

    async function logout(){
        setBusy(true)
        await logoutUser()
        setBusy(false)
        history.replace('/')
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Usuario</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonImg src='assets/icon/iconnew.png' ></IonImg>
                <IonLoading message='Saliendo...' duration={0} isOpen={busy} ></IonLoading>
                <p>Hola Usuario {email} </p>
                <IonButton routerLink="/EntraCurso" expand="block" color="secondary">Unirse a un Curso</IonButton>
                <IonButton routerLink="/Curso" expand="block" color="secondary">Crear Curso</IonButton>
                <IonButton onClick={logout} expand="block" color="tertiary">Salir</IonButton>
                
            </IonContent>
        </IonPage>
    );

};

export default Dashboard;