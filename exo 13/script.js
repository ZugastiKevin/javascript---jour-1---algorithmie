for (i = 1; i <= 9; i++) {
    let ligne = "";
    for (x = 1; x <= 9; x++) {
        ligne += (i * x) + " ";
    };
    console.log(ligne);
};