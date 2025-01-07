var autoyear = document.getElementById("current-year");

autoyear.innerHTML = new Date().getFullYear();


window.addEventListener('load', function() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('container').style.display = 'block';
});

function toggleMenu() {
  var home = document.getElementById("fade");
  var toggle = document.getElementsByClassName("nav-list")[0];
  if(toggle.style.display === "flex") {
    toggle.style.display = "none";
    home.style.opacity = "1";
     toggle.style.transform = "translateX(0%)";
  } else {
    toggle.style.display = "flex";
    home.style.opacity = "0.5";
    toggle.style.right = "0";
  }
}
