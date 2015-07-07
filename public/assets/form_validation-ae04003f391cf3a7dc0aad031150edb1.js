/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//$("#user_email").blur(function(){
//  alert("This input field has lost its focus.");
//});


$(document).ready(function(){
//  $('.validate').blur(function(){
//   alert("This input field has lost its focus.");
//      var user_email = $(this).val();
//      if (user_email.length == 0){
////            $(this).closest('span#message').text("*Required");
//        $("#message").text("Required Field");
//      }else{
//         $(this).closest('span#message').text("");
//      }
//  });
    $('.validate').blur(function(){
        var id = $(this).attr("id")+'_message';
        if (this.value.length == 0){
            $("#"+id).replaceWith("<span id ='"+ id +"' class ='message'><strong><font color ='red'>*Required</font></strong> </span>");
            return;
        }else{
            $("#"+id).text("");
        }
        if ($(this).attr('id') == 'user_email') {
            var params = {email: this.value}
            $.ajax({
                type: "GET",
                url: "/users/check_availability",
                data: params
            });

        }
    });




    $('form').submit( function (event){
        if ($('#user_email').val().length == 0){
            alert('Email is Required');
            return false;
        }

        if ($('#user_name').val().length == 0){
            alert('User name is Required');
            return false ;
        }
        if ($('#user_password').val().length == 0){
            alert('password should not be blank');
            return false ;
        }
        if ($('#user_password_confirmation').val().length == 0){
            alert('password confirmation should not be blank');
            return false ;
        }

        


    });


});


