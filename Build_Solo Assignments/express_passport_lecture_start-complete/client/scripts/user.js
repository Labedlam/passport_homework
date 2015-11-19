$(document).ready(function(){
    console.log("Hey it loads!");

    $.ajax({
        type: "GET",
        url: "/user",
        success: function(data){
            console.log(data);
            $("#welcome").text("Welcome, " +  data.username);
            $("#yourinformation").append('<div><h4>hello  '+data.firstName+' '+data.lastName+',<br>We got your email: '+data.email+'</h4>');
        }
    });
});