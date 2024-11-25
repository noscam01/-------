const math = () =>{
    let res = 0;
    let result = ""
    let jenukduk = 0;
    while(true) {
        let zat = prompt('Tauar engiz: ');
        if (zat == 'Aiaqtau'){
            break; 
        } 
        result += zat
        let baga = +prompt('Bagasyn engiz: ')
        if(baga == 5000){
            alert('10% jenulduk')
        }else if(baga == 10000){
            alert('20% jenuldyl')
        }else if(baga == 15000){
            alert('30% jenulduk')
        }
        res += baga   
    }
    return res, result
}
alert(math())
