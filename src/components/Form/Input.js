import React, { Children, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { AiOutlineFontSize } from 'react-icons/ai'

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <div>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && (
        <span>
          <h6
            className="styleInput"
            style={
              ({ color: '#f00' },
              { width: '100%' },
              { fontSize: '30px' },
              { backgroundColor: 'orange' })
            }
          >
            {error}
          </h6>
        </span>
      )}
    </div>
  )
}
