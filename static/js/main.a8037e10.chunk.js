(this.webpackJsonpapka=this.webpackJsonpapka||[]).push([[0],[,,,,,,,function(t,e,s){t.exports=s(16)},,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),i=s.n(a),n=s(6),r=s.n(n),h=(s(12),s(1)),o=s(2),l=s(4),c=s(3),u=(s(13),function(t){Object(l.a)(s,t);var e=Object(c.a)(s);function s(t){var a;return Object(h.a)(this,s),(a=e.call(this,t)).test=0,a.state={background:"gray",cx:1e3,cy:410,num:t.num,sq1:{},sq2:{},sq3:{},sq4:{},sq5:{},level:0},a}return Object(o.a)(s,[{key:"drawSquare",value:function(t,e,s,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"green",n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,r=arguments.length>6?arguments[6]:void 0,h=arguments.length>7?arguments[7]:void 0,o={};return o.id="house_"+r+"_"+h,o.x=t,o.y=e,o.height=s,o.width=a,o.fill=i,o.transform="rotate("+n+","+this.state.cx+","+this.state.cy+")",o}},{key:"componentDidMount",value:function(){var t=this.drawSquare(975,40,20,20,"blue",18*this.state.num,this.state.num,1),e=this.drawSquare(1005,40,20,20,"blue",18*this.state.num,this.state.num,2),s=this.drawSquare(975,70,20,20,"blue",18*this.state.num,this.state.num,3),a=this.drawSquare(1005,70,20,20,"blue",18*this.state.num,this.state.num,4),i=this.drawSquare(980,45,40,40,"red",18*this.state.num,this.state.num,5);this.setState({sq1:t,sq2:e,sq3:s,sq4:a,sq5:i})}},{key:"render",value:function(){return i.a.createElement("g",null,i.a.createElement("rect",{id:this.state.sq1.id,x:this.state.sq1.x,y:this.state.sq1.y,height:this.state.sq1.height,width:this.state.sq1.width,fill:this.state.sq1.fill,transform:this.state.sq1.transform}),i.a.createElement("rect",{id:this.state.sq2.id,x:this.state.sq2.x,y:this.state.sq2.y,height:this.state.sq2.height,width:this.state.sq2.width,fill:this.state.sq2.fill,transform:this.state.sq2.transform}),i.a.createElement("rect",{id:this.state.sq3.id,x:this.state.sq3.x,y:this.state.sq3.y,height:this.state.sq3.height,width:this.state.sq3.width,fill:this.state.sq3.fill,transform:this.state.sq3.transform}),i.a.createElement("rect",{id:this.state.sq4.id,x:this.state.sq4.x,y:this.state.sq4.y,height:this.state.sq4.height,width:this.state.sq4.width,fill:this.state.sq4.fill,transform:this.state.sq4.transform}),i.a.createElement("rect",{id:this.state.sq5.id,x:this.state.sq5.x,y:this.state.sq5.y,height:this.state.sq5.height,width:this.state.sq5.width,fill:this.state.sq5.fill,transform:this.state.sq5.transform}))}}]),s}(i.a.Component)),d=(s(14),function(t){Object(l.a)(s,t);var e=Object(c.a)(s);function s(t){var a;return Object(h.a)(this,s),(a=e.call(this,t)).test=0,a.state={background:"gray",cx2:1e3,cy2:410,test:0},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor=this.state.background}},{key:"render",value:function(){for(var t=[],e=0;e<20;e++)t.push(i.a.createElement(u,{key:e,num:e}));return i.a.createElement("div",null,i.a.createElement("svg",{className:"svg-arrow",id:"canvas",width:"1500",height:"820"},i.a.createElement("rect",{id:"background",width:"100%",height:"100%",fill:"transparent"}),t),i.a.createElement("div",null,'transform="rotate(100,1000,410)"'))}}]),s}(i.a.Component));s(15);var m=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"This is a client page"),i.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.a8037e10.chunk.js.map