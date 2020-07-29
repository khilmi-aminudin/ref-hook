import userEvent from '@testing-library/user-event'
import React,{useRef,useEffect} from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(()=>{
        //focusing on input element
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input ref={inputRef} type='text'/>
        </div>
    )
}

export default FocusInput
