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

}
game.prototype.getLetter=function(num){
	var cw=document.documentElement.clientWidth;
	for (var i = 0; i < num; i++) {
		var img=document.createElement("img");
		var let=this.letter[Math.floor(Math.random()*this.letter.length)];
		// for(var j=0;j<let.length;j++){
		// 	if(let[i]==let[j]){
		// 		this.getLetter(1)
		// 	}
		// }
		img.src="images/"+let+".png";
		img.className=let;
		img.style.cssText="position:absolute;left:"+((cw-250)*Math.random()+100)+"px;top:"+(-200*Math.random()-50)+"px";
		this.scene.appendChild(img);
		this.letterArr.push(let);
	};
}
game.prototype.play=function(){
	var that=this;
	var all=document.getElementsByTagName('img');

	setInterval(function(){
		var ch=document.documentElement.clientHeight-150;

		if(that.num>that.letterArr.length){
			that.getLetter(that.num-that.letterArr.length)
		}

		for (var i = 0; i < all.length; i++) {
			var tops=all[i].offsetTop+that.speed;
			all[i].style.top=tops+"px";
			var ln=all[i].className;
			if(tops>ch){
				for(var j=0;j<that.letterArr.length;j++){
					if(that.letterArr[j]==ln){
						that.letterArr.splice(j,1)
					}
				}
				all[i].parentNode.removeChild(all[i])
				// that.getLetter(1);
				all[i]=null;

			}
		};
	},50)
	
}
game.prototype.key=function(){
	var that=this;
	document.onkeydown=function(e){
		var ev=e||window.event;

			var s=String.fromCharCode(ev.keyCode)
			var k=document.getElementsByClassName(s);
			if(k.length>0){
				for(var j=0;j<that.letter.length;j++){
					if(that.letterArr[j]==k[0]){
						that.letterArr.splice(j,1)
					}
				}
				k[0].parentNode.removeChild(k[0]);
				that.getLetter(1);
				k[0]=null;
				// if(that.num>that.letterArr.length){
				// 	that.getLetter(that.num-that.letterArr.length)
				// }
			}
	}
	
}
// var end=document.getElementsByClassName("start")[0];
// game.prototype.end=function(){
// 	var that=this;
// 	end.onclick=function(){
// 		game()=null;
// 	}
// }