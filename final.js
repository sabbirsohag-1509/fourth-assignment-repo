function totalFine( fare ) {
        if(fare <= 0){
            return 'Invalid';
        }
        if(typeof fare !== 'number'){
            return 'Invalid';
        }

    const fineCharge = fare + fare * (20 / 100) + 30;

    return fineCharge;
}


function  onlyCharacter( str ) {
        
        if(typeof str !== 'string'){
            return 'Invalid';
        }
    const result = str.split(" ").join("");
    const finalResult = result.toUpperCase();


    return finalResult;
}



function  bestTeam( player1, player2 ) {
    
    if(typeof player1 !== 'object' || typeof player2 !== 'object'){
        return 'Invalid';
    }

    const foulCountTeam1 = player1.foul + player1.cardY + player1.cardR;
    const foulCountTeam2 = player2.foul + player2.cardY + player2.cardR;

    let team1FoulResult = foulCountTeam1;
    let team2FoulResult = foulCountTeam2;
    
    if(team1FoulResult < team2FoulResult){
        return player1.name;
    }
    else if(team2FoulResult < team1FoulResult){
        return player2.name;
    }
    else{
        return 'Tie';
    }
     
}



function  isSame(arr1 , arr2 ) {

    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'Invalid';
    }
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2 [i]){
            return false;
        }
    }
    return true;
}



function  resultReport( marks ) {

        if(!Array.isArray(marks)){
            return 'Invalid';
        }
        if(marks.length === 0){
            return {finalScore: 0, pass: 0, fail: 0};
        }
        let sum = 0;
        let passCount = 0;
        let failCount = 0;

        for(const mark of marks){
            sum = sum + mark;
             if(mark >= 40){
                passCount++;
            }
            else{
                failCount++;
            }
        }
        let length = marks.length;
        let avgMarks = sum / length;
        let roundAvgMarks = Math.round(avgMarks);

        return{ finalScore:roundAvgMarks, pass:passCount, fail:failCount};
}
  