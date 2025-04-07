let number = [];

for (i = 1; i <= 25; i++) {
    for (x = 1; x <= i; x++) {
        number[i] = `${x}`;
    };
    console.log(`Boucle ${i}: ${number.join(" ")}`);
};


