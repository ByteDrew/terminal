    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const processing = document.getElementById("processing");

    function typeValue(el, text, delay, callback) {
      let i = 0;
      let interval = setInterval(() => {
        el.value += text[i];
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          if (callback) callback();
        }
      }, delay);
    }

    window.addEventListener("DOMContentLoaded", () => {
      typeValue(username, "********", 100, () => {
        setTimeout(() => {
          typeValue(password, "******", 150, () => {
            setTimeout(() => {
              processing.style.display = "block";
              setTimeout(() => {
                window.location.href = "terminalold.html";
              }, 2000);
            }, 500);
          });
        }, 500);
      });
    });