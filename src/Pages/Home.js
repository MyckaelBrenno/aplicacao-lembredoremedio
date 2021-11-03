import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import React, { useEffect, useState, useRef } from 'react'
import '../App.css'

function Home() {
  const [data, setData] = useState([])
  const carousel = useRef(null)

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then(response => response.json())
      .then(setData)
  }, [])

  const handleLeftClick = e => {
    e.preventDefault()
    //console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = e => {
    e.preventDefault()
    //console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  if (!data || !data.length) return null

  return (
    <div className="body">
      <div className="container">
        <br />
        <h2 className="h2-home">Agendar para smartphone</h2>
        <span className="imgLembretes">
          <FormControlLabel control={<Radio />} />
          <img src="/static/images/appldr.png" alt="Lembretes" />
          <br />
          <br />
        </span>
        <h2 className="h2-home">Agendar para celular comum</h2>
        <div className="carousel" ref={carousel}>
          {data.map(item => {
            const { id, name, price, oldPrice, image } = item
            return (
              <div className="item" key={id}>
                <FormControlLabel control={<Radio />} />
                <div className="image">
                  <img src={image} alt={name} />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="OldPrice">{oldPrice}</span>
                  <button type="submit" className="price">
                    {price}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img
              src="/static/images/216151_right_chevron_icon.png"
              alt="Scroll Left"
            />
          </button>
          <button onClick={handleRightClick}>
            <img
              src="/static/images/216151_right_chevron_icon.png"
              alt="Scroll Right"
            />
          </button>
        </div>
        <h2 className="h2-home-1">Escolha o remédio</h2>
        <br />
      </div>
    </div>
  )
}

export default Home
