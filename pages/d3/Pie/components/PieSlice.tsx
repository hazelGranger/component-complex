type PieSliceProps = {
    d: any;
    textTransform: string;
    name: string;
    color: string;
}

const PieSlice = ({d, textTransform, name, color} : PieSliceProps) =>
{
    return (
        <g>
            <path fill={color} d={d}></path>
            <text fill="white" transform={textTransform}>
                <tspan x="0" fontSize="26" fontWeight="bold">{name}</tspan>
            </text>
        </g>
    )
}

export default PieSlice;