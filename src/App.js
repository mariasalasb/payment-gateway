import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainContainer from './Components/MainContainer/MainContainer';
import Payment from './Components/Payment/Payment';
import Header from './Components/Header/Header';
import { intent } from './Intents/intent';
import Summary from './Components/Summary/Summary';
import {ContextProvider} from './Context/Context';
import './App.css';
import PersonalDataForm from './Components/PersonalDataForm/PersonalDataForm';
import  { Analytics } from 'aws-amplify';
import {useEffect} from 'react';
import ReactGA from 'react-ga';
import Confirmation from './Components/Confirmation/Confirmation';
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {
  useEffect(()=>{
    Analytics.record({
      name: 'Inicio trámite',
      attributes: {
          attr: intent[0].procedure.name, 
      }
    });
    ReactGA.initialize('UA-215820655-1');
    ReactGA.pageview('/inicio');  
    ReactGA.set({ dimension1: intent[0].procedure.name });
    /*var dimensionValue = 'SOME_DIMENSION_VALUE';
    ga('set', 'dimension1', dimensionValue);*/
    const typeDoc=intent[0].taxPayer.identification.type;
    if( typeDoc==="CUIT"){
      ReactGA.set({ dimension2: 'Persona Jurídica' });
    }else{
      ReactGA.set({ dimension2: 'Persona Física' });
    }
  },[])


  return (
    <div className="App ">
        <Header/>
        <h1>{intent[0].procedure.name}</h1>
        <Router>
          <ContextProvider>
            <Switch>
              <div className="main_layout">
                <Route exact path="/" component={MainContainer} />
                <Route exact path="/pago/:paymentmethod" component={Payment}/>
                <Route exact path="/confirmacion/:paymentmethod" component={Confirmation}/>
                <Route exact path="/error/:paymentmethod" component={ErrorPage}/>
                <Route exact path="/datospersonales" component={PersonalDataForm}/>
                <Route  path="/" component={Summary} />
              </div>
            </Switch>
          </ContextProvider>
        </Router>
    </div>
  );
}

export default App;
