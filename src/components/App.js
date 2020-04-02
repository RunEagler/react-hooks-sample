import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from '../reducers';
import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';


console.log(AppContext);
const App = (props) => {
  const [state, dispatch] = useReducer(reducers, []);

  return (
    <AppContext.Provider value={'Hello, I am a provider.'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/>
      </div>
    </AppContext.Provider>
  );
};

App.defaultProps = {
  name: '',
  price: 1000,
};

export default App;
