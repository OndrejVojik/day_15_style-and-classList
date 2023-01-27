const alerts = [
  "Unable to access resource. User is not authorized.",
  "You are missing proper user permissions.",
  "Administrators have been notified of this action.",
  "Please remain where you are, police is on the way.",
];

let body = document.body;
const div_alerts = document.createElement("div");
div_alerts.className = "alerts";
body.appendChild(div_alerts);

const elementFromHTML = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div;
};

alerts.forEach((alert) => {
  const data_html = `
        <div class="alert__text">${alert}</div>
        <div class="alert__close">&times;</div>`;

  const div = elementFromHTML(data_html);
  div.className = "alert";
  div_alerts.appendChild(div);
});

const alertElements = document.querySelectorAll(".alert");
const closeElements = document.querySelectorAll(".alert__close");
alertElements.forEach((alert) => {
  alert.addEventListener("click", () => {
    alert.style.backgroundColor = "green";
    alert.style.color = "white";
  });
  
  (alert.children[1]).addEventListener("click", () => {
    alert.style.display = "none";
  });

 
});
