import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from '../reducers';
import EventForm from './EventForm'
import Events from './Events';

const App = (props) => {
  const [state, dispatch] = useReducer(reducers, []);

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch}  />
    </div>
  );
};

App.defaultProps = {
  name: '',
  price: 1000,
};

export default App;
