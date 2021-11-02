import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UIButton from '../components/Button/Button'
import StoreContext from '../components/Store/Context'
import '../App.css'

//import './Login.css';

function initialState() {
  return { user: '', password: '' }
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '12345' }
  }
  return { error: 'Usuário ou senha inválido' }
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState)
  const { setToken } = useContext(StoreContext)
  const history = useHistory()

  function onChange(event) {
    const { value, name } = event.target
    setValues({
      ...values,
      [name]: value
    })
  }

  function onSubmit(event) {
    event.preventDefault()

    const { token } = login(values)

    if (token) {
      setToken(token)
      console.log({ token: token })
      return history.push('/')
    }

    setValues(initialState)
  }
  return (
    <>
      <div className="user-login">
        <form onSubmit={onSubmit} className="login">
          <div className="user-login__form-control">
            <label htmlFor="email"></label>
            <input
              id="user"
              type="text"
              name="user"
              placeholder="Informe seu usuário"
              onChange={onChange}
              value={values.user}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Informe sua senha"
              onChange={onChange}
              value={values.password}
            />
          </div>
          <UIButton
            type="submit"
            theme="contained-green"
            className="user-login__submit-button"
            rounded
          >
            Enviar Lembrete
          </UIButton>
        </form>
      </div>
    </>
  )
}

export default UserLogin
