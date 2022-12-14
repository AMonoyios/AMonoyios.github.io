let today = new Date();
let currentHour = today.getHours();

let welcomeText = "";

if (currentHour < 6)
{
    welcomeText = "Why aren't you sleeping?";
}
else if (currentHour < 12)
{
    welcomeText = "Good Morning!";
}
else if (currentHour < 18)
{
    welcomeText = "Good Afternoon!";
}
else if (currentHour < 23)
{
    welcomeText = "Good Evening!";
}

document.getElementById("time").innerHTML = welcomeText;
