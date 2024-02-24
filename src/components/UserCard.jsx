import React from 'react';
import"./styles/UserCard.css";
const UserCard = ({ user, deleteUser, setInfoUpdate ,setIsDisable}) => {
  const handleDelete = () => {
    deleteUser("/users", user.id);
  };

  const handleEdit = () => {
    setInfoUpdate(user);
    setIsDisable(false)
  };

  return (
    <div className="card-container">
    <article className="user-card"> {/* Agrega la clase "user-card" al contenedor principal del artículo */}
      <h3>{user.first_name} {user.last_name}</h3>
      <ul>
        <li><span>Email: </span><span>{user.email}</span></li>
        <li><span>Birthday: </span><span>{user.birthday}</span></li>
      </ul>
      <button className="delete-button" onClick={handleDelete}><i className="bx bx-trash"></i></button> {/* Agrega la clase "delete-button" al botón de eliminar */}
      <button className="edit-button" onClick={handleEdit}><i className="bx bx-edit-alt"></i></button> {/* Agrega la clase "edit-button" al botón de editar */}
    </article>
  </div>
  
  );
  
}

export default UserCard;
