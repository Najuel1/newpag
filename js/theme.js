  const setTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  document.querySelectorAll('[data-bs-theme-value]').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-bs-theme-value');
      setTheme(theme);
    });
  });