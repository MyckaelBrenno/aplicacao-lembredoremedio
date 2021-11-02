import React, { useRef, useEffect, useState } from 'react'
import { Form } from '@unform/web'
import { Scope } from '@unform/core'
import * as Yup from 'yup'
import '../App.css'
import { Button, FormLabel } from '@material-ui/core'

import Input from '../components/Form/Input'

function Client() {
  const formRef = useRef(null)

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Digita um e-mail válido')
          .required('o e-mail é obrigatório'),
        address: Yup.object().shape({
          city: Yup.string()
            .min(3, 'No mínimo 3 caracteres')
            .required('A cidade é obrigatória')
        })
      })

      await schema.validate(data, {
        abortEarly: false
      })

      console.log(data)

      reset() //Limpa todos os campos preenchidos após o submit
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {}

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })
        formRef.current.setErrors(errorMessages)
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      formRef.current.setData({
        name: 'Myckael Brenno',
        email: 'myckaelbrennno@gmail.com',
        address: {
          city: 'João Pessoa'
        }
      })
    }, 2000)
  }, [])
  return (
    <div className="client">
      <Form ref={formRef} onSubmit={handleSubmit}>
        {/*Componentes Inputs (ou seja, função Input sendo referenciada como tag)*/}
        <FormLabel>
          Nome
          <Input name="name" />
        </FormLabel>
        <Input type="number" label="name" name="phone" />
        <Input type="email" name="email" />
        <Input type="password" name="password" />
        <Input type="textarea" name="descricao" />
        <Scope path="address">
          <Input name="city" />
          <Input name="number" />
        </Scope>
        <button type="submit">Enviar</button>
      </Form>
    </div>
  )
}

export default Client
