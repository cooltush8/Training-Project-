import React from 'react'
import Product_Img from './Product_Img.png'
import Page1YELLOWRectangle from './Page1YELLOWRectangle.png'
import Page1YELLOWShadow from './Page1YELLOWShadow.png'
import FinallyText from './FinallyText.png'
import BatchText2 from './BatchText2.png'
import YellowPageSmallRectangle from './YellowPageSmallRectangle.png'

import "./product.css"

const Product = React.forwardRef(({},ref) => {
  return (
    <div ref={ref} className='OuterPlain'>
      <div className='WholePlain'>
      <div className="Product">
      <img  className='Product_img' src={Product_Img}/>
      </div>
      

      <div>
      <img  className='Page1YELLOWRectangle' src={Page1YELLOWRectangle}/>
      </div>

      <div>
      <img  className='Page1YELLOWShadow' src={Page1YELLOWShadow}/>
      </div>
      </div>

      

      <div>
      <img  className='Text' src={FinallyText}/>
      </div>

      <div>
      <img  className='Text2' src={BatchText2}/>
      </div>

      <div>
        <button>
      <img  className='Button' src={YellowPageSmallRectangle}/>
      </button>
      </div>


      <div className='OnButtonText'>
        <p>See how it works</p>
      {/* <img  className='Text2' src={BatchText2}/> */}
      </div>
      




     

    </div>

  )
}
)


export default Product