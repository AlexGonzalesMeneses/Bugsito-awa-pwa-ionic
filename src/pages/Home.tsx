import React, { useState, useEffect } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

//import ExploreContainer from '../components/ExploreContainer';
//import './HOme.css';

const Home: React.FC = () => {
    const [input, setInput] = useState<String>('');
    useEffect(() => {
        console.log(input)
    }, [input]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>CURSITO</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton routerLink="/login">Login</IonButton>
                <IonButton routerLink="/register" color="secondary">Register</IonButton>
            </IonContent>
        </IonPage>
    );

};

export default Home;