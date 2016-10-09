	var mario = new Image();
	var num = 18;
	var setinterval;
	var canvas ;
	var thex = 0;
	var they = 0;
	var right = false;
	var left = false;
	var up = false;
	var spece = false;
	var speed = 0;

	function addListener(eltName, evtName, funName, useCapture){
		if(eltName.addEventListener){
			eltName.addEventListener(evtName, funName, useCapture);
		}else{
			eltName.attachEvent(evtName, funName);
		}
	}

	function init(){
		var startGame = document.getElementById("start");
		var stopGame = document.getElementById("stop");
		document.onkeydown=function(event){
			var e = event || window.event || arguments.callee.caller.arguments[0];
			if(e && e.keyCode==39){ // 按 Esc 
			//要做的事情
				right = true;
				left = false;
				start(10);
			}
			if(e && e.keyCode==37){ // 按 F2 
			//要做的事情
				left = true;
				right = false;
				start(10);
			} 
		};
		document.onkeyup = function(){
			right=false;
			left=false;
			while(speed!=0)
				newstop();
		}
		addListener(startGame, 'click', start, true);
		addListener(stopGame, 'click', stop, true);
	}

	function start(speed){
		if(right){
			mario.src = "images/0cfe6102a27191123315358b2b125452.png";
			stop();
			//setinterval = setInterval('draw('+speed+')',150);
			draw(speed);
		}
		if(left){
			mario.src = "images/img2.png";
			stop();
			setinterval = setInterval('draw('+speed+')',150);
		}
	}

	function stop(){
		clearInterval(setinterval);
	}
	function newstop(){
		//alert(speed);
		while(speed>0){
			draw(-10);
		}
		while(speed<0){
			draw(10);
		}
	}

	function draw(a){
		//alert("x");
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,600,600);
		ctx.drawImage(mario,num,0,50,70,0+thex,200,50,70);
		num = num+50;
		speed +=a;
		if(speed>20)
			speed = 20;
		if(speed<-20)
			speed = -20;
		if(right)
			thex += speed;
		if(left)
			thex -= speed;
		if(thex<-50)
			thex = 300;
		if(thex>300)
			thex=-50;
		if(num>119)
			num = 18;
	}

	window.onload = function(){
		canvas = document.getElementById('canvas');
		init();
		start(0);
	}