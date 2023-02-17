import React, {useState} from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import ErrorModal from "./components/ErrorModal"


function App() {
  const [users,setUsers]=useState([]);
  const [isValid, setIsValid]= useState(true);
  const [message, setMessage]= useState("");

  const addUserHandler = user =>{
    setUsers((prevUsers)=>{
      console.log(user)
      if (user.name!=="" && user.age!==""){
        return [user, ...prevUsers];
     }
     setIsValid(false);
     return prevUsers;
    });
  };
  function deletehandler(){
    setMessage('');
  }

  if (isValid===false){
    setMessage(<ErrorModal deletebox={deletehandler}/>);
    setIsValid(true);
  }
  return (
    <div>
      <AddUser onSaveUserData={addUserHandler}/>
      <UsersList data={users}/>
      {message}
    </div>
  );
}

export default App;
