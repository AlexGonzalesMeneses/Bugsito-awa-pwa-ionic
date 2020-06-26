import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading, IonButton } from '@ionic/react';
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
                    <IonTitle>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLoading message='Saliendo...' duration={0} isOpen={busy} ></IonLoading>
                <p>Hola Usuario {email} </p>
                <IonButton onClick={logout} >Salir</IonButton>
            </IonContent>
        </IonPage>
    );

};

export default Dashboard;