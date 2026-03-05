let compteur = 0

function test(a,b){
    let egal = a == b
    let strict = a === b

    console.log(a + " == " + b + " -> " + egal + " | " + a + " === " + b + " -> " + strict)

    if(egal && !strict){
        compteur++
    }
}

test(0,"")
test(0,"0")
test(0,false)
test("",false)
test(null,undefined)
test(null,false)
test(NaN,NaN)
test(1,"1")
test(" \t\n ",0)

console.log("---")
console.log(compteur + " paire(s) où == et === donnent des résultats différents")