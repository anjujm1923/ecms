$(document).ready(function(){
    $("#submitbtn").click(function(){        
        $("#myForm").submit(); // Submit the form
    });
// $(document).ready(function(){
          
//           $("#confirm_password").bind('keyup change', function(){

//             check_Password( $("#password").val(), $("#confirm_password").val() )
            
            
//           })

//           $("#sign_in_btn").click(function(){

//             check_Password( $("#password").val(), $("#confirm_password").val() )

//           })
//         })

//         function check_Password( Pass, Con_Pass){

//           if(Pass === ""){

            

//           }else if( Pass === Con_Pass){

//             $("#sign_in_btn").removeAttr("onclick")
//             $('#confirm_password_msg').show()
//             $("#confirm_password_msg").html('<div class="alert alert-success">Password matched</div>')

//             setTimeout(function() {
//                 $('#confirm_password_msg').fadeOut('slow');
//             }, 3000);

//           }else{
//             $("#confirm_password").focus()
//             $('#confirm_password_msg').show()
//             $("#confirm_password_msg").html('<div class="alert alert-danger">Password didnot matched</div>')

//             setTimeout(function() {
//                 $('#confirm_password_msg').fadeOut('slow');
//             }, 3000);

//           }

//         