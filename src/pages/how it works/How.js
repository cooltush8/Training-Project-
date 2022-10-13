import React from 'react'
import Background from './Images/Background.png'
import TitleText from './Images/TitleText.png'
import InstallFig from './Images/InstallFig.png'
import ProcessArrow from './Images/ProcessArrow.png'
import SignUpFig from './Images/SignUpFig.png'
import FindWhatUSeekFig from './Images/FindWhatUSeekFig.png'
import BgShadow from './Images/BgShadow.png'
import BgSmallShadowEllipse from './Images/BgSmallShadowEllipse.png'
import HumanPic1 from './Images/Humanpic/HumanPic1.png'
import HumanPic2 from './Images/Humanpic/HumanPic2.png'
import HumanPic3 from './Images/Humanpic/HumanPic3.png'
import HumanPic4 from './Images/Humanpic/HumanPic4.png'
import HumanPic5 from './Images/Humanpic/HumanPic5.png'
import HumanPic6 from './Images/Humanpic/HumanPic6.png'
import HumanPic7 from './Images/Humanpic/HumanPic7.png'
import HumanPic8 from './Images/Humanpic/HumanPic8.png'
import HumanPicShadow from './Images/Humanpic/HumanPicShadow.png'

import './how.css'


const How = React.forwardRef(({},ref) => {
  return (
    <div ref={ref}>

        <div className='HowBackground'>
        <img  className='Background' src={Background}/>
    
        </div>

        

        <div className='TitleText'>
        <img  className='HowText' src={TitleText}/>
        </div>
        

        <div className='InstallFig1'>
        <img  className='InstallFig' src={InstallFig}/>

        </div>

        <div className='ProcessArrow'>
        <img  className='ProcessArrow1' src={ProcessArrow}/>
        <img  className='ProcessArrow2' src={ProcessArrow}/>

        </div>

        <div className='SignUpFig2'>
        <img  className='SignUpFig' src={SignUpFig}/>
        </div>

        <div className='FindWhatUSeekFig3'>
        <img  className='FindWhatUSeekFig' src={FindWhatUSeekFig}/>
        </div>

        <div className='BgShdw'>
        <img  className='BgShadow' src={BgShadow}/>
        </div>

        <div className='BgSmallShdw'>
        <img  className='BgSmallShadow' src={BgSmallShadowEllipse}/>
        </div>

        <div className='HumanFaces'>

        <div className='HumanFace1'>
        <img  className='HumanPic1' src={HumanPic1}/>
        </div>
        <div className='HumanFace2'>
        <img  className='HumanPic2' src={HumanPic2}/>
        </div>
        <div className='HumanFace3'>
        <img  className='HumanPic3' src={HumanPic3}/>
        </div>
        <div className='HumanFace4'>
        <img  className='HumanPic4' src={HumanPic4}/>
        </div>
        <div className='HumanFace5'>
        <img  className='HumanPic5' src={HumanPic5}/>
        </div>
        <div className='HumanFace6'>
        <img  className='HumanPic6' src={HumanPic6}/>
        </div>
        <div className='HumanFace7'>
        <img  className='HumanPic7' src={HumanPic7}/>
        </div>
        <div className='HumanFace8'>
        <img  className='HumanPic8' src={HumanPic8}/>
        </div>


        <div>
        <img  className='HumanPicShadow' src={HumanPicShadow}/>

        </div>
        </div>

        
         
            
        


        



        
        
        
        
    </div>

    
  )
}
)

export default How