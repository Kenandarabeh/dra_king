import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import AuthContext from '../context/AuthProvider'
import axios from '../api/axios'
import '../asset/login.css'

const LOGIN_URL = '/auth'

const Login = () => {
  const { setAuth} = useContext(AuthContext)
    const errRef = useRef()
    const [user, setUser]= useState('')
    const [pwd, setPwd]= useState('')
    const [errMsg, setErrMsg]= useState('')
    const [sucess, setSucess]= useState(false)

    useEffect(() => {
      setErrMsg('')
    },[user, pwd])


    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(user, pwd)
      setUser('')
      setPwd('')
      setSucess(true)
    }



  return (
    <>
    {sucess ? (
      <section>
        <h2>Login Successful</h2>
        <br/>
        <p>
          <a href="/">Home</a>
        </p>
      </section>
    ): (
    <div className='page'>
      <div className='cover'>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" style={{ marginLeft:"40px"}}>Username :</label>
        <input 
          type="text" 
          id="username" 
          autoComplete="off"
          onChange={(e) =>setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor="password" className='text' style={{ marginLeft:"40px"}}>Password :</label>
        <input 
          type="password" 
          id="password" 
          onChange={(e) =>setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button className="btn btn-success">Sign In</button>
      </form>
    </div>
    </div>
    )}
    </>
  )
}

export default Login