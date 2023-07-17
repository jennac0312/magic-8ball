import React from 'react'

function List( {response, key} ) {
  return (
    <li key={key}>
      {response}
    </li>
  )
}

export default List
