import React,{useState} from 'react'

// firebase
import auth from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

// react router dom
import {useNavigate} from 'react-router-dom';

// framer-motion
import {motion} from 'framer-motion'

export const LoginModal = ({setLoginModal}) => {

  // navigate method
  const navigate = useNavigate();

  // states
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [err, setErr]=useState(null);

  // form submit event
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

  // backshadow variants
  const backVariants={
    hidden:{
      opacity: 0
    },
    visible:{
      opacity: 1,
      transition:{
        duration: 0.5
      }
    }
  }

  // modal variants
  const modalVariants={
    hidden:{
      y:'-100vh'
    },
    visible:{
      y:0,
      transition:{
        duration: 0.5
      }
    }
  }

  return (
    <motion.div className='modal-background'
    variants={backVariants} initial="hidden" 
    animate="visible">

        <motion.div className='login-modal-container'
        variants={modalVariants} initial="hidden"
        animate="visible">
            
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

        </motion.div>

        <div className='delete-icon' onClick={()=>setLoginModal(false)}>
          X
        </div>

    </motion.div>
  )
}
