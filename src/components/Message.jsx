import React from 'react'
import { useEffect } from 'react'

function Message( {response} ) {

    useEffect(() => {
        // console.log('response changed')
        // console.log(`%cmagic 8 ball says: ${response}`, 'color: purple; font-size: 20px;')

        // return() => {
        //     console.log('previous response cleaned up')
        // }
    }, [response])

  return (
    <div className='messageContainer'>
        <p className=''>{response}</p>
    </div>
  )
}

export default Message
