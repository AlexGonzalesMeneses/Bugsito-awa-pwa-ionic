import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCheckbox, IonList, IonItem, IonLabel, IonItemDivider, IonInput, IonButton } from '@ionic/react';
export const Curso: React.FC = () => {
return (
<IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>CURSITO</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
        <IonToolbar>
            <IonTitle>Crear Curso</IonTitle>
        </IonToolbar>
            <IonLabel color="tertiary" > Nombre del Curso </IonLabel>
            <IonInput type="text" placeholder="name_curso" ></IonInput>
            <IonLabel color="tertiary" > Ingrese su contraseña: </IonLabel>
            <IonInput type="text" placeholder="Contrasenia" ></IonInput>            
        <IonList>
            <IonItemDivider>Materias</IonItemDivider>
            <IonItem>
                <IonLabel>Matematicas</IonLabel>
                <IonCheckbox slot="end" color="primary" />
            </IonItem>
            <IonItem>
                <IonLabel>Ciencias Sociales</IonLabel>
                <IonCheckbox slot="end" color="secondary" />
            </IonItem>
            <IonItem>
                <IonLabel>Ciencias Naturales</IonLabel>
                <IonCheckbox slot="end" color="secondary" />
            </IonItem>
            <IonItem>
                <IonLabel>Lenguaje</IonLabel>
                <IonCheckbox slot="end" color="danger" />
            </IonItem>
            <IonItem>
                <IonLabel>Religion</IonLabel>
                <IonCheckbox slot="end" color="light" />
            </IonItem>
            <IonItem>
                <IonLabel>Educacion Fisica</IonLabel>
                <IonCheckbox slot="end" color="dark" />
            </IonItem>
            <IonItem>
                <IonLabel>Musica</IonLabel>
                <IonCheckbox slot="end" color="secondary" />
            </IonItem>
            <IonItem>
                <IonLabel>Quechua</IonLabel>
                <IonCheckbox slot="end" color="danger" />
            </IonItem>               
        </IonList>
        <IonButton expand="block" color="success">Crear</IonButton> 
    </IonContent>
</IonPage>
);
};
export default Curso;