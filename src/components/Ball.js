import React,{useState} from 'react';

const Ball = ({url, translate, onHover, animationPlay}) => {

    const [selfHover, setSelfHover] = useState(false);

    const handleSelfHover = () => {
        setSelfHover(!selfHover);
    }
    
  return (
    <div className="ball-initial-pos">

        <div className="rotation" style={{animationPlayState: animationPlay}}>

            <div className="scaling"
                style={ {
                    animationDelay: `-${Math.round(Math.random() * 1000)}ms` } }>

                <div className="ball" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    style={ {transform: 
                            `translateX(${translate[0]}px)
                            translateY(${translate[1]}px)` } }>

                    <div className="fix-rotate" style={{animationPlayState: animationPlay}}>
                        <img src={url} alt="" />
                    </div>
                    
                </div>
                    
            </div>

        </div>
        
    </div>

  );
}

export default Ball;