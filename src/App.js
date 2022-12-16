
import './App.css';
import List from './List';
import AppCss from './App.module.css';

function App() {
  // const [name, setName] = useState('');
  // const [list, setList] = useState([]);
  // const [isEditing, setIsEditing] = useState(false);
  // const [editID, setEditID] = useState(null);
  // const [alert, setAlert] = useState({show: false, msg: '', type: ''});
  return (
    <div className={AppCss.sectionCenter}>
      <div className={AppCss.groceryContainer}>
        <List />
        <button className={AppCss.clearBtn}>Clear Items</button>
      </div>
    </div>
  );
}

export default App;
