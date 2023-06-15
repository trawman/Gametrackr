const button = document.getElementById('dark-mode');
  const body = document.body;

  button.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
  
    const isDarkMode = body.classList.contains('dark-mode');
    document.cookie = `darkMode=${isDarkMode}`;
  });

  const darkModeCookie = document.cookie
    .split(';')
    .map(cookie => cookie.trim())
    .find(cookie => cookie.startsWith('darkMode='));

  if (darkModeCookie) {
    const isDarkMode = darkModeCookie.split('=')[1] === 'true';

    if (isDarkMode) {
      body.classList.add('dark-mode');
    }
  }

  function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }

  function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }

  document.getElementById("botao1").addEventListener("click", function() {
    document.cookie = "armazenarCookies=true; expires=Thu, 31 Dec 2024 23:59:59 UTC; path=/";
    hidePopup();
  });
  
  document.getElementById("botao2").addEventListener("click", function() {
    hidePopup();
  });

  function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

  function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    }

     const storageCookie = getCookie("armazenarCookies");
    if (storageCookie) {
      hidePopup();
    }
