import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOptions, IonItemOption } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
const arr = [
  {
    name: 'Finn',
    desc: 'this guy rocks'
  },
  {
    name: 'Han',
    desc: 'Trust me, i am programmer'
  },
  {
    name: 'Rey',
    desc: 'I am donde with it!'
  }
]
const Home: React.FC = () => {
  return (
   <IonPage>
     <IonHeader>
       <IonToolbar>
         <IonTitle>Hello world</IonTitle>
       </IonToolbar>
     </IonHeader>
     <IonContent className="ion-padding">
       <IonList>
         {arr.map(elem => (
           <IonItemSliding key={elem.name}>
             <IonItem>
               <IonAvatar>
                 <img src={`https://ionicframwework.com/docs/demos/api/list/avatar-${elem.name.toLowerCase()}.png`} />
               </IonAvatar>
               <IonLabel className="ion-padding">
                  <h2>{elem.name}</h2>
                  <h3>{elem.desc}</h3>
                  <p>Some helper text!</p>
               </IonLabel>
             </IonItem>
             <IonItemOptions side="end">
               <IonItemOption onClick={()=> alert('pressed hello!')}>Hello</IonItemOption>
             </IonItemOptions>
           </IonItemSliding>
         ))}
       </IonList>
     </IonContent>
   </IonPage>
  );
};

export default Home;
