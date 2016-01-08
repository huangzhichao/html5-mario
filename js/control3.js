	var mario = new Image();
	var mario2 = new Image();
	var bg = new Image();
	var num = 18;
	var num2 = 18;
	var setinterval;
	var canvas;
	var thex = 0;
	var they = 0;
	var right = false;
	var left = false;
	var up = false;
	var spece = false;
	var speed = 0;
	var a = 5;
	var upspeed = 0;
	var upa = 10;
	var durmp = 0;
	var lnum = 227;
	var flag = "right";

	var thex2 = 0;
	var they2 = 0;
	var right2 = false;
	var left2 = false;
	var up2 = false;
	var spece2 = false;
	var speed2 = 0;
	var a2 = 5;
	var upspeed2 = 0;
	var upa2 = 10;
	var durmp2 = 0;
	var lnum2 = 227;
	var flag2 = "right";

	// function addListener(eltName, evtName, funName, useCapture){
	// 	if(eltName.addEventListener){
	// 		eltName.addEventListener(evtName, funName, useCapture);
	// 	}else{
	// 		eltName.attachEvent(evtName, funName);
	// 	}
	// }

	function init(){
		var startGame = document.getElementById("start");
		var stopGame = document.getElementById("stop");
		document.onkeydown=function(event){
			var e = event || window.event || arguments.callee.caller.arguments[0];
			//alert(e.keyCode);
			if(e && e.keyCode==39){ 
				right = true;
			}
			if(e && e.keyCode==38){ 
				up = true;
			}
			if(e && e.keyCode==37){ 
				left = true;
			} 
			if(e && e.keyCode==87){ 
				up2 = true;
			}
			if(e && e.keyCode==65){ 
				left2 = true;
			} 
			if(e && e.keyCode==68){ 
				right2 = true;
			}
		};
		document.onkeyup = function(){
			var e = event || window.event || arguments.callee.caller.arguments[0];
			if(e && e.keyCode==39){ 
				right = false;
				flag = "right";
			}
			if(e && e.keyCode==38){ 
				up = false;
			}
			if(e && e.keyCode==37){ 
				left = false;
				flag = "left";
			}
			if(e && e.keyCode==87){ 
				up2 = false;
			}
			if(e && e.keyCode==65){ 
				left2 = false;
				flag2 = "left";
			} 
			if(e && e.keyCode==68){ 
				right2 = false;
				flag2 = "right";
			} 
		}
		start();
		// addListener(startGame, 'click', start, true);
		// addListener(stopGame, 'click', stop, true);
	}

	


	function start(){
		bg.src = "images/20-120Q9155247.jpg";
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,960,640);
		ctx.drawImage(bg,0,0,1920,1280,0,0,960,640);
		setInterval('action()',150);
	}

	function stop(fx){
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,960,640);
		ctx.drawImage(bg,0,0,1920,1280,0,0,960,640);
		if(fx=="right")
			ctx.drawImage(mario,18,0,50,70,0+thex,480-they,50,70);
		else
			ctx.drawImage(mario,327,0,50,70,0+thex,480-they,50,70);
	}
	// function newstop(){
	// 	while(speed>0){
	// 		draw(-10);
	// 	}
	// 	while(speed<0){
	// 		draw(10);
	// 	}
	// }

	function action(){
		mario.src = "images/a.png";
		if(right||left||up){
			if(left){
				if(num<199)
					num = lnum;
				stop("left");
			}	
			else if(right){
				if(num>199)
					num = 18;
				stop("right");
			}
			if(left)
				draw(-1*a);
			else if(right)
				draw(a);
			else
				draw(0);
		}else if(speed!=0||they!=0){
			if(speed>0){
				draw(-1*a);
			}
			else if(speed<0){
				draw(a);
			}
			draw(0);
		}else{
			stop(flag);
		}
	}

	function draw(a){
		
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,960,640);
		if(up&&!durmp){
			durmp++;
			upspeed = 40;
			up = false;
		}
		they += upspeed;
		upspeed -= upa;
		if(they<0){
			upspeed = 0;
			they = 0;
			durmp = 0;
		}
		else if(upspeed<-10&&thex<560&&thex>480&&they<=70)
		{
			upspeed = 0;
			they = 70;
			durmp = 0;				
		}
		else if(upspeed<-10&&thex<920&&thex>820&&they<=100)
		{
			upspeed = 0;
			they = 100;
			durmp = 0;				
		}
		else if(upspeed<=0&&((thex<400&&thex>200)||(thex>60&&thex<130))&&they<=135&&they>100)
		{
			upspeed = 0;
			they = 135;
			durmp = 0;				
		}
		else if(upspeed>0&&((thex<400&&thex>200)||(thex>60&&thex<130))&&they<=50)
		{
			upspeed = -20;
			they = 50;			
		}
		else if(upspeed>0&&thex<335&&thex>270&&they<=185)
		{
			upspeed = -20;
			they = 185;
		}
		// else if(they==0&&thex<560&&thex>480)
		// {
		// 	thex = 480;			
		// }
		ctx.drawImage(bg,0,0,1920,1280,0,0,960,640);
		ctx.drawImage(mario,num,0,50,70,0+thex,480-they,50,70);
		num = num+50;
		speed +=a;
		if(speed>20)
			speed = 20;
		if(speed<-20)
			speed = -20;
		if(!(they<70&&speed>0&&thex<500&&thex>468)&&!(they<70&&speed<0&&thex<588&&thex>560)&&!(they<100&&speed>0&&thex<840&&thex>800)&&!(they<100&&speed<0&&thex<940&&thex>880)&&!(they<135&&they>50&&speed<0&&thex<425&&thex>370)&&!(they<135&&they>50&&speed<0&&thex<145&&thex>90)&&!(they<135&&they>50&&speed>0&&thex<230&&thex>190)&&!(they<135&&they>50&&speed>0&&thex<100&&thex>50)&&!(they<270&&they>185&&speed>0&&thex<300&&thex>250)&&!(they<270&&they>185&&speed<0&&thex<355&&thex>320))
		thex += speed;
		if(thex<-50)
			thex = 960;
		if(thex>960)
			thex=-50;
		if(num>119&&num<169)
			num = 18;
		else if(num>350){
			num = lnum;
		up = false;
		}
		if(!left&&!right&&!up&&speed==0)
			stop(flag);	
	}

	window.onload = function(){
		canvas = document.getElementById('canvas');
		init();
		//start(0);
		
	}