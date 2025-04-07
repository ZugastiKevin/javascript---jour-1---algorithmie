const hours = new Date();

console.log(hours);


if (hours.getHours() <= 11 && hours.getMinutes() <= 59) {
    console.log("on est le matin");
} else if (hours.getHours() >= 19 && hours.getMinutes() >= 0) {
    console.log("on est le soir");
} else {
    console.log("on est l'apres-midi");
}