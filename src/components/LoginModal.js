import React,{useState} from 'react'
import auth from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

export const LoginModal = ({setLoginModal}) => {

  const navigate = useNavigate();

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [err, setErr]=useState(null);

  const handleLogin=(e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password).then(()=>{
        setErr(null);
        setEmail('');
        setPassword('');
        setLoginModal(false);
        navigate('/dashboard');
      }).catch(err=>setErr(err.message))
  }

  return (
    <div className='modal-background'>
        <div className='login-modal-container'>
            <div className='delete-icon' onClick={()=>setLoginModal(false)}>x</div>
            <h2 className='modal-heading'>Admin-Login</h2>
            <form className='form-group' onSubmit={handleLogin}>
                <input type='email' className='form-control' required
                placeholder='Enter Email'
                onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <input type='password' className='form-control' required
                placeholder='Enter Password'
                onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <button type='submit' className='btn btn-md'>LOGIN</button>
                {err!==null&&(
                  <span className='err-message'>{err}</span>
                )}
            </form>
        </div>
    </div>
  )
}
