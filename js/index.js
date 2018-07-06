setInterval(function(){
	// 1.确定当前时间
	var curTimes=new Date();
	// console.log(curTimes);
	// 
	// 2.确定目标时间   12 18 24
	var objTimes=new Date();
	var hours=0;

	if(curTimes.getHours()<12){
		hours=12;
	}else if(curTimes.getHours()<18){
		hours=18;
	}else{
		hours=24;
	}

	objTimes.setHours(hours,0,0);

	// console.log(objTimes);

	//3.确定时间间隔 时间戳 ms
	var s=Math.floor((objTimes-curTimes)/1000);//多少秒
	console.log(s);//90

	//4.确定间隔时间 时分秒 90 130
	var h=m=0;//初始化小时以及的分钟
	if(s>60){
		m=Math.floor(s/60);//1m 2m
		s%=60;//取余 s=s%60;  a+=1;  a=a+1;

		if(m>60){
			h=Math.floor(m/60);
			m%=60;
		}

	}
	// console.log('H:'+h+',M:'+m+',S:'+s);
	// 
	//5.优化 当你的时分秒不是两位数时，前面加个0
	h < 10 ? h='0'+h  : h;

	m < 10 ? m='0'+m  : m;

	s < 10 ? s='0'+s  : s;

	//6.把时分秒怼给页面对象
	var timesH=document.getElementsByClassName('timesH')[0];
	var timesM=document.getElementsByClassName('timesM')[0];
	var timesS=document.getElementsByClassName('timesS')[0];
	var dgps=document.getElementsByClassName('dgps')[0];

	// console.log(timesH);
	// console.log(timesM);
	// console.log(timesS);
	dgps.innerHTML=hours;
	timesH.innerHTML=h;
	timesM.innerHTML=m;
	timesS.innerHTML=s;
},1000);