function countingValleys(s) {
    //here we go again
    let valeys = 0
    let level = 0
    let entries = 0
    let exits = 0
    for (let i = 0; i < s.length; i++) {


        if(s[i]==="D"){
            level--
            if(level===-1){
                entries++
            }


        }

    }
    return entries>exits?exits:entries
}

console.log(countingValleys('UFFDDFDUDFUFU'));