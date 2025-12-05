function switchExampleTS(day) {
    switch (day) {
        case "sun":
            console.log("Sunday");
             console.log(day.toUpperCase())
            break;
        case "mon":
            console.log("Monday");
            break;
        case "tue":
            console.log("Tuesday");
            break;
        case "wed":
            console.log("Wednesday");
            break;
        case "thu":
        case "thurs":
            console.log("Thursday");
            break;
        case "fri":
            console.log("Friday");
            break;
        case "sat":
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day");
            break;
    }
}
switchExampleTS("sun");
