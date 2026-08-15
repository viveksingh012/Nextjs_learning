import Script from 'next/script'
import React from 'react'

const usescript = () => {
  return (
    <Script>
      {`alert("hello you are visiting script component in next js")`}
    </Script>
  )
}

export default usescript