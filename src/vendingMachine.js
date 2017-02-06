function VendingMachine(){

    this.currentAmount = 0;
    this.acceptCoin = function(coin){

        if(coin == "quarter" || coin == "nickel" || coin == "dime")
        {
            return true;
        }
        return false;
    };

    this.insertCoin = function(coin){
        this.currentAmount = .25;
    };
}