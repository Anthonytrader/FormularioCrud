import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import UserCard from './components/UserCard';

function App() {
  const [infoUpdate, setInfoUpdate] = useState();
  const[isDisable, setIsDisable]=useState(true)
  const url = 'https://users-crud.academlo.tech';
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);
 
  useEffect(() => {
    getUsers('/users');
  }, []);

  console.log(users);
  const handleNewUser=()=>{
    setIsDisable(false)
  }

  return (
    <div className="centered-container">
      <div className='title_btn'>
        <h1 className='title'>Users</h1>
        <button onClick={handleNewUser} className='form_btn'>Create new User</button>
      </div>
  
      <FormUser 
        createUser={createUser} 
        infoUpdate={infoUpdate} 
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
      />
      
      <div className='container_card_user'>
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setInfoUpdate={setInfoUpdate}
            setIsDisable={setIsDisable}
          />
        ))}
      </div>
    </div>
  );
        }

export default App;
