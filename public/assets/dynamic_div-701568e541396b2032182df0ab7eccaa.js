/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//$("#user_email").blur(function(){
//  alert("This input field has lost its focus.");
//});


$(document).ready(function(){
//  $('input#user_email').on('blur','.validate',function(event){
//
//    alert("This input field has lost its focus.");
//      var user_email = $('#user_email').val();
//      if (user_email.length == 0){
//         $('#email_messsage').text("Required Field");
//      }else{
//          $('#email_messsage').text("");
//      }
//
//
//  });


// $('a.main_tab').click(function() {
//
//    alert("Button clicked");
//
//    });


//$('body').on('click', '.main_tab', function (){
//
//
// alert("Hello Nitin it is going to delete");
//
//    });


    $('body').on('click', '.replay', function (){

//     $("a.replay").unbind("click").cli

         if(($(this).closest('div.dialogbox').find("#comment_form").length)  || ($(this).closest('div.dialogbox').find("#new_comment").length)) {
  return false;
} else {
        $(this).closest('div.dialogbox').append("<div id='comment_form' class='nested_messages'></div>");


}


    });







   



//
// $("input.create_comment").unbind("click").click(function(){
//
//         if($(this).closest('div.nested_messages').find("#response").length) {
//  return false;
//} else {
//        $(this).closest('div.nested_messages').append("<div id='response'>Dynamic</div>");
//
//return false;
//}
//
//    });

//
//    $('.new_comment form').live('submit',function() {
//           alert("Hello, "+($('.new_comment form #name').val())+"!");
//           return false;
////    });
//$('.nested_messages').on('submit', 'form', function(event) {
//    alert("Hello Nitin you got it");
//     $(this).closest('div.nested_messages').append("<div id='response'>Dynamic</div>");
//
//});
////$('body').on('submit', 'form', function (event){
//         alert("Hello Nitin you got it");
//     $(this).closest('div.nested_messages').append("<div id='response'>Dynamic</div>");
//
//    });



$('body').on('submit', 'form.button_to', function (event){
         $(this).closest('div.dialogbox').append("<div id='delete_response'></div>");

    });





$('body').on('submit', 'form.new_comment', function (event){
     $(this).closest('div.nested_messages').append("<div id='response'></div>");

    });


//$('body').on('click', 'form', function (event){
//return true;
//    });






});


