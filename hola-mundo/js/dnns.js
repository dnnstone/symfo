$(document).ready(function(){

reloadLinks();
ClassBody();
	$('#add-button').click(function(){
		console.log($('#add-link').val());
		$("#menu-link").prepend('<li><a href="'+$('#add-link').val()+'">'+$('#add-link').val()+'</a></li>');
	})
console.log($('a').length);



});

function reloadLinks()
{


//capturamos el parametro como el indice
$('a').each(function(index)
{
	console.log($(this).attr('href'));
	var that=$(this);
	var desk=$(this).attr('href');
	that.text(desk);
	//$(this).atributes()
}
);

}
function ClassBody()
{

var body=document.querySelector('body');
var bod=document.getElementById('ads_m_movil0').innerHTML.trim() === "";
if(bod)
{
	 
  body.classList.remove("caja");
}

console.log('body: '+body+' bod: '+bod);
//	if($('#ads_m_movil0').is(':empty') || $.trim($('#ads_m_movil0').html())==''){
//		$('body').removeClass('enigma');
//	}



//capturamos el parametro como el indice
/*$('body').each(function(index)
{
	console.log($(this));
	var that=$(this);
	$(this).attr('class','enigma');
	that.text(desk);
	//$(this).atributes()
}
); */


}
