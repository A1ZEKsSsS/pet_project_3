const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

const overlay = document.querySelector('.menu__overlay');

	  
	  
	  hamburger.addEventListener('click', () => {
		  menu.classList.add('active');
		  if (menu.classList.contains('active')) {
			  hamburger.classList.add('hide')
			};
			overlay.classList.add('overlay-visible')
		});
		
		closeElem.addEventListener('click', () => {
			menu.classList.remove('active');
			hamburger.classList.remove('hide')
			overlay.classList.remove('overlay-visible')
			
		});
		
const openbutton = document.querySelector('.right__service'),
	infokok = document.querySelector('.info'),
	closeInfo = document.querySelector('.info__close');


openbutton.addEventListener('click', ()=>{
	infokok.classList.add('active');
	menu.classList.remove('active');
	overlay.classList.remove('overlay-visible')

})
closeInfo.addEventListener('click',() => {
		infokok.classList.remove("active")
		hamburger.classList.remove('hide')
		overlay.classList.remove('overlay-visible')
	})



const button = document.querySelector('.promo__button-service'),
      header = document.querySelector('.header');
     

button.addEventListener('click', () => {
    header.classList.toggle('active');
});



const footerFirst = document.querySelector('.first-column'),
 	  footerSecond = document.querySelector('.second-column'),
	  footerThird = document.querySelector('.third-column');

const footerMenuFirst = document.querySelector('.footerm__first-col');
	  footerCloseFirst = document.querySelector('.footerm__first-col__close'),
	  footerMenuSecond = document.querySelector('.footerm__second-col'),
	  footerCloseSecond = document.querySelector('.footerm__second-col__close'),
	  footerMenuThird = document.querySelector('.footerm__third-col'),
	  footerCloseThird = document.querySelector('.footerm__third-col__close');


	  footerFirst.addEventListener('click', () => {
		footerMenuFirst.classList.add('active');
		document.body.style.overflow = 'hidden';
	});
	
	footerSecond.addEventListener('click', () => {
		footerMenuSecond.classList.add('active');
		document.body.style.overflow = 'hidden';
		
	});
	
	footerThird.addEventListener('click', () => {
		footerMenuThird.classList.add('active');
		document.body.style.overflow = 'hidden';
	});
	
	footerCloseFirst.addEventListener('click', ()=> {
		footerMenuFirst.classList.remove('active');
		document.body.style.overflow = '';
	});
	
	footerCloseSecond.addEventListener('click', ()=> {
		footerMenuSecond.classList.remove('active');
		document.body.style.overflow = '';
	});
	
	footerCloseThird.addEventListener('click', ()=> {
		footerMenuThird.classList.remove('active');
		document.body.style.overflow = '';
	})



let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}







