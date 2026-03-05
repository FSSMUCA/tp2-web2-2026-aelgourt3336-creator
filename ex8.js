let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

console.log("===== RAPPORT UTILISATEUR =====")

let nomCorrige = nom.trim()
if(nomCorrige === ""){
nomCorrige = "Inconnu"
}

console.log('nom : "' + nomCorrige + '" (corrigé : espaces supprimés)')

let ageNum = parseInt(age)

if(Number.isNaN(ageNum) || ageNum <= 0){
console.log("age : valeur invalide")
}else{
console.log("age :", ageNum,"(valide)")
}

let position = email.indexOf("@")
let valideEmail = false

if(position !== -1 && email.indexOf(".", position) !== -1){
valideEmail = true
}

if(valideEmail){
console.log('email : "' + email + '" (valide)')
}else{
console.log('email : "' + email + '" (invalide : pas de point après @)')
}

let score = parseInt(scoreJeu)
if(Number.isNaN(score)){
score = 0
}

console.log("scoreJeu :",score,'(extrait depuis "'+scoreJeu+'")')

let admin = estAdmin === "true"

console.log("estAdmin :",admin,"(conversion manuelle requise)")

let connexion = derniereConnexion ?? "Jamais connecté"

console.log('derniereConnexion : "'+connexion+'"')

let nb = Number(nombreConnexions)

if(nb === 0){
console.log('nombreConnexions : "Aucune connexion"')
}else{
console.log("nombreConnexions :",nb)
}

console.log("================================")