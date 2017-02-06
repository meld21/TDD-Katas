function VendingMachine(){

    this.acceptCoin = function(coin){

        if(coin == "quarter" || coin == "nickel")
        {
            return true;
        }
        return false;
    };
}