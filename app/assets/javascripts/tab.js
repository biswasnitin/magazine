///*
// * To change this template, choose Tools | Templates
// * and open the template in the editor.
// */
//
//$(document).ready(function(){
    $('a.main_tab').click(function() {
        $('#active').attr('id','');
        $(this).parent().attr('id', 'active');
    });
//});
