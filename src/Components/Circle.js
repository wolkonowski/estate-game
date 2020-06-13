import React from 'react';
import Element from './Property';
import css from './Circle.scss'
class Circle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.test=0;
        this.state={
            background: 'gray',
            cx2: 1000,
            cy2: 410,
            test:0
        }
    }
    
    componentDidMount()
    {
        document.body.style.backgroundColor = this.state.background;
        //document.getElementById("canvas").innerHTML = document.getElementById("canvas").innerHTML;
    }
    
    render()
    {
const elems=[];
for(var i=0;i<20;i++)
elems.push(<Element key={i} num={i}></Element>)
return (
<div>
<svg className="svg-arrow" id="canvas" width="1500" height="820">
<rect id="background" width="100%" height="100%" fill="transparent" />
{elems}
</svg>
<div>transform="rotate(100,1000,410)"</div>
</div>
)
}
}
export default Circle;