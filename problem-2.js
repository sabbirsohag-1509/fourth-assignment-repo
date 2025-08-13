function  onlyCharacter( str ) {
        
        if(typeof str !== 'string'){
            return 'Invalid';
        }
    const result = str.split(" ").join("");
    const finalResult = result.toUpperCase();


    return finalResult;
}



const input = true   ;
console.log(onlyCharacter(input));

