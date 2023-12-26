export const convertNumber = (number) => {
    if(number){
        if(number < 1000){
            return number;
        } else if(number >= 1000 && number < 1000000){
            return (
                number.toString().slice(0,-3) + "." + number.toString().slice(-3,-1) + "K"   // Thousands
            );
        } else if(number >= 1000000 && number < 1000000000) {
            return (
                number.toString().slice(0, -6) + "." + number.toString().slice(-6, -4) + "M" // Millions
            );
        } else if(number >= 1000000000 && number < 1000000000000) 
        {
            return (
                number.toString().slice(0, -9) + "." + number.toString().slice(-9, -7) + "B"  // Billions
            );
        } else if(number >= 1000000000000) {
            return (
                number.toString().slice(0, -12) + "." + number.toString().slice(-12, -10) + "T" // Trillions
            );
        }
    }

};
