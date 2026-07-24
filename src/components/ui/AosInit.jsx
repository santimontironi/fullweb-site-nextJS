"use client"

import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const AosInit = () => {

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: false,
            easing: 'ease-out',
            offset: 100
        })
    }, [])

    return null
}

export default AosInit
