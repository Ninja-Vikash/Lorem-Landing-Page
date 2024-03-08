import React from 'react'
import github from "../assets/github.svg"
import linkedin from '../assets/linkedin.svg'

const SocialMedia = () => {
  return (
    <div className="flex gap-4">
        <a href="/">
          <img className="h-6" src={github} height={10} />
        </a>
        <a href="/">
          <img className="h-6" src={linkedin} height={10} />
        </a>
      </div>
  )
}

export default SocialMedia
