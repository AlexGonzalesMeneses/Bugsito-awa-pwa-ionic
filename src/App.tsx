import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CreateProject from './components/components/projects/CreatePrjoct';
import SignIn from './components/components/auth/SignIn';
import SignOut from './components/components/auth/SignOut';
import ProjectDetails from './components/components/projects/ProjectDetails';
import Dashboard from './components/components/dashboard/Dashboard';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Home} exact />
        <Route path="/create" component={CreateProject}/>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignOut}/>
        <Route path="/details/:id" component={ProjectDetails} />
        <Route path="/dashboard" component={Dashboard} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
