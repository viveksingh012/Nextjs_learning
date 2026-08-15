import React from 'react'
import Image from 'next/image'

const useImage = () => {
  return (
    <Image
      src="https://unsplash.com/photos/carton-of-brown-eggs-on-a-kitchen-counter-e6W48UPKijo"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    // <img src="https://media.licdn.com/dms/image/v2/D5603AQGGzIlF-k3KrQ/profile-displayphoto-crop_800_800/B56Z71zu96KYAM-/0/1782240441792?e=1788393600&v=beta&t=CsdWNS5A72TsvoBWCoh48VoXQsH0Wemf3tgah-TBPiQ" alt="" srcset="" />
  )
}

export default useImage