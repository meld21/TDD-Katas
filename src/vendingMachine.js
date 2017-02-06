function VendingMachine(){

    this.currentAmount = 0;
    this.displayMessage = "Insert Coin";

    this.acceptCoin = function(coin){

        if(coin == "quarter" || coin == "nickel" || coin == "dime")
        {
            return true;
        }
        return false;
    };

    this.insertCoin = function(coin){
        if( coin == "quarter" )
            this.currentAmount += .25;
        if( coin == "dime" )
            this.currentAmount += .1;
        if( coin == "nickel" )
            this.currentAmount += .05;
    };
}