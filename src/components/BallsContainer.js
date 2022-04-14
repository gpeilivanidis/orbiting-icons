import React,{useState} from 'react';
import Ball from './Ball';


const BallsContainer = ({images}) => {

    const [hover,setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    }

    const balls = images.map( (url, i) => {
        /* 
        ** calc the angle between images in rad
        ** insetX and insetY are the coords of
        ** each image on the circle
        */

        // radius in px
        const R = 200;
        
        // in rad
        const angle = ((2 * Math.PI) / images.length) * i;
        // in rad
        const angleSin = Math.sin(angle);
        // in rad
        const angleCos = Math.cos(angle);
        
        // inset-inline || translateX
        const insetX = angleCos * R;
        // inset-block || translateY
        const insetY = angleSin * R;
        
        return <Ball
         url={url}
         key={i}
         translate={[insetX, insetY]}
         onHover={handleHover}
         animationPlay={hover ? 'paused' : 'running'} />
    })
    
  return (
    <div className="balls-container">

        {balls}
        
    </div>
  );
}

export default BallsContainer;