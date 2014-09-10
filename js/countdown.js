/**
 * Created by Alex on 17.05.14.
 */
function CountdownTimer(elm,tl,mes){
	this.initialize.apply(this,arguments);
}

CountdownTimer.prototype={
	initialize:function(elm,tl,mes) {
		this.elem = document.getElementById(elm);
		this.tl = tl;
		this.mes = mes;
	},countDown:function(){
		var timer='';
		var today=new Date();
		var day=Math.floor((this.tl-today)/(24*60*60*1000));
		var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
		var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
		var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
		var me=this;
		if( ( this.tl - today ) > 0 ){
			timer += '<span class="number-wrapper"><div class="caption">Дней</div><div class="numberContainer"><div class="numberDivider"></div><span class="number day">'+this.addZero(day)+'</span></div></span><span class="separator"></span>';
			timer += '<span class="number-wrapper"><div class="caption">Часов</div><div class="numberContainer"><div class="numberDivider"></div><span class="number hour">'+this.addZero(hour)+'</span></div></span><span class="separator"></span>';
			timer += '<span class="number-wrapper"><div class="caption">Минут</div><div class="numberContainer"><div class="numberDivider"></div><span class="number min">'+this.addZero(min)+'</span></div></span><span class="separator"></span>';
			//timer += '<span class="number-wrapper"><div class="caption">Секунд</div><div class="numberContainer"><div class="numberDivider"></div><span class="number sec">'+this.addZero(sec)+'</span></div></span>';
			this.elem.innerHTML = timer;
			tid = setTimeout( function(){me.countDown();},10 );
		}else{
			this.elem.innerHTML = this.mes;
			return;
		}
	},addZero:function(num){ return ('0'+num).slice(-2); }
}

function CDT(){

	// Set countdown limit
	var tl = new Date(setDaysCount(15));
	var t2 = new Date(setDaysCount(21));
	var t3 = new Date(setDaysCount(11));
	var t4 = new Date(setDaysCount(9));
	var t5 = new Date(setDaysCount(30));


	/*
	var today=new Date();
	var y = today.getFullYear();
	var m = today.getMonth() + 1;
	var d = today.getDate();
	var h = 23-today.getHours();
	var mi = 59-today.getMinutes();
	var s = 59-today.getSeconds();
	if (today.getHours() < 12) {
		var tl = new Date(y+'/'+m+'/'+d+' 11:59:59');
	}
	else if(today.getHours() >= 12 && today.getHours()< 24){
		var tl = new Date(y+'/'+m+'/'+d+' 23:59:59');
	}*/

	/*var today=new Date();
	 var y = today.getFullYear();
	 var m = today.getMonth() + 1;
	 var d = today.getDate();
	 var h = today.getHours();
	 var mi = today.getMinutes();
	 var s = today.getSeconds();
	 var todayhour = 10+(Math.floor(h+24*(d-1)*m))%10;
	 var tl = new Date(y+'/'+m+'/'+d+' '+todayhour+':00:00');
	 // alert(tl);*/



	// You can add time's up message here
	var timer = new CountdownTimer('countdown',tl,'<span class="number-wrapper"><span class="number end">Завершено!</span></span>'),
		timer2 = new CountdownTimer('countdown2',t2,'<span class="number-wrapper"><span class="number end">Завершено!</span></span>'),
		timer3 = new CountdownTimer('countdown3',t3,'<span class="number-wrapper"><span class="number end">Завершено!</span></span>'),
		timer4 = new CountdownTimer('countdown4',t4,'<span class="number-wrapper"><span class="number end">Завершено!</span></span>'),
		timer5 = new CountdownTimer('countdown5',t5,'<span class="number-wrapper"><span class="number end">Завершено!</span></span>');
	timer.countDown();
	timer2.countDown();
	timer3.countDown();
	timer4.countDown();
	timer5.countDown();
}

function setDaysCount(days){
	return new Date().getTime() + (days * 24 * 60 * 60 * 1000);
}

window.onload=function(){
	CDT();
}