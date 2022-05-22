// form fields variables
const team_name = document.getElementById("team");
const player_1 = document.getElementById("player1");
const player_2 = document.getElementById("player2");
const player_3 = document.getElementById("player3");
const player_4 = document.getElementById("player4");
const mail_id = document.getElementById("mail");
const phone = document.getElementById("phone");
const aadhar = document.getElementById("aadhar");

// here is the link for storing the fields value
let link = "";

// send button
const send_button = document.getElementById("send");

// to send the message via whatsapp
send_button.addEventListener("click", () => {
  link = `https://api.whatsapp.com/send/?phone=919971849074&text=Team+Name+:+*${team_name.value.replace(
    / /g,
    "+"
  )}*+Player+1+:+*${player_1.value}*+Player+2+:+*${
    player_2.value
  }*+Player+3+:+*${player_3.value}*+Player+4+:+*${
    player_4.value
  }*+Email+Id+:+*${mail.value}*+Phone+No+:+*${phone.value.replace(/ /g, "+")}*+Aadhar+No+:+*${aadhar.value}*`;

  if (
    (team_name.value != "" &&
    team_name.value != " ") &&
    (player_1 != "" &&
    player_1.value != " ") &&
    (player_2 != "" &&
    player_2.value != " ") &&
    (player_3 != "" &&
    player_3.value != " ") &&
    (player_4 != "" &&
    player_4.value != " ") &&
    (mail_id != "" &&
    mail_id.value != " ") &&
    (phone != "" &&
    phone.value != " ") &&
    (aadhar.value != "" &&
    aadhar.value != " ")
  ) {
    location.replace(link);
  }
});
