$(document).ready(function(){

    var client_Id ="905088209377-7fmkpdq9gkvf3peppkgn2r4sgjih9dml.apps.googleusercontent.com"
    var redirect_url="http://localhost/OAuth/upload.html"
    var scoup="https://www.googleapis.com/auth/drive"
    var furl=""


    $("#signIn").click(function(){

        signIn(client_Id,redirect_url,scoup,furl);
    
    
    })


    function signIn(client_Id,redirect_url,scoup,furl){

        furl = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_url
        +"&prompt=consent&response_type=code&client_id="+client_Id+"&scope="+scoup
        +"&access_type=offline";

        window.location = furl;
        
    }


});
