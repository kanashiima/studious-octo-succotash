$(function() {
    console.log("document is ready!");

    var userName, nameLength, nameMsg, nameReverse, getVowelCount = ""; 

    $('#btnName').click(function() {
        userName = $('#userName').val(); 
        // console.log(userName); 
        // console.log($('#userName').val().length); 
        // console.log(getStringLength(userName)); 

        nameLength = getStringLength(userName);
        nameMsg = "The Length of your name is: ";
        $('#nameOutput').append(nameMsg + nameLength + "<br/>"); 

        // console.log(reverseString(userName)); 

        nameReverse = reverseString(userName);
        nameMsg = "Your Name reversed letters is: ";
        $('#nameOutput').append(nameMsg + nameReverse + "<br/>"); 

        console.log(thirdLetter(userName)); 

        stringArrayPosition(userName);
        
        getVowelCount = getCount(userName);
        nameMsg = "The number of vowels in your name is: ";
        $('#nameOutput').append(nameMsg + getVowelCount + "<br/>"); 

        });

        $('#btnClear').click(function(){
            clearElement("#nameOutput", "html");
            clearElement("#userName", "input");
      })

    function getStringLength(stringVal){
        var stringLength = stringVal.length; 
       return stringLength; 
    }

    function reverseString(stringVal){
        var revString = stringVal.split("").reverse().join("");
       return revString; 
    }
    
    function getCount(stringVal) {
        var vowelCount = (stringVal.match(/[aeiou]/ig)||[]).length;
        return vowelCount;
    }

    function thirdLetter(stringVal){
        
       return thirdString; var thirdString = stringVal[2]; 
    }

    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html(""); 
        }
        else if(elementType=="input"){
            $(elementId).val(" "); 
        }

    
      
        
    } 

    function stringArrayPosition(stringVal){

        for(i=0; i<stringVal.length; i++){
            console.log(i + " " + stringVal[i]);
        }


    }

});