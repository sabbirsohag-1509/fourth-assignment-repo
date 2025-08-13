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



const input = "Gorib tai ticket katinai" ;
console.log(totalFine(input));

