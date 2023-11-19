import { useEffect, useState } from 'react';
import ToDo from './components/ToDo';
import { getToDo, addToDo, updateToDo, deleteToDo } from './utils/HandleApi';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');

  const fetchData = () => {
    getToDo(setToDo);
  };

  useEffect(() => {
    fetchData();
    const kathmanduTimeZone = new Date().toLocaleString('en-US', {timezone: 'Asia/Kathmandu',});
  setCurrentDateTime(kathmanduTimeZone);
  },
   []);
  const updateMode= (_id, text)=>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  

  return (
    <>
      <div className='App'>
        <div className='container'>
          <div className='date-time'>
            <p>Current Date and Time: {currentDateTime}</p>
          </div>
          <h1>ToDo App</h1>
          <div className='top'>
            <input
              type='text'
              placeholder='Add Todos....'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className='add' onClick={isUpdating? ()=> updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              :() => addToDo(text, setText, setToDo)}>
              {isUpdating? "Update": "Add"}
            </div>
          </div>
          <div className='list'>
            {(Array.isArray(toDo) ? toDo : []).map((item) => (
              <ToDo key={item._id} text={item.text} 
              updateMode={()=> updateMode(item._id,item.text)}
              deleteToDo={()=>deleteToDo(item._id,item.text)}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

