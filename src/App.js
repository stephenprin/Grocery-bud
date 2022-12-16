import React, { useState } from 'react';
import './App.css';
import List from './List';
import AppCss from './App.module.css';
import Alert from './components/Alert';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
   const [isEditing, setIsEditing] = useState(false);
  // const [editID, setEditID] = useState(null);
   const [alert, setAlert] = useState({show: false, msg: '', type: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      //showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      // deal with edit
    } else {
      //show alert
      const newItem = { id: uuidv4(), title: name };
      setList([ ...list, newItem ]);
      console.log(list);
      setName('');
    
    }
  }
  return (
    <div className={AppCss.sectionCenter}>
     
      <form className={AppCss.groceryForm} onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery Bud</h3>
        <div className={AppCss.formControl}>
          <input type="input" className={AppCss.grocery} placeholder="e.g. eggs" value={name} onChange={(e)=>setName(e.target.value) } />
          <button type="submit" className={AppCss.submitBtn}>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className={AppCss.groceryContainer}>
        <List items={list} />
        <button className={AppCss.clearBtn}>Clear Items</button>
      </div>
    </div>
  );
}

export default App;
