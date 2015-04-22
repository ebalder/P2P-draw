
function _initCanvas(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	canvas.onmousedown = press;
	ctx.mozImageSmoothingEnabled = true;
	ctx.strokeStyle = "rgba(0,0,0,1)";
	ctx.lineWidth = 1;
	prevx = 0, prevy = 0;

}

function press(ev){
	var x = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - canvas.offsetLeft;
	var y = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop - canvas.offsetTop;
	ev.target.onmousemove = drag;
	document.onmouseup = release;

	ctx.beginPath();
	prevx = x;
	prevy = y;
	// ctx.moveTo(x,y);
	// ctx.lineTo(x, y);
	// ctx.stroke();
    if(typeof(conn) == 'object' && conn.open){
    	conn.send({ acc : 'press', x : x, y : y});
    }

	function drag(ev){
		var x = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - canvas.offsetLeft;
		var y = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop - canvas.offsetTop;
		if(x != prevx || y != prevy){
			ctx.beginPath();
			ctx.moveTo(prevx, prevy);
			ctx.lineTo(x, y);
			//console.log(x, y);
	   		ctx.stroke();
	  		// ctx.putImageData(brush, 0, 0, x-ctx.lineWidth/2, y-ctx.lineWidth/2, ctx.lineWidth, ctx.lineWidth);
		    // console.log(x, y, prevx, prevy);
		    prevx = x;
		    prevy = y;
		    if(typeof(conn) == 'object' && conn.open){
		    	conn.send({ acc : 'stroke', x : x, y : y});
		    }
		}
	}
	function release(ev){
		ev.target.onmousemove = null;
		document.onmouseup = null;
	}
}


