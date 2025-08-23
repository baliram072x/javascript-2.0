/*
syntax for switch case 

switch(value/ expression){
case value 1:
    //logic
    break; ---> is keyword
case value 2:
  //logic
    break; ---> is keyword
case value 3:
     //logic
    break; ---> is keyword
}
*/

let name ="baliram";

switch(name){
    case "baliram":
        console.log("working at microsoft");
        break;
    case "shiv":
        console.log("working at google");
        break;
     case "trupti":
        console.log("working at phonepay");
        break;
    default:
        console.log("don't know the company")
}