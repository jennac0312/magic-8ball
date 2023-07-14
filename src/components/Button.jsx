import React from 'react'
import { useState } from 'react'

function Button(props) {

  return (
    <div>
        <button onClick={props.randomResponse}>Try Again</button>
        <span>Total clicks: {props.clicks}</span>
    </div>
  )
}

export default Button
