import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <span>vivek singh</span>
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
        <Link href="/usescript">usescript</Link>
        <Link href="/useImage">useimage</Link>
    </nav>
  );
};
export default Navbar
