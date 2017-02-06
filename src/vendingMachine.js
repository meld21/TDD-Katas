function VendingMachine(){

    this.acceptCoin = function(coin){

        if(coin == "quarter" || coin == "nickel" || coin == "dime")
        {
            return true;
        }
        return false;
    };
}