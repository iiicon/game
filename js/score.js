function game(scene){
	this.scene=scene;
	this.letter=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	this.letterArr=[];
	this.speed=3;
	this.num=4;
	this.level=1;
	this.score=0;
	this.live=10;
	this.getLetter(4);
	this.play();
	this.key();
	this.res();
	this.end();
}
var ss=document.getElementsByClassName("ss");
game.prototype.getLetter=function(num){
	var cw=document.documentElement.clientWidth;
	for (var i = 0; i < num; i++) {
		var img=document.createElement("img");
		var let=this.letter[Math.floor(Math.random()*this.letter.length)];
		// if(check()){
		// 	let=this.letter[Math.floor(Math.random()*this.letter.length)];
		// }
		// var x=this.letterArr;
		// function check(){
		// 	for (var j = 0; j < x.length; j++) {
		// 		if(x[j]==let){
		// 			return false;
		// 		}
		// 	};
		// }
		img.src="images/"+let+".png";
		img.className=let;
		img.style.cssText="position:absolute;left:"+((cw-250)*Math.random()+100)+"px;top:"+(-200*Math.random()-50)+"px";
		this.scene.appendChild(img);
		this.letterArr.push(let);
	};	
		
}	

game.prototype.play=function(){
	var cy=document.documentElement.clientHeight-150;
	var letters=document.getElementsByTagName('img');
	var that=this;
	setInterval(function(){
		for (var i = 0; i < letters.length; i++) {
		var ltops=letters[i].offsetTop;
		letters[i].style.top=ltops+that.speed+"px";
			if(ltops>cy){
				var ln = letters[i].className;
				for(j=0;j<that.letterArr.length;j++){
					if(that.letterArr[j]==ln){
						that.letterArr=that.letterArr.splice(j,1)
					}
				}
				that.scene.removeChild(letters[i]);
				that.getLetter(1);
				letters[i]==null;
				that.live--;
				ss[1].innerHTML=that.live;
				if(that.live<=0){
					alert("GAME OVER");
					location.reload();
				}
			}
		};
	},50)
}
var level=document.getElementsByClassName("level")[0];
game.prototype.key=function(){
	var that=this;
	document.onkeydown=function(e){
		var ev=e||window.event;
		var kc=String.fromCharCode(ev.keyCode);
		var now=that.scene.getElementsByClassName(kc);
		if(now.length>0){
			that.scene.removeChild(now[0]);
			now[0]=null;
			that.getLetter(1);
			for (var i = 0; i < that.letterArr.length; i++) {
				if(that.letterArr[i]==kc[i])
				that.letterArr=that.letterArr.splice(i,1);
				};
				that.score++;
				ss[0].innerHTML=that.score;
				ss[2].innerHTML=Math.ceil(that.score/20);
				if(that.score>20){
					that.speed=10;
				}
			}
	}
}

game.prototype.res=function(){
	var sl=document.getElementsByClassName("sl")[0];
	sl.onclick=function(){
		location.reload();
	}
}
game.prototype.end=function(){
	var end=document.getElementsByClassName("s2")[0];
	end.onclick=function(){
		
	}
}
