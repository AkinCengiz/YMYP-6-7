import React from 'react'
import ReactDOM from "react-dom"
import "./OffCanvas.css";

const Backdrop = ({hideCartHandle}) => {
    return (
    <div className='backdrop' onClick={hideCartHandle}/>
  
    )
}

const OffCanvasOverlay = ({children}) => {
    return(
        <div className='offcanvas'>
            <div className="content">
                {children}
            </div>
        </div>
    )
}
/**
 * 
 * const liElement = document.createElement("li"); 
 * const aElement = document.createElement("a");
 * li.appendChild(aElement);
 * 
 * <div id=overlays>
    * <Backdrop/>
    * <OffCanvasOverlay/>
 * </div>
 */

const OffCanvas = ({children,hideCartHandle}) => {
    const portal = document.getElementById("overlays");
  return (
    <>
    {
        ReactDOM.createPortal(<Backdrop hideCartHandle={hideCartHandle} />,portal)
    },
    {
        ReactDOM.createPortal(<OffCanvasOverlay>{children}</OffCanvasOverlay>,portal)
    }
    
    </>
  )
}

export default OffCanvas