	var bg = new Image();
	var canvas;
	var mogu = new Image();
	var moguTypePosition = [[0,0],[0,0],[0,0],[0,0]];
	var moguLength=0;
	var a = 5;
	var upa = 10;
	var Mario={  
		"img":new Image(),
		"num":18,
		"thex":0,
		"they":0,
		"right":false,
		"left":false,
		"up":false,
		"spece":false,
		"speed":0,
		"a":5,
		"upspeed":0,
		"upa":5,
		"durmp":0,
		"lnum":227,
		"flag":"right",
		"statu":0,
		"fat":50,
		"tall":70
	};  
	

	// function addListener(eltName, evtName, funName, useCapture){
	// 	if(eltName.addEventListener){
	// 		eltName.addEventListener(evtName, funName, useCapture);
	// 	}else{
	// 		eltName.attachEvent(evtName, funName);
	// 	}
	// }

	function init(){
		document.onkeydown=function(event){
			var e = event || window.event || arguments.callee.caller.arguments[0];
			//alert(e.keyCode);
			if(e && e.keyCode==39){ 
				Mario.right = true;
			}
			if(e && e.keyCode==38){ 
				Mario.up = true;
			}
			if(e && e.keyCode==37){ 
				Mario.left = true;
			} 
			// if(e && e.keyCode==87){ 
			// 	up2 = true;
			// }
			// if(e && e.keyCode==65){ 
			// 	left2 = true;
			// } 
			// if(e && e.keyCode==68){ 
			// 	right2 = true;
			// }
		};
		document.onkeyup = function(){
			var e = event || window.event || arguments.callee.caller.arguments[0];
			if(e && e.keyCode==39){ 
				Mario.right = false;
				Mario.flag = "right";
			}
			if(e && e.keyCode==38){ 
				Mario.up = false;
			}
			if(e && e.keyCode==37){ 
				Mario.left = false;
				Mario.flag = "left";
			}
			// if(e && e.keyCode==87){ 
			// 	up2 = false;
			// }
			// if(e && e.keyCode==65){ 
			// 	left2 = false;
			// 	flag2 = "left";
			// } 
			// if(e && e.keyCode==68){ 
			// 	right2 = false;
			// 	flag2 = "right";
			// } 
		}
		start();
		// addListener(startGame, 'click', start, true);
		// addListener(stopGame, 'click', stop, true);
	}

	


	function start(){
		bg.src = "images/20-120Q9155247.jpg";
		mogu.src = "images/mogu.png";
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,960,640);
		ctx.drawImage(bg,0,0,1920,1280,0,0,960,640);
		setInterval('action()',150);
	}

	function stop(fx,obj){
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,960,640);
		ctx.drawImage(bg,0,0,1920,1280,0,0,960,640);
		if(fx=="right"){
			
			ctx.drawImage(obj.img,18,0,50,70,0+obj.thex,550-obj.they-obj.tall,obj.fat,obj.tall);
			if(moguTypePosition[0][0]){
				ctx.drawImage(mogu,0,0,63,67,107,375,35,35);
			}
			if(moguTypePosition[1][0]){
				ctx.drawImage(mogu,0,0,63,67,278,375,35,35);
			}
			if(moguTypePosition[2][0]){
				ctx.drawImage(mogu,0,0,63,67,346,375,35,35);
			}
			if(moguTypePosition[3][0]){
				ctx.drawImage(mogu,0,0,63,67,311,238,35,35);
			}
		}
		else{
			ctx.drawImage(obj.img,327,0,50,70,0+obj.thex,550-obj.they-obj.tall,obj.fat,obj.tall);
			if(moguTypePosition[0][0]){
				ctx.drawImage(mogu,0,0,63,67,107,375,35,35);
			}
			if(moguTypePosition[1][0]){
				ctx.drawImage(mogu,0,0,63,67,278,375,35,35);
			}
			if(moguTypePosition[2][0]){
				ctx.drawImage(mogu,0,0,63,67,346,375,35,35);
			}
			if(moguTypePosition[3][0]){
				ctx.drawImage(mogu,0,0,63,67,311,238,35,35);
			}
		}
	}



	function action(){
		checkAndDraw(Mario);
	}

	function checkAndDraw(obj){
		obj.img.src = "images/a.png";
		if(obj.right||obj.left||obj.up){
			if(obj.left){
				if(obj.num<199)
					obj.num = obj.lnum;
				stop("left",obj);
			}	
			else if(obj.right){
				if(obj.num>199)
					obj.num = 18;
				stop("right",obj);
			}
			if(obj.left)
				draw(-1*a);
			else if(obj.right)
				draw(a);
			else
				draw(0);
		}else if(obj.speed!=0||obj.they!=0){
			if(obj.speed>0){
				draw(-1*a);
			}
			else if(obj.speed<0){
				draw(a);
			}
			draw(0);
		}else{
			stop(obj.flag,obj);
		}
	}

	function move(obj){
		if(obj.up&&!obj.durmp){
			obj.durmp++;
			obj.upspeed = 40;
			obj.up = false;
		}
		obj.they += obj.upspeed;
		obj.upspeed -= upa;
		if(obj.they<0){
			obj.upspeed = 0;
			obj.they = 0;
			obj.durmp = 0;
		}
		else if(obj.upspeed<-10&&obj.thex<560&&obj.thex>480&&obj.they<=70)
		{

			obj.upspeed = 0;
			obj.they = 70;
			obj.durmp = 0;

		}
		else if(obj.upspeed<-10&&obj.thex<920&&obj.thex>820&&obj.they<=100)
		{
			obj.upspeed = 0;
			obj.they = 100;
			obj.durmp = 0;

		}
		else if(obj.upspeed<=0&&((obj.thex<400&&obj.thex>200)||(obj.thex>60&&obj.thex<130))&&obj.they<=135&&obj.they>100)
		{

			obj.upspeed = 0;
			obj.they = 135;
			obj.durmp = 0;

		}
		else if(obj.upspeed>0&&((obj.thex<400&&obj.thex>200)||(obj.thex>60&&obj.thex<130))&&obj.they<=50)
		{
			obj.upspeed = -20;
			obj.they = 120-obj.tall;
			if(obj.thex>60&&obj.thex<130){
				moguTypePosition[0][0]=1;
				moguTypePosition[0][1]=1;
			}
			if(obj.thex<290&&obj.thex>250){
				moguTypePosition[1][0]=1;
				moguTypePosition[1][1]=1;
			}
			if(obj.thex<360&&obj.thex>310){
				moguTypePosition[2][0]=1;
				moguTypePosition[2][1]=1;
			}
		}
		else if(obj.upspeed>0&&obj.thex<335&&obj.thex>270&&obj.they<=185)
		{
			obj.upspeed = -20;
			obj.they = 255-obj.tall;
			moguTypePosition[3][0]=1;
			moguTypePosition[3][1]=1;
			
		}
		if(moguTypePosition[0][0]&&obj.they==135&&obj.thex>60&&obj.thex<130){
			moguTypePosition[0][0]=0;
			//obj.statu = moguTypePosition[0][1];
			obj.fat = 80;
			obj.tall = 112;
		}
		if(moguTypePosition[1][0]&&obj.they==135&&obj.thex<290&&obj.thex>250){
			moguTypePosition[1][0]=0;
			//obj.statu = moguTypePosition[1][1];
			obj.fat = 80;
			obj.tall = 112;
		}
		if(moguTypePosition[2][0]&&obj.they==135&&obj.thex<360&&obj.thex>310){
			moguTypePosition[2][0]=0;
			//obj.statu = moguTypePosition[2][1];
			obj.fat = 80;
			obj.tall = 112;
		}
	}

	function changeSpeed(a,obj){
		obj.num = obj.num+50;
		obj.speed +=a;
		if(obj.speed>20)
			obj.speed = 20;
		if(obj.speed<-20)
			obj.speed = -20;
		if(!(obj.they<70&&obj.speed>0&&obj.thex+0.5*(obj.fat)<550&&obj.thex+0.5*(obj.fat)>494)&&
			!(obj.they<70&&obj.speed<0&&obj.thex<588&&obj.thex>560)&&
			!(obj.they<100&&obj.speed>0&&obj.thex+0.5*(obj.fat)<870&&obj.thex+0.5*(obj.fat)>830)&&
			!(obj.they<100&&obj.speed<0&&obj.thex<940&&obj.thex>880)&&
			!(obj.they<135&&obj.they>50&&obj.speed<0&&obj.thex<425&&obj.thex>370)&&
			!(obj.they<135&&obj.they>50&&obj.speed<0&&obj.thex<145&&obj.thex>90)&&
			!(obj.they<135&&obj.they>50&&obj.speed>0&&obj.thex+0.5*(obj.fat)<255&&obj.thex+0.5*(obj.fat)>215)&&
			!(obj.they<135&&obj.they>50&&obj.speed>0&&obj.thex+0.5*(obj.fat)<125&&obj.thex+0.5*(obj.fat)>70)&&
			!(obj.they<270&&obj.they>185&&obj.speed>0&&obj.thex+0.5*(obj.fat)<325&&obj.thex+0.5*(obj.fat)>275)&&
			!(obj.they<270&&obj.they>185&&obj.speed<0&&obj.thex<355&&obj.thex>320)){
			obj.thex += obj.speed;
		}
		else{
			obj.speed = 0;
		}
		if(obj.thex<-50)
			obj.thex = 960;
		if(obj.thex>960)
			obj.thex=-50;
		if(obj.num>119&&obj.num<169)
			obj.num = 18;
		else if(obj.num>350){
			obj.num = obj.lnum;
			obj.up = false;
		}
		if(!obj.left&&!obj.right&&!obj.up&&obj.speed==0)
			stop(obj.flag,obj);
	}

	function draw(a){
		
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,960,640);

		move(Mario);
		
		// else if(Mario.they==0&&Mario.thex<560&&Mario.thex>480)
		// {
		// 	Mario.thex = 480;			
		// }
		ctx.drawImage(bg,0,0,1920,1280,0,0,960,640);
		ctx.drawImage(Mario.img,Mario.num,0,50,70,0+Mario.thex,550-Mario.they-Mario.tall,Mario.fat,Mario.tall);
		if(moguTypePosition[0][0]){
			ctx.drawImage(mogu,0,0,63,67,107,375,35,35);
		}
		if(moguTypePosition[1][0]){
			ctx.drawImage(mogu,0,0,63,67,278,375,35,35);
		}
		if(moguTypePosition[2][0]){
			ctx.drawImage(mogu,0,0,63,67,346,375,35,35);
		}
		if(moguTypePosition[3][0]){
			ctx.drawImage(mogu,0,0,63,67,311,238,35,35);
		}
		
		changeSpeed(a,Mario);
	}

	window.onload = function(){
		canvas = document.getElementById('canvas');
		init();
	}