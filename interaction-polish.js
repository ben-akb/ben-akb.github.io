/*
 * Adds keyboard and click support to project titles below their photos.
 * script.js remains responsible for opening the existing media dialog.
 * The observer processes only newly added cards to avoid repeatedly scanning
 * the complete project and school-life grids.
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

  function prepareTitle(title) {
    const cover = getCoverForTitle(title);
    if (!cover || cover.contains(title)) return;

    title.setAttribute('role', 'button');
    title.setAttribute('tabindex', '0');
    title.setAttribute('aria-haspopup', 'dialog');

    if (!title.hasAttribute('aria-label')) {
      title.setAttribute('aria-label', `Open ${title.textContent.trim()} gallery`);
    }
  }

  function prepareTitles(root = document) {
    if (root instanceof Element && root.matches(titleSelector)) {
      prepareTitle(root);
    }

    if (root.querySelectorAll) {
      root.querySelectorAll(titleSelector).forEach(prepareTitle);
    }
  }

  function activateTitle(title) {
    const cover = getCoverForTitle(title);
    if (!cover || cover.contains(title)) return;
    cover.click();
  }

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element
      ? event.target
      : event.target && event.target.parentElement;
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

    const target = event.target instanceof Element
      ? event.target
      : event.target && event.target.parentElement;
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

    const grids = [
      document.getElementById('projectGrid'),
      document.getElementById('schoolAlbumGrid')
    ].filter(Boolean);

    if (!('MutationObserver' in window)) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) prepareTitles(node);
        });
      });
    });

    grids.forEach((grid) => {
      observer.observe(grid, { childList: true, subtree: true });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialise, { once: true });
  } else {
    initialise();
  }
})();
