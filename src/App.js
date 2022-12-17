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
       showAlert(true, 'danger', 'please enter value');
      
  
    } else if (name && isEditing) {
      // deal with edit
    } else {
      //show alert
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: uuidv4(), title: name };
      setList([ ...list, newItem ]);
     
      setName('');
    
    }
  }

  const showAlert = (show = false, type = '', msg = '') => { 
    setAlert({ show, type, msg });
  }
  const clearList = () => { 
    showAlert(true, 'danger', 'empty list');
    setList([]);
    console.log(list);
  }

  const deleteItem = (id) => { 
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => { 
    const specificItem= list.map((item) => item.id === id);
  }

  return (
    <div className={AppCss.sectionCenter}>
     
      <form className={AppCss.groceryForm} onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={ showAlert} />}
        <h3>Grocery Bud</h3>
        <div className={AppCss.formControl}>
          <input type="input" className={AppCss.grocery} placeholder="e.g. eggs" value={name} onChange={(e)=>setName(e.target.value) } />
          <button type="submit" className={AppCss.submitBtn}>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className={AppCss.groceryContainer}>
        <List items={list} deleteItem={deleteItem} />
        <button className={AppCss.clearBtn} onClick={clearList}>Clear Items</button>
      </div>
      )}
      
    </div>
  );
}

export default App;
