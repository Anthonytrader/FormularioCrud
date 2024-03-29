import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import"./styles/FormUser.css"
const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, isDisable, setIsDisable }) => {
  
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    reset(infoUpdate);
  }, [infoUpdate]);

  const submit = (data) => {
    if (infoUpdate) {
      // update
      updateUser('/users', infoUpdate.id, data);
      setInfoUpdate(); // Aquí estaba el error tipográfico, debe ser setInfoUpdate() en lugar de setInfoUpdate.
    } else {
      // create
      createUser('/users', data);
    }
    setIsDisable(true)
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    });
  };

  const handleExit=()=>{
    setIsDisable(true)
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    })
    setInfoUpdate()
  }

  return (
    <div className={`form-container ${isDisable && "form_disable"}`}>
  <form className="form" onSubmit={handleSubmit(submit)}>
    <h2 className="form_title">Form User</h2>

    <div onClick={handleExit} className="form_x">
      <i className="bx bx-x-circle"></i>
    </div>
    
    <label className="form_label">
      <span className="form_span">Email</span>
      <input className="form_input" {...register('email')} type="email" />
    </label>
    
    <label className="form_label">
      <span className="form_span">Password</span>
      <input className="form_input" {...register('password')} type="password" />
    </label>
    
    <label className="form_label">
      <span className="form_span">First_name</span>
      <input className="form_input" {...register('first_name')} type="text" />
    </label>
    
    <label className="form_label">
      <span className="form_span">Last_name</span>
      <input className="form_input" {...register('last_name')} type="text" />
    </label>
    
    <label className="form_label">
      <span className="form_span">Birthday</span>
      <input className="form_input" {...register('birthday')} type="date" />
    </label>
    
    <button className="form_btn1" type="submit">Submit</button>
  </form>
</div>

  );
};

export default FormUser;
