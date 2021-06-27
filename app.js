let toggle = document.getElementById("toggle-button")
let annually = false

function changePrice(annual) {
    monthlyprice = [19.99, 24.99, 39.99]
    annualprice = [199.99, 249.99, 399.99]
    prices = document.getElementsByClassName("price")
    for(i=0; i< prices.length; i ++) {
        if (annual) {
            prices[i].innerHTML = "$" + annualprice[i].toString()
        
        }
        else {
            prices[i].innerHTML = "$" + monthlyprice[i].toString()
        }
    
    }
    
}
toggle.addEventListener('click', function() {
    if (!annually) {
        toggle.style.paddingLeft = "40px";
        toggle.style.opacity = "0.8";
        changePrice(true)
        annually = true;

    }
    else {
        toggle.style.paddingLeft = "5px";
        toggle.style.opacity = "1"
        changePrice(false)
        annually = false;
    }
})
