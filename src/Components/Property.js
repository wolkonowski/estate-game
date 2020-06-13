import css from './Property.scss';
import React from 'react';


class Property extends React.Component
{
    constructor(props)
    {
        super(props);
        this.test=0;
        this.state={
            background: 'gray',
            cx: 1000,
            cy: 410,
            num: props.num,
            sq1: {},
            sq2: {},
            sq3: {},
            sq4: {},
            sq5: {},
            level: 0
        }
    }
    drawSquare(x, y, h, w, c = "green", transform = 0, field, id) {
        var el = {};
        el.id= "house_" + field + "_" + id;
        el.x=x;
        el.y=y;
        el.height=h;
        el.width=w;
        el.fill=c;
        el.transform="rotate(" + transform + "," + this.state.cx + "," + this.state.cy + ")";
        return el;
    }
    componentDidMount()
    {
        //document.getElementById("house_1_1").innerHTML = document.getElementById("house_1_1").innerHTML;
        var sq1=this.drawSquare(970+5,40,20,20,"blue",360/20*this.state.num,this.state.num,1);
        var sq2=this.drawSquare(1000 + 5, 40, 20, 20,"blue",360/20*this.state.num,this.state.num,2);
        var sq3=this.drawSquare(970 + 5, 70, 20, 20,"blue",360/20*this.state.num,this.state.num,3);
        var sq4=this.drawSquare(1000 + 5, 70, 20, 20,"blue",360/20*this.state.num,this.state.num,4);
        var sq5=this.drawSquare(980, 45, 40, 40,"red",360/20*this.state.num,this.state.num,5);
        this.setState({sq1,sq2,sq3,sq4,sq5});
    }
    render()
    {

return (
    <g>
<rect id={this.state.sq1.id} x={this.state.sq1.x} y={this.state.sq1.y} height={this.state.sq1.height} width={this.state.sq1.width} fill={this.state.sq1.fill} transform={this.state.sq1.transform}></rect>
<rect id={this.state.sq2.id} x={this.state.sq2.x} y={this.state.sq2.y} height={this.state.sq2.height} width={this.state.sq2.width} fill={this.state.sq2.fill} transform={this.state.sq2.transform}></rect>
<rect id={this.state.sq3.id} x={this.state.sq3.x} y={this.state.sq3.y} height={this.state.sq3.height} width={this.state.sq3.width} fill={this.state.sq3.fill} transform={this.state.sq3.transform}></rect>
<rect id={this.state.sq4.id} x={this.state.sq4.x} y={this.state.sq4.y} height={this.state.sq4.height} width={this.state.sq4.width} fill={this.state.sq4.fill} transform={this.state.sq4.transform}></rect>
<rect id={this.state.sq5.id} x={this.state.sq5.x} y={this.state.sq5.y} height={this.state.sq5.height} width={this.state.sq5.width} fill={this.state.sq5.fill} transform={this.state.sq5.transform}></rect>
</g>
)
    }
}
export default Property;