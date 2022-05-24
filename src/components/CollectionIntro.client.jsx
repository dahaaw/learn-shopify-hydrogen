import React from 'react'

export default function CollectionIntro({
    description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui inventore neque unde impedit eum consequatur nam vitae veniam alias cum. Temporibus architecto maiores porro esse debitis quibusdam vero, vitae hic!`
}) {
    
  return (
    <div className="text-center mb-5">
        <h5 className="classic-intro-text__text">{description}</h5>        
    </div>
  )
}