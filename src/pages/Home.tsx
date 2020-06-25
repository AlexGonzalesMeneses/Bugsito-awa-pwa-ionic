import React, { useState,useEffect } from 'react';
import { IonButton, IonMenuButton,IonButtons,IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
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
                <IonButtons slot="start">
                <IonMenuButton />
                </IonButtons>
                    <IonTitle>CURSITO</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton  expand="block" routerLink="/login">Login</IonButton>
                <IonButton  expand="block" routerLink="/register" color="secondary">Register</IonButton>                
            </IonContent>
        </IonPage>
    );

};

export default Home;