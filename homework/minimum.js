function minNum(num1, num2, num3){
        var min = 0;
        if((num1 <= num2) && (num1 <= num3)){
            max = num1;
        }
        else if((num2 <= num1) && (num2 <= num3)){
            max = num2;
        }
        else{
            max = num3;
        }
   alert( max);
    }
var num1 = 4;
var num2 = 10;
var num3 = 8;