
$("document").ready(function(){
$("#clear").click(function(){
 $("#age").val("")
$("#result").val("")
$("#display").val("")
});  
    });

 
 function calculate() {
   var age= new Date(document.getElementById("age").value);
   if(age=="Invalid Date") {
      $('#lbl1').text(age);
   }
   else{
  
   var pastdate = age.getDate();//Date of birth
   var pastmonth = 1+ age.getMonth();
   var pastyear = age.getFullYear();
   var date = new Date();
  var currentdate = date.getDate();//current date
  var currentmonth = 1 + date.getMonth();
  var currentyear = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

 if(pastdate > currentdate){
    currentdate  = currentdate  + month[currentmonth - 1];
    currentmonth= currentmonth - 1;
  }
  if(pastmonth> currentmonth){
    currentmonth = currentmonth + 12;
    currentyear = currentyear - 1;
  }

if(pastmonth>currentmonth || pastyear>currentyear){
$('#lbl1').text("Date of Birth Should be less then current date");

}

else{
  var d = currentdate - pastdate;
  var m = currentmonth -pastmonth;
  var y = currentyear - pastyear;
  $("#display").val(y+'YEAR\t'+m+'MONTHS');
}

  } 
}
    