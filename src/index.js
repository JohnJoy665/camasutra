import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import state, {callBack} from './redux/state';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { handleAddPost, handleChangePost } from './redux/state.js';


const renderAllTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={state} handleAddPost={handleAddPost} handleChangePost={handleChangePost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
}


renderAllTree()
callBack(renderAllTree)
