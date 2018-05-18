/*
* @Author: Administrator
* @Date:   2018-05-05 17:03:16
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-13 11:09:25
*/
window.onload=function(){

	let select=document.querySelectorAll(".jiadian:first-child .j_top .j_top_r>li");
	 // alert(select.length);
	let uarr=document.querySelectorAll(".jiadian:first-child .j_center .j_center_r");
	let select1=document.querySelectorAll(".jiadian:nth-child(2) .j_top .j_top_r>li");
	let uarr1=document.querySelectorAll(".jiadian:nth-child(2) .j_center .j_center_r");
	table(select,uarr);
	table(select1,uarr1);		
}
function table(select,uarr){
	for(let i=0;i<select.length;i++){
		uarr[i].style.display="none";
		uarr[0].style.display="block";
		select[i].onmouseover=function(){
			uarr[i].style.display="block";
			for(let j=0;j<select.length;j++){
				if(j!=i){
					uarr[j].style.display="none";
				}
			}
		}
	}
}