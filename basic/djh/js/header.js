var headMenu  = document.querySelector('.h-menu');
var menuList  = document.querySelector('ul');

var flag = 0;

function toggleMenu(){
	if(flag == 0){
		menuList.className = 'showMenu';
		flag = 1;
	}else{
		menuList.className = 'hideMenu';
		flag = 0;

	}
}

headMenu.addEventListener('click',function(){
	toggleMenu();
},false);

