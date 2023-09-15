import type { ReactNode } from 'react'
import "./Underline.css"

interface props {
    className?: string;
    initialWidth?: string;
    children: ReactNode;
}
function Underline({className, initialWidth = "50%", children}: props) {
    return (
        <span className={`underline-container ${className}`} style={{backgroundSize: `${initialWidth} 2px`}}>
            {children}
        </span>
    );
}

export default Underline;