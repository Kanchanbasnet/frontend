import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getToDo = (setToDo) => {
    axios.get(baseUrl)
      .then(({ data }) => {
        console.log('Data received:', data);
        setToDo(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setToDo([]);
      });
  };
  const addToDo = (text, setText, setToDo) => {
    axios.post(baseUrl, { text })
      .then((response) => {
        console.log('Todo added successfully:', response.data);
        // Assuming the server responds with the newly added todo
        setToDo(prevTodos => [...prevTodos, response.data]);
        setText(""); // Clear the input field after adding a todo
      })
      .catch(error => {
        console.error('Error adding todo:', error);
      });
  };
  const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating)=>{
    axios.put(baseUrl, {_id: toDoId, text})
      .then((data)=>{
        setText("")
        setIsUpdating(false)
        getToDo(setToDo);
      })
      .catch(error=>{
        console.error('Error updating todo:', error);
      })

  }
  const deleteToDo = (_id, setToDo) => {
    axios.delete(baseUrl, { data: { _id } })
      .then((data) => {
        getToDo(setToDo);
      })
      .catch(error => {
        console.error('Error deleting todo: ', error);
      });
  };
  
  
  export { getToDo, addToDo, updateToDo,deleteToDo  };
  