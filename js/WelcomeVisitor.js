var today = new Date();
var time = today.getHours() + today.getMinutes() + today.getSeconds();

var welcomeText = "";

switch (time) {
    case (time >= 050000 && time < 120000):
    {
        welcomeText = "Good morning!";
    }
    break;
    case (time >= 120000 && time < 180000):
    {
        welcomeText = "Good afternoon!";
    }
    break;
    case (time >= 180000 && time < 230000):
    {
        welcomeText = "Good evening!";
    }
    break;
    case (time >= 230000 && time < 050000):
    {
        welcomeText = "Why arent you sleeping?";
    }
    break;
    default:
        welcomeText = "Error: Invalid time insert.";
        break;
}

document.body.innerHTML = welcomeText;