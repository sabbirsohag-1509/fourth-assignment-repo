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


const team1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 }

const team2 = "France"

console.log(bestTeam(team1, team2));