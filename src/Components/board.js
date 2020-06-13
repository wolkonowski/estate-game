const background= 'gray';
const cx= 1000;
const cy= 410;
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
        "L", x, y,
        "L", start.x, start.y
    ].join(" ");

    return d;
}

function drawCircle(x, y, r, color) {
    var el = document.createElement("circle");
    el.setAttribute("fill", color);
    el.setAttribute("cx", x);
    el.setAttribute("cy", y);
    el.setAttribute("r", r)
    el.setAttribute("stroke", "black");
    el.setAttribute("stroke-width", 3);
    document.getElementById("canvas").appendChild(el);
}

function drawText(x, y, field, txt, size, transform = 0) {
    var el = document.createElement("text");
    el.setAttribute("fill", "black");
    //el.setAttribute("id", "txt" + field);
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    el.setAttribute("dominant-baseline", "middle");
    el.setAttribute("text-anchor", "middle");
    el.setAttribute("font-size", size);
    //el.setAttribute("height", h);
    //el.setAttribute("width", w);
    el.innerHTML = txt;
    el.setAttribute("transform", "rotate(" + transform + "," + cx + "," + cy + ")");
    document.getElementById("canvas").appendChild(el);
}

function drawInside() {
    var el = document.createElement("circle");
    el.setAttribute("id", "fill");
    el.setAttribute("cx", cx);
    el.setAttribute("cy", cy);
    el.setAttribute("r", "300");
    el.setAttribute("stroke", "#446688");
    el.setAttribute("width", "20");
    el.setAttribute("fill", background);
    document.getElementById("canvas").appendChild(el);
}

function drawSquare(x, y, h, w, c = "green", transform = 0, field, id) {
    var el = document.createElement("rect");
    el.setAttribute("id", "house_" + field + "_" + id);
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    el.setAttribute("height", h);
    el.setAttribute("width", w);
    el.setAttribute("fill", c);
    el.setAttribute("transform", "rotate(" + transform + "," + cx + "," + cy + ")");
    document.getElementById("canvas").appendChild(el);
}
export default {polarToCartesian,describeArc,drawCircle,drawInside,drawSquare,drawText}