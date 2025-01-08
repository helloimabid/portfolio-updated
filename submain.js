(function () {
  emailjs.init({
    publicKey: "uRc-cjI8yvnWXpTvB",
  });
})();

const msg = document.querySelector(".form-message");

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      document.querySelector(".loader").classList.add("show");

      emailjs.sendForm("service_uy43uiw", "template_vlol0kw", this).then(
        () => {
          document.getElementById("contact-form").reset();
          document.querySelector(".loader").classList.remove("show");
          msg.innerHTML = "";
          msg.innerHTML += "<span class = 'success-msg'>Email sent</span>";
          msg.classList.add("show");
          setTimeout(() => {
            msg.classList.remove("show");
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};



window.addEventListener('load', function () {
  setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
document.getElementById('container').style.display = 'block';
  }, 1500); 
});
