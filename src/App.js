import React, { useEffect } from 'react';
import Autorization from './components/Autorization';
import Header from './components/Header';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './sass/style.scss';
import Content from './components/Content';

function App() {
  const [userShow, setUserShow] = useState(false);
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    data.login == 'admin' && data.password == "test1234"? setUserShow(true) : setUserShow(false);
    
    setLogin(data.login);
    setPass(data.password);
    reset();
  };

  return (

      <div className="wrapper">
        <Header userShow={userShow} login={login}/>
        <div className='conteiner'>
        <Routes>
          <Route path='/' element={
            <Autorization 
                errors={errors} 
                register={register} 
                handleSubmit={handleSubmit} 
                onSubmit={onSubmit}
                login={login}
                pass={pass}
            />}
          />
          <Route path='/content' element={
            <div className='block'>
                <Content/>
            </div> 
          }>
          </Route>    
        </Routes>
        </div>  
      </div>

  );
}

export default App;
