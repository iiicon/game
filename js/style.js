	function game(scene){
		this.scene=scene;
		this.letter=["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		this.num=4;
		this.letterArr=[];
		this.leve=1;
		this.speed=3;
		this.score=10;   
		this.getletter(4);
		this.play();
		this.key();
		//this.cw=document.documentElement.clientWidth;
	// console.log(this.cw);
		//this.ch=document.documentElement.clientHeight;
	// console.log(this.ch);
	}

game.prototype.getletter=function(num){
	var cw=document.documentElement.clientWidth;
	for (var i = 0; i < num; i++) {
		var img=document.createElement("img");
		var let=this.letter[Math.floor(Math.random()*this.letter.length)];
		// console.log(let);
		img.src="images/"+let+".png";
		img.className=let;
		img.style.cssText="position:absolute;left:"+Math.random()*(cw-150)+50+"px;top:"+Math.floor((Math.random()*-200)-50)+"px";	
		this.scene.appendChild(img);	
		this.letterArr.push(let);
	};
	console.log(this.letterArr)
}
game.prototype.play=function(){
	var that=this;
	setInterval(function(){
		var ch=document.documentElement.clientHeight-150;
		var letters=document.getElementsByTagName("img")
		for (var i = 0; i < letters.length; i++) {
			var ltops=letters[i].offsetTop;
			letters[i].style.top=ltops+that.speed+"px";
			if(ltops>ch){
				var ln=letters[i].className;
				for(var j=0;j<that.letterArr.length;j++){
					if(that.letterArr[j]==ln){
						that.letterArr=that.letterArr.splice(j,1);
					}
				}
				that.scene.removeChild(letters[i]);
				that.getletter(1);
				letters[i]=null;	
			}
		};
		
	},50)
}

game.prototype.key=function(){
	var that=this;
	document.onkeydown=function(e){
		var ev=e||window.event;
		var kl=String.fromCharCode(ev.keyCode);
		var now=that.scene.getElementsByClassName(kl)
		if(now.length>0){
			that.scene.removeChild(now[0]);
			now[0]=null;
			that.getletter(1);
			for(var i=0;i<that.letterArr.length;i++){
				if(that.letterArr[i]==kl){
					that.letterArr=that.letterArr.splice(i,1)
				}
			}
		}
	}
}