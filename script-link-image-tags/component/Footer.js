import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <span>vivek singh</span>
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
    </div>
  )
}

export default Footer