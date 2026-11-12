/*
 * Adds click support to project titles located below their photos.
 * The existing script.js remains responsible for opening the media dialog.
 * Clicking a title simply activates the matching existing photo button.
 */
(() => {
  'use strict';

  const titleSelector = [
    '.project-card .work-card-copy h3',
    '.school-album-entry .school-album-caption'
  ].join(',');

  function getCoverForTitle(title) {
    const card = title.closest('.project-card, .school-album-entry');
    if (!card) return null;
    return card.querySelector('.project-cover, .school-album-card');
  }

  function prepareTitles(root = document) {
    root.querySelectorAll(titleSelector).forEach((title) => {
      const cover = getCoverForTitle(title);
      if (!cover || cover.contains(title)) return;

      title.setAttribute('role', 'button');
      title.setAttribute('tabindex', '0');
      title.setAttribute('aria-haspopup', 'dialog');
      if (!title.hasAttribute('aria-label')) {
        const name = title.textContent.trim();
        title.setAttribute('aria-label', `Open ${name} gallery`);
      }
    });
  }

  function activateTitle(title) {
    const cover = getCoverForTitle(title);
    if (!cover || cover.contains(title)) return;
    cover.click();
  }

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : event.target.parentElement;
    const title = target && target.closest(titleSelector);
    if (!title) return;

    const cover = getCoverForTitle(title);
    if (cover && !cover.contains(title)) {
      event.preventDefault();
      activateTitle(title);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const target = event.target instanceof Element ? event.target : event.target.parentElement;
    const title = target && target.closest(titleSelector);
    if (!title) return;

    const cover = getCoverForTitle(title);
    if (cover && !cover.contains(title)) {
      event.preventDefault();
      activateTitle(title);
    }
  });

  function initialise() {
    prepareTitles();

    // Project cards and album cards are inserted by script.js.
    const grids = [
      document.getElementById('projectGrid'),
      document.getElementById('schoolAlbumGrid')
    ].filter(Boolean);

    if ('MutationObserver' in window) {
      const observer = new MutationObserver(() => prepareTitles());
      grids.forEach((grid) => observer.observe(grid, { childList: true, subtree: true }));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialise, { once: true });
  } else {
    initialise();
  }
})();
