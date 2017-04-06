/*----------SLIDER-------------*/
var slideIndex =1;
showSlides(slideIndex);

function currentSlide(n){
	showSlides(slideIndex=n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("Myslides")
	var dots = document.getElementsByClassName("dot");
	if (n>slides.length){
		slideIndex=1;
	}
	if (n<1){
		slideIndex=slides.length;
	}
	for (i=0;i<slides.length;i++){
		slides[i].style.display="none";
	}
	for(i=0;i<dots.length;i++){
		dots[i].className=dots[i].className.replace(" active","")
	}
	slides[slideIndex-1].style.display="block";
	dots[slideIndex-1].className+=" active";
	slides[slideIndex-1].onmouseover=function(){
		
		clearInterval(id);
		;}
	slides[slideIndex-1].onmouseleave=function(){
		 id=setInterval(slideTime, 5000)
		
		}
	}
function slideTime(n){
 n=1
 showSlides(slideIndex += n);

 }
var id=setInterval(slideTime, 5000);﻿


/*----------------------TABS---------------------*/
var tab;
var tabContent;
window.onload=function(){
	tabContent=document.getElementsByClassName('tab_content');
	tab=document.getElementsByClassName('tab'),
	img=document.getElementsByClassName('arrow-bott');
	
	hideTabsContent(1);
}
function hideTabsContent(a){
	for(var i=a;i<tabContent.length;i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('chosen_tab');
	}
}
document.getElementById('tabs').onclick=function (event){
	var target=event.target;
	if(target.className=='tab'){
		for(var i=0;i<tab.length;i++){
			if (target == tab[i]){
				showTabsContent(i);
				break;
			}
		}
	}
}
function showTabsContent(b){
	if (b==0){img[0].style.cssText='left:15%;'}
	if (b==1){img[0].style.cssText='left:49%;'}
	if (b==2){img[0].style.cssText='left:82%;'}
	if (tabContent[b].classList.contains('hide')){
		hideTabsContent(0);
		tab[b].classList.add('chosen_tab');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');

	}
}


/*--------------------------Selectors--------------------*/

