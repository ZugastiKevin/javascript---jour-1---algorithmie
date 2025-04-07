const tableurs = [];
const tableur = [];
let multiplicateur = 0;

for (i = 0; i <= 10; i++) {
    for (x = 0; x <= i; x++) {
        tableur[i] = `${multiplicateur} x ${x} = ${multiplicateur * x}`;
    }
    multiplicateur = i;
    tableurs[i] = tableur;
}

console.log(tableurs);