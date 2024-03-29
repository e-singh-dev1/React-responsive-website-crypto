import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import './SignUp.css'
import img5 from '../../images/img-5.jpg'


export default function SignUp() 
{
  return (
    <div className='sign-up'  style={{backgroundImage:`url(${img5})`}}>
      <div>
       <h6> Sign Up</h6>
       <form>
       <input 
       type ='email'
       name='email'
       placeholder='Your email'
       className='sign-up-input'>
      </input>
      </form>
      <form>
      <input 
       type ='password'
       name='password'
       placeholder='Enter your password'
       className='sign-up-input'>
      </input>
      </form>
      <form>
      <input 
       type ='password'
       name='password'
       placeholder='Enter your password'
       className='sign-up-input'>
      </input>
      </form>
      <Link to ='/'>
      <button className='btn--outline btn--large'>
                Register 
            </button>
      </Link>
      </div>
      </div>
    );
}
