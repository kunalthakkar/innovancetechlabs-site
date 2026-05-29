// Theme toggle for static pages
(function () {
  const KEY = 'site-theme';

  function applyTheme(theme) {
    document.body.classList.toggle('light-theme', theme === 'light');
  }

  function getStored() {
    return localStorage.getItem(KEY);
  }

  function setStored(t) {
    localStorage.setItem(KEY, t);
  }

  function createButton() {
    const btn = document.createElement('button');
    btn.id = 'static-theme-toggle';
    btn.className = 'theme-toggle-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.innerHTML = '<span class="sun">☀️</span><span class="moon">🌙</span>';
    btn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      setStored(isLight ? 'light' : 'dark');
      updateButton(btn, isLight);
    });
    return btn;
  }

  function updateButton(btn, isLight) {
    if (isLight) {
      btn.classList.add('is-light');
    } else {
      btn.classList.remove('is-light');
    }
  }

  function init() {
    const stored = getStored();
    if (stored) {
      applyTheme(stored);
    } else {
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      applyTheme(prefersLight ? 'light' : 'dark');
    }

    // Append toggle to navbars or to body if none
    const navs = document.querySelectorAll('.navbar');
    const btn = createButton();
    updateButton(btn, document.body.classList.contains('light-theme'));
    if (navs.length) {
      navs.forEach(nav => {
        // place toggle at the end of nav
        nav.appendChild(btn.cloneNode(true));
      });
    } else {
      document.body.appendChild(btn);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
