import React from 'react'
import { useEffect } from 'react'

function Message({response}) {

    useEffect(() => {
        console.log('response changed')
        console.log(`%cmagic 8 ball says: ${response}`, 'color: purple; font-size: 20px;')

        return() => {
            console.log('previous response cleaned up')
        }
    }, [response])

  return (
    <p>{response}</p>
  )
}

export default Message
