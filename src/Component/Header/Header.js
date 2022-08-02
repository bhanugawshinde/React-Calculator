import React, { useEffect,useRef } from "react";
import './Header.css'
function Header(props){
    const expressionRef = useRef();
    useEffect(() => {
        expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
      }, [props.expression]);

    return <div className="header">
        <div className="history custom-scroll">
        {props.history &&
          props.history?.map((item) => (
            <p key={item + "" + Math.random() * 44}>{item}</p>
          ))}
        </div><br/>
        <div ref={expressionRef} className="expression custom-scroll">
            <p>{props.expression}</p>
        </div>
            <p className="result">{props.result}</p>
    </div>;
}
export default Header;