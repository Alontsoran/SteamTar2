function ajaxCall(method, api, data, successCB, errorCB) {
  $.ajax({
    url: api,
    type: method,
    data: data,
    contentType: "application/json",
    success: successCB,
    error: errorCB,
  });
}
let api = "https://194.90.158.74/igroup6/test2/tar1/api/Game";

function logout() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userName");
  window.location.href = "./login.html";
}
function checkIfLoggedIn() {
  const userEmail = localStorage.getItem("userEmail");
  if (!userEmail) {
    window.location.href = "./login.html";
  }
}
