import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton, IonCheckbox, IonList, IonItem, IonLabel, IonItemDivider, IonInput } from '@ionic/react';
export const Materias: React.FC = () => {
return (
<IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>CURSITO</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
        <IonToolbar>
            <IonTitle>MATERIAS</IonTitle>
        </IonToolbar>
            <IonButton expand="block" color="primary">Ciencias Naturales</IonButton>
            <IonButton expand="block" color="secondary">Ciencias Sociales</IonButton>
            <IonButton expand="block" color="tertiary">Matematicas</IonButton>
            <IonButton expand="block" color="success">Lenguage</IonButton>
            <IonButton expand="block" color="warning">Musica</IonButton>
            <IonButton expand="block" color="danger">Religion</IonButton>
        </IonContent>
    </IonPage>
);
};
export default Materias;
