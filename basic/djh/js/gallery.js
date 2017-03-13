var oLi = document.querySelectorAll('.switch-btn');
var oTab = document.querySelectorAll('.tab');
for(var i = 0;i < oLi.length;i++){
	oLi[i].index = i;
	oLi[i].onclick = function(){
		for(var n=0;n<oLi.length;n++) oLi[n].classList.remove('btn-active');
			this.classList.add('btn-active');
		for(var n=0;n<oTab.length;n++) oTab[n].classList.remove('tab-active');
			oTab[this.index].classList.add('tab-active');
	}

}