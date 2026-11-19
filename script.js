(() => {
  const menuButton = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-links');
  if (menuButton && menu) {
    function closeMenu() { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open menu'); }
    menuButton.addEventListener('click', () => {
      const expanded = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(expanded));
      menuButton.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
    document.addEventListener('click', e => { if (!menu.contains(e.target) && !menuButton.contains(e.target)) closeMenu(); });
  }

  const photoDialog = document.querySelector('.photo-dialog');
  if (photoDialog && typeof photoDialog.showModal === 'function') {
    const picture = photoDialog.querySelector('.dialog-image');
    const caption = photoDialog.querySelector('.dialog-caption');
    document.querySelectorAll('.photo-open').forEach(button => button.addEventListener('click', () => {
      picture.src = button.dataset.photo;
      picture.alt = button.dataset.alt || 'Site photograph';
      caption.textContent = button.dataset.caption || '';
      photoDialog.showModal();
    }));
    photoDialog.querySelector('.dialog-close').addEventListener('click', () => photoDialog.close());
    photoDialog.addEventListener('click', e => { if(e.target === photoDialog) photoDialog.close(); });
    photoDialog.addEventListener('close', () => { picture.removeAttribute('src'); });
  }

  const copyButton = document.querySelector('.copy-email');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText('sabervafaei.ce@gmail.com'); copyButton.textContent = 'Copied ✓'; }
      catch { window.location.href = 'mailto:sabervafaei.ce@gmail.com'; }
      setTimeout(() => { copyButton.textContent = 'Copy address'; }, 2300);
    });
  }
  const year = document.querySelector('#copyright-year');
  if(year) year.textContent = new Date().getFullYear();
})();
