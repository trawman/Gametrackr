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