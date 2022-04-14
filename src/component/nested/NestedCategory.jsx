import React from 'react'
import { useParams } from 'react-router-dom'

export default function NestedCategory() {
    let params = useParams()
    return (
        <>user search for { params.category}</>
    )
}
