/*
    Danielle Smith
    script.js -- creates randomly generated string with selection based on user input, pushes it to the "viable_passwords" list in index.html

*/





$("#submit").on("click", function (e) {   

    const chars = [];

    if($("#length").val() < 8 || password_length > 128){
            alert("Password length invalid! Please input a value between 8 and 128.");
    }
    else{


        //Populate special characters
        if($("#yes_special").prop("checked") == true){
            for(i = " ".charCodeAt(); i <= "/".charCodeAt(); i++){
                chars.push(String.fromCharCode(i));
            }
        }


        //Populate numbers
        if($("#yes_numbers").prop("checked") == true){
             for(i = "0".charCodeAt(); i <= "9".charCodeAt(); i++){
                chars.push(String.fromCharCode(i));
            }
        }


        //Populate uppercase letters
         if($("#yes_upper").prop("checked") == true){
             for(i = "A".charCodeAt(); i <= "Z".charCodeAt(); i++){
                 chars.push(String.fromCharCode(i));
             }
        }


        //Populate lowercase letters
        if($("#yes_lower").prop("checked") == true){
            for(i = "a".charCodeAt(); i <= "z".charCodeAt(); i++){
                chars.push(String.fromCharCode(i));
             }
        }
        $("#viable_passwords").append("<li>" + generate_password($("#length").val(), chars) + "</li>");

    }
    e.preventDefault();
});



function generate_password(length, chars){
    var password = "";
    for(let i = 0; i < length; i++){
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

