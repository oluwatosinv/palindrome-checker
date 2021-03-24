function myFunction() {
    var str = document.getElementById("myText").value;
    var result;
    
    
    if (str === ""){
        alert("enter a word to test palindrome")
    }else{
        //console.log(str)
            function string(str) {
                str=str.split("");
                str=str.join();
                return str;
            }
            //console.log(str)
            function reverseString(str) {
                str=str.split("");
                str1=str.reverse()
                str1=str1.join()
                return str1;
            
            }

            theReverse=(reverseString(str));
            theString = (string(str));
            console.log(theReverse);
            console.log(theString)

            // if (theReverse==theString){
            //     console.log("palindrome")
            // }else{
            //     console.log("not palidrome")
            // }
            
            result = (theReverse==theString)? "palindrome" : "not palindrome";
            document.getElementById("demo").innerHTML = result;
    }
    
    
}


