
var password_length = 0, floor = 32, ceiling = 0;


$("#submit").on("click", function (e) {   

    const chars = [];

    if($("#length").val() < 8 || password_length > 128){
            alert("Password length invalid! Please input a value between 8 and 128.");
            // password_length = 0;
    }
    else{


        //Populate special characters
        if($("#yes_special").prop("checked") == true){
            console.log("user wants special characters.");
            for(i = " ".charCodeAt(); i <= "/".charCodeAt(); i++){
                chars.push(String.fromCharCode(i));
            }
        }


        //Populate numbers
        if($("#yes_numbers").prop("checked") == true){
         console.log("user wants numeric characters.");
             for(i = "0".charCodeAt(); i <= "9".charCodeAt(); i++){
                console.log(i);
                chars.push(String.fromCharCode(i));
            }
        }


        //Populate uppercase letters
         if($("#yes_upper").prop("checked") == true){
             console.log("user wants upper case.");
             for(i = "A".charCodeAt(); i <= "Z".charCodeAt(); i++){
                console.log(i);
                 chars.push(String.fromCharCode(i));
             }
        }


        //Populate lowercase letters
        if($("#yes_lower").prop("checked") == true){
            console.log("user wants lower case.");
            for(i = "a".charCodeAt(); i <= "z".charCodeAt(); i++){
                console.log(i);
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

