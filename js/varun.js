
$(document).ready(function(){

$("#form11").change(function(){

var name = $("#inputname").val();
var des = $("#inputdes").val();
var com = $("#inputcname").val();


$("#vname").html("<b>"+name+"</b>");
$("#deg").html(des);
$("#comname").html(com);

 });
 
 
$("#form11").change(function(){
 var ad1 = $("#inputad1").val();
 var ad2 = $("#inputad2").val();
 var ph = $("#inputph").val();
 var mb = $("#inputmb").val();
 var mal9 = $("#inputE").val();
 $("#addres").html(ad1+"<br>"+ad2+"<br><br>"+ph+"<br>"+mb+"<br><br>"+mal9);
 
 
});

$('#image').live('change', function()			
			{ 
			
			  $("#pic").html('');
			    $("#pic").html('<img src="./img/loader.gif" width="50" height="50" alt="Uploading...."//>');
	
			$("#form11").ajaxForm({
						target: '#pic'
		}).submit();
		 
	
			});
  
  
  
  
  
  
 });
 
 
