import { useState } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
export default function Register() {

  const[userDetails,setUserDetails]=useState({
    
  })
  return (
   
    <div>
      <section className='container'>
<form className='form'>

<h1>start your fitness </h1>
<input className='inp '  type="text"     placeholder='enter name'     name="name"/>
<input className='inp ' type="email"     placeholder='enter email'    name="email"/>
<input className='inp '  type="password" placeholder='enter password' name="password"/>
<input className='inp'  type="number"    placeholder='enter age'      name="age"/>

<button className='btn'>join</button>

<p>already registered? <Link to="/Login">login</Link> </p>
</form>


      </section>
    </div>
  )
}
