import { Link } from "react-router-dom"
export default function Login() {
    return (
      <div>
        <section className='form-parent'>
  <form className='form'>
  
  <h1>Login to fitness </h1>
 
  <input className='inp ' type="email"     placeholder='enter email'    name="email"/>
  <input className='inp '  type="password" placeholder='enter password' name="password"/>
  
  
  <button className='btn'>Login</button>
  
  <p> Dont have a account ? <Link to="/register"> Register now</Link></p>
  </form>
  
  
        </section>
      </div>
    )
  }
