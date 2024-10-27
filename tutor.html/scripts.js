let redirectUrl = "";

// Modified login function to handle video overlay
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (accounts[username] && accounts[username] === password) {
    error.textContent = "";

    // Set redirect URL based on login credentials
    if (username === "USER" && password === "USER123") {
      redirectUrl = "https://vgames.github.io/lmao.html";
    } else if (username === "ADMIN" && password === "VUYANI08052007") {
      document.getElementById("loginContainer").classList.add("hidden");
      document.getElementById("buttonContainer").classList.remove("hidden");
      return;
    } else {
      redirectUrl = "https://vuyani1.github.io/pri.html";
    }

    // Show video overlay for 5 seconds before redirection
    showVideoOverlay();
  } else {
    error.textContent = "Invalid username or password. Please try again.";
  }
}

// Show video overlay and delay redirect
function showVideoOverlay() {
  const videoOverlay = document.getElementById("videoOverlay");
  const continueButton = document.getElementById("continueButton");

  videoOverlay.classList.remove("hidden");

  // Show the continue button after 5 seconds
  setTimeout(() => {
    continueButton.classList.remove("hidden");
  }, 5000);
}

// Redirect user after "Continue" button click
function proceedRedirect() {
  window.location.href = redirectUrl;
}

// Button navigation function
function navigateTo(page) {
  const urls = {
    "req": "https://vcloud24.github.io/req.html",
    "vcall": "https://vgames1.github.io/vcall.html",
    "mm": "https://vuyani1.github.io/mm.html"
  };
  window.location.href = urls[page];
}
