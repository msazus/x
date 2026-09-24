const CONFIG = {
  signupLink: "https://www.ds88trk.com/2T9DHQP/3J5QP48/?source_id=sx3&sub1=sx3"
};

const video = document.getElementById("video");

video.play().catch(() => {});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    video.play().catch(() => {});
  }
});

const gate = document.getElementById("gate");
const msg = document.getElementById("message");
const signup = document.getElementById("signup");

document.querySelectorAll(".action").forEach(button => {
  button.addEventListener("click", () => {

    if (button.dataset.type === "free") {
      msg.textContent =
        "Sign up to access the available free video collection.";
    } else {
      msg.textContent =
        "Sign up to continue to video call access.";
    }

    signup.href = CONFIG.signupLink;

    gate.classList.add("show");

    gate.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});

document.getElementById("close").onclick = () => {
  gate.classList.remove("show");
};

document.getElementById("year").textContent =
  new Date().getFullYear();
