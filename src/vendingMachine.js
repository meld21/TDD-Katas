function VendingMachine(){

    this.currentAmount = 0;
    this.returnSlot = [];

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
        else if( coin == "dime" )
            this.currentAmount += .1;
        else if( coin == "nickel" )
            this.currentAmount += .05;
        else
            this.returnSlot = ["penny"];
    };

    this.displayMessage = function(){
        if( this.currentAmount == 0 )
            return "Insert Coin";
        else
            return this.currentAmount.toString();

    };
}