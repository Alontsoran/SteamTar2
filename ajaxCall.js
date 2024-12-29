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
