function draw(n) {
    let row = 0
    while (row < n){
        let round = 0
        result = ""
        while (round<n){
            if (round<=row){
                result = result + "*"
            }
            else {
                result = result + "_"
            }
            round += 1
            //console.log(result+"1")
        }
        row += 1
        console.log(result)
    }
}