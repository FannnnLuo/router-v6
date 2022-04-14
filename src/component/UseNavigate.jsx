import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UseNavigate() {
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => navigate('/about')}>To About</button><br/>
            <button onClick={() => navigate('/about', { replace: true })}>Replace To About</button><br/>
            <button onClick={() => navigate(1)}>Go forward</button><br/>
            <button onClick={() => navigate(-1)}>Go backward</button>
        </>
    )
}
