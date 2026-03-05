let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

console.log("nom ?? ->", nom ?? "valeur par défaut")
console.log("age ?? ->", age ?? "valeur par défaut")
console.log("ville ?? ->", ville ?? "valeur par défaut")
console.log("score ?? ->", score ?? "valeur par défaut")
console.log("actif ?? ->", actif ?? "valeur par défaut")

console.log("----")

console.log("nom || ->", nom || "valeur par défaut")
console.log("age || ->", age || "valeur par défaut")
console.log("ville || ->", ville || "valeur par défaut")
console.log("score || ->", score || "valeur par défaut")
console.log("actif || ->", actif || "valeur par défaut")

console.log("----")

function compare(nomVar, v){
let a = v ?? "valeur par défaut"
let b = v || "valeur par défaut"

if(a === b){
console.log(nomVar + " : même résultat")
}else{
console.log(nomVar + " : résultat différent")
}
}

compare("nom",nom)
compare("age",age)
compare("ville",ville)
compare("score",score)
compare("actif",actif)