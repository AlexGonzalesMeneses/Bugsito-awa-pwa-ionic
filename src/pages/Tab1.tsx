import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>CURSITO</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        
        <IonItemDivider>Number type input</IonItemDivider>
        <IonItem>
          <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">CORREO:</IonLabel>
          <IonInput value={text} placeholder="Ingrese su correo" onIonChange={e => setText(e.detail.value!)} clearInput> </IonInput>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
