









var text = prompt("напишите сообщение" );
var step = +prompt("какой вы шаг хотите установить?");
var cryptogram = "";
var alphabet  =  [ 
                   
                    "С", "Т", "У",
                   "Ф", "Х", "Ц", "Ч", "Ш", "Щ", 
                   "Ь", "Ы", "Ъ", "Э", "Ю", "Я",
                  "а", "б", "в", "г", "д", "е", "ё",
                   "ж", "з", "и", "й", "к", "л", "м",
                   "н", "о", "п", "р", "с", "т", "у",
                   "ф", "х", "ц", "ч", "ш", "щ", 
                   "ь", "ы", "ъ", "э", "ю", "я" ,
                  "А", "Б", "В", "Г", "Д", "Е", "Ё",
                   "ж", "З", "И", "Й", "К", "Л", "М",
                   "Н", "О", "П", "Р"
];
if(text!=0){
    if(step!=0){
        for(let quantity_s = text.length; quantity_s > 0; quantity_s --){
            let index_s = alphabet.indexOf(text[0]) + step;
            cryptogram += alphabet[index_s];
            text = text.slice(1);
        }
    }   else{ 
             alert ("вы не указали шаг!");}
} else {
    alert ("вы не ввели сообщение!");}
    alert (cryptogram.toLowerCase());





    // 1 версия
    // var text = prompt("напишите сообщение" );
    // var step = +prompt("какой вы шаг хотите установить?");
    // var cryptogram = "";
    // var alphabet  =  [ "а", "б", "в", "г", "д", "е", "ё",
    //                    "ж", "з", "и", "и́", "к", "л", "м",
    //                    "н", "о", "п", "р", "с", "т", "у",
    //                    "ф", "х", "ц", "ч", "ш", "щ", 
    //                    "ь", "ы", "ъ", "э", "ю", "я" ];
    // if(text!=0){
    //     if(step!=0){
    //         for(let quantity_s = text.length; quantity_s > 0; quantity_s --){
    //             let index_s = alphabet[text[1]] + step;
    //             cryptogram += alphabet[index_s];
    //         }
    //     }   else{ 
    //              alert ("вы не указали шаг!");}
    // } else {
    //     alert ("вы не ввели сообщение!");}
    //     alert (cryptogram);
    
