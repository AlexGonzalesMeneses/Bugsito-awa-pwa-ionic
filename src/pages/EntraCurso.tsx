import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg,IonCheckbox, IonList, IonItem, IonLabel, IonItemDivider, IonInput } from '@ionic/react';
import { IonButton, IonIcon} from '@ionic/react';
import { star } from 'ionicons/icons';
const checkboxList = [
{ val: 'Pepperoni', isChecked: true },
{ val: 'Sausage', isChecked: false },
{ val: 'Mushroom', isChecked: false }
];

export const EntraCurso: React.FC = () => {

const [checked, setChecked] = useState(false);

return (
<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>CURSITO</IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <IonContent className="ion-padding">
                <IonImg src='assets/icon/iconnew.png' ></IonImg>
                <IonLabel color="tertiary" > Ingrese el Codigo </IonLabel>
                <IonInput type="text" placeholder="Cod_codigo" ></IonInput>
                <IonButton routerLink="/Materias" expand="block" color="success">Entrar</IonButton> 
            </IonContent>
        </IonPage>
);
};
export default EntraCurso;