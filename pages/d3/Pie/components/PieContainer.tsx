import { CSSProperties, ReactNode } from "react";

type PieContainerProps = {
    viewBox: string; 
    style?: CSSProperties; 
    textAnchor: string; 
    fontFamily: string; 
    children: ReactNode
}


const PieContainer =  ({ viewBox, style, textAnchor, fontFamily, children}: PieContainerProps) =>
{
    return (
        <svg viewBox={viewBox} style={style} textAnchor={textAnchor} fontFamily={fontFamily}>
            {
                children
            }
        </svg>
    )
}


export default PieContainer