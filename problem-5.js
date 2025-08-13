function  resultReport( marks ) {

        if(!Array.isArray(marks)){
            return 'Invalid';
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

const input = 100;
console.log(resultReport(input));
