// create a component
// create a state variable
// display the value
// create a button
// onclick of that button increase the value

// create a useeffect and console log "page loaded" on mount
// create another useeffect and console log "state changed" every time state changes
// create another useeffect and increase the state value by 5 on mount

import { useState, React } from 'react'
import { useEffect } from 'react'


export default function about() {
    const [state, setState] = useState(1)

    useEffect(() => {
        console.log('page loaded')

    }, [])
    useEffect(() => {
        console.log('state changed')
    }, [state])

    useEffect(() => {
        setState(5)

    }, [])





    return (
        <>
            <div>about {state}</div>
        </>

    )
}