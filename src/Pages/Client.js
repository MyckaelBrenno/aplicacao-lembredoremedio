import React, { useRef, useEffect, useState } from 'react'
import { Form } from '@unform/web'
import { Scope } from '@unform/core'
import * as Yup from 'yup'
import '../App.css'
import Home from '../Pages/Home'
import { RadioGroup } from '@material-ui/core'

import Input from '../components/Form/Input'

function Client() {
  const formRef = useRef(null)

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório!'),
        phone: Yup.string()
          .required('O número é obrigatório!')
          .min(11, 'Número inválido!')
        // address: Yup.object().shape({
        //   city: Yup.string()
        //     .min(3, 'No mínimo 3 caracteres')
        //     .required('A cidade é obrigatória')
        // })
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
        phone: '(81)99168-0523',
        name: 'Myckael Brenno'
        // address: {
        //   city: 'João Pessoa'
        // }
      })
    }, 2000)
  }, [])
  return (
    <div className="client">
      <Form className="form-client" ref={formRef} onSubmit={handleSubmit}>
        <br />
        <br />
        {/*Componentes Inputs (ou seja, função Input sendo referenciada como tag)*/}
        <h1 className="h1-client">NOVO LEMBRETE - Agendar</h1>
        <br />
        <br />
        <div className="borderAgendar-client">
          <label className="label-client">
            *Celular do cliente:
            <Input
              className="phone-client"
              name="phone"
              type="tel"
              placeholder="(83)"
            />
          </label>
          <label className="label-client">
            *Nome cliente:
            <Input label="name" className="name-client" name="name" />
          </label>
          <label className="label-client">
            Atendente:
            <Input className="atend-client" name="atendente" />
          </label>
        </div>
        <Home />
        <div className="borderRemedio-client">
          <label className="label-client">
            *Cód. Barras:
            <Input className="codBarra-client" name="codBarras" />
          </label>
          <label className="label-client">
            Buscar pelo nome:
            <Input className="search-client" type="search" name="search" />
          </label>
          <br />
          <label className="label-client">
            Comprimidos por caixa:
            <Input
              className="compCaixa-client"
              type="number"
              name="comprimidos"
            />
          </label>
          <label className="label-client">
            *Peridiocidade:
            <select className="select-client">
              <Input name="selected" />
              <option value="diaria">Diária</option>
              <option value="semanal">Semanal</option>
              <option value="semanal">Quinzenal</option>
              <option value="semanal">Mensal</option>
              <option selected value="selecione">
                Selecione a periodicidade
              </option>
            </select>
          </label>
          <label className="label-client">
            *Dose:
            <select className="select-client-1">
              <Input name="selected" />
              <option value="diaria">1 por dose</option>
              <option value="semanal">2 por dose</option>
              <option value="semanal">3 por dose</option>
              <option value="semanal">4 por dose</option>
              <option selected value="selecione">
                Num. de comprimidos
              </option>
            </select>
          </label>
          <label className="label-client">
            *Caixas:
            <select className="select-client-2">
              <Input name="selected" />
              <option value="diaria">1 caixa</option>
              <option value="semanal">2 caixas</option>
              <option value="semanal">3 caixas</option>
              <option value="semanal">4 caixas</option>
              <option selected value="selecione">
                Num. de comprimidos
              </option>
            </select>
          </label>
        </div>
        {/* <Scope path="address">
          <Input name="city" />
          <Input name="number" />
        </Scope> */}

        <hr />
        <br />
        <button className="button-client" type="submit">
          Agendar
        </button>
        <br />
        <br />
      </Form>
    </div>
  )
}

export default Client
