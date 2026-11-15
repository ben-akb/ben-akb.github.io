(function () {
  'use strict';

  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const year = document.getElementById('year');
  const projectGrid = document.getElementById('projectGrid');
  const schoolAlbumGrid = document.getElementById('schoolAlbumGrid');
  const mediaDialog = document.getElementById('mediaDialog');
  const mediaDialogTitle = document.getElementById('mediaDialogTitle');
  const mediaDialogDescription = document.getElementById('mediaDialogDescription');
  const mediaDialogContent = document.getElementById('mediaDialogContent');
  const mediaDialogClose = document.getElementById('mediaDialogClose');

  if (year) year.textContent = String(new Date().getFullYear());

  // Normalise Windows-style paths and spaces before using paths in browser URLs.
  // This is useful when media paths were copied from Windows folders.
  function normaliseMediaUrl(value) {
    const raw = String(value == null ? '' : value).trim();
    if (!raw || /^(?:javascript|vbscript):/i.test(raw)) return '';

    const forwardSlashPath = raw.replace(/\\/g, '/');
    try {
      return encodeURI(forwardSlashPath);
    } catch (error) {
      return forwardSlashPath.replace(/ /g, '%20');
    }
  }

  function escapeHTML(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeMediaAttribute(value) {
    return escapeHTML(normaliseMediaUrl(value));
  }

  function dimensionAttribute(name, value) {
    const number = Number(value);
    return Number.isFinite(number) && number > 0
      ? ` ${name}=\"${Math.round(number)}\"`
      : '';
  }

  // Use the supplied portrait if present; otherwise try the configured local fallbacks.
  const profilePhoto = document.getElementById('profilePhoto');
  if (profilePhoto) {
    profilePhoto.decoding = 'async';
    const photoFallbacks = [
      profilePhoto.dataset.fallbackSrc,
      profilePhoto.dataset.placeholderSrc
    ].filter(Boolean);
    let fallbackIndex = 0;

    function advanceProfilePhotoFallback() {
      if (fallbackIndex >= photoFallbacks.length) return;
      profilePhoto.src = normaliseMediaUrl(photoFallbacks[fallbackIndex++]);
    }

    profilePhoto.addEventListener('error', advanceProfilePhotoFallback);
    if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {
      advanceProfilePhotoFallback();
    }
  }

  const projects = Array.isArray(window.PORTFOLIO_PROJECTS)
    ? window.PORTFOLIO_PROJECTS
    : [];
  const schoolPhotos = Array.isArray(window.SCHOOL_LIFE_PHOTOS)
    ? window.SCHOOL_LIFE_PHOTOS
    : [];

  function projectMedia(project) {
    if (Array.isArray(project.media) && project.media.length) return project.media;
    if (project.cover) {
      return [{
        type: 'image',
        src: project.cover,
        alt: project.coverAlt || project.title,
        caption: project.title
      }];
    }
    return [];
  }

  function projectCover(project, media) {
    if (project.cover) return project.cover;
    const firstImage = (Array.isArray(media) ? media : []).find(function (item) {
      return item && item.type !== 'video' && item.src;
    });
    const firstItem = firstImage || (Array.isArray(media) ? media[0] : null);
    return firstItem ? (firstItem.poster || firstItem.src || '') : '';
  }

  // A School Life card can be one photo or a grouped album of photos and videos.
  function schoolAlbumMedia(photo) {
    if (Array.isArray(photo.media) && photo.media.length) return photo.media;
    const source = photo.src || photo.cover || photo.poster;
    if (!source) return [];

    return [{
      type: photo.type || 'image',
      src: source,
      poster: photo.poster,
      alt: photo.alt || photo.caption || 'School life photo',
      caption: photo.caption || 'School life moment',
      mimeType: photo.mimeType,
      width: photo.width,
      height: photo.height
    }];
  }

  function getLongDescription(item) {
    return item.hoverDescription || item.longDescription || item.description || '';
  }

  function renderProjects() {
    if (!projectGrid) return;

    if (!projects.length) {
      projectGrid.innerHTML = '<p class="loading-note">No projects have been added yet. Add a project in portfolio-data.js.</p>';
      return;
    }

    projectGrid.innerHTML = projects.map(function (project, index) {
      const tags = Array.isArray(project.tags) ? project.tags : [];
      const media = projectMedia(project);
      const mediaCount = media.length;
      const cover = projectCover(project, media);
      const longDescription = getLongDescription(project) || project.description || '';
      const projectTitle = project.title || 'Untitled project';
      const coverSource = cover
        ? ` src="${escapeMediaAttribute(cover)}"`
        : '';

      return `
        <article class="work-card project-card">
          <button class="work-image image-short project-cover" type="button" data-project-index="${index}" aria-label="Open photos and videos for ${escapeHTML(projectTitle)}. ${escapeHTML(longDescription)}">
            <img${coverSource} alt="${escapeHTML(project.coverAlt || projectTitle)}" loading="lazy" decoding="async" fetchpriority="low">
            <span class="image-index">${String(index + 1).padStart(2, '0')}</span>
            <span class="image-arrow" aria-hidden="true">↗</span>
            <span class="project-cover-hint">VIEW MEDIA · ${mediaCount}</span>
            <span class="project-hover-panel" aria-hidden="true"><span class="hover-panel-kicker">ABOUT THIS PROJECT</span><span class="hover-panel-title">${escapeHTML(projectTitle)}</span><span class="hover-panel-copy">${escapeHTML(longDescription)}</span><span class="hover-panel-action">OPEN GALLERY ↗</span></span>
          </button>
          <div class="work-card-copy">
            <div class="work-meta"><span>${escapeHTML(project.category || 'PROJECT')}</span><span>${String(index + 1).padStart(2, '0')}</span></div>
            <h3>${escapeHTML(projectTitle)}</h3>
            <p>${escapeHTML(project.description || '')}</p>
            ${project.longDescription || project.hoverDescription ? `<details class="touch-description"><summary>Read the project description</summary><p>${escapeHTML(longDescription)}</p></details>` : ''}
            <div class="tag-row">${tags.map(function (tag) { return `<span>${escapeHTML(tag)}</span>`; }).join('')}</div>
            <button class="project-view-button" type="button" data-project-index="${index}">View photos & videos <span aria-hidden="true">↗</span></button>
          </div>
        </article>`;
    }).join('');
  }

  function renderSchoolAlbum() {
    if (!schoolAlbumGrid) return;

    if (!schoolPhotos.length) {
      schoolAlbumGrid.innerHTML = '<p class="loading-note">No school-life albums have been added yet. Add an entry in portfolio-data.js.</p>';
      return;
    }

    schoolAlbumGrid.innerHTML = schoolPhotos.map(function (photo, index) {
      const media = schoolAlbumMedia(photo);
      const cover = photo.cover || photo.src || (media[0] && (media[0].poster || media[0].src)) || '';
      const title = photo.caption || photo.title || photo.alt || 'School life moment';
      const longDescription = getLongDescription(photo);
      const mediaCount = media.length;
      const coverSource = cover
        ? ` src="${escapeMediaAttribute(cover)}"`
        : '';

      return `
        <div class="school-album-entry">
          <button class="school-album-card" type="button" data-school-photo-index="${index}" aria-label="Open ${escapeHTML(title)} gallery with ${mediaCount} media items. ${escapeHTML(longDescription)}">
            <span class="school-album-image"><img${coverSource} alt="${escapeHTML(photo.alt || title)}" loading="lazy" decoding="async" fetchpriority="low"><span class="school-photo-note">${escapeHTML(photo.note || 'SCHOOL LIFE')} · ${mediaCount} ITEM${mediaCount === 1 ? '' : 'S'}</span><span class="school-photo-open" aria-hidden="true">↗</span><span class="school-hover-panel" aria-hidden="true"><span class="hover-panel-kicker">SCHOOL LIFE</span><span class="hover-panel-title">${escapeHTML(title)}</span><span class="hover-panel-copy">${escapeHTML(longDescription || 'Add a longer description for this album in portfolio-data.js.')}</span><span class="hover-panel-action">OPEN ALBUM ↗</span></span></span>
            <span class="school-album-caption">${escapeHTML(title)}</span>
          </button>
          ${longDescription ? `<details class="touch-description school-touch-description"><summary>Read the story</summary><p>${escapeHTML(longDescription)}</p></details>` : ''}
        </div>`;
    }).join('');
  }

  function openMediaDialog(title, description, mediaItems) {
    if (!mediaDialog || !mediaDialogContent) return;

    if (mediaDialogTitle) mediaDialogTitle.textContent = title || 'Gallery';
    if (mediaDialogDescription) mediaDialogDescription.textContent = description || '';

    const validItems = (Array.isArray(mediaItems) ? mediaItems : []).filter(function (item) {
      return item && item.src;
    });

    mediaDialogContent.innerHTML = validItems.map(function (item) {
      const caption = escapeHTML(item.caption || item.alt || '');
      const width = dimensionAttribute('width', item.width);
      const height = dimensionAttribute('height', item.height);

      if (item.type === 'video') {
        const poster = item.poster
          ? ` poster="${escapeMediaAttribute(item.poster)}"`
          : '';
        const mime = escapeHTML(item.mimeType || 'video/mp4');
        return `<figure class="media-dialog-item"><video controls playsinline preload="none"${poster} aria-label="${escapeHTML(item.alt || item.caption || 'Project video')}"><source src="${escapeMediaAttribute(item.src)}" type="${mime}">Your browser does not support this video.</video>${caption ? `<figcaption>${caption}</figcaption>` : ''}<span class="media-kind">VIDEO</span></figure>`;
      }

      return `<figure class="media-dialog-item"><img src="${escapeMediaAttribute(item.src)}" alt="${escapeHTML(item.alt || item.caption || title || 'Portfolio photo')}" loading="lazy" decoding="async" fetchpriority="low"${width}${height}>${caption ? `<figcaption>${caption}</figcaption>` : ''}<span class="media-kind">PHOTO</span></figure>`;
    }).join('');

    if (!validItems.length) {
      mediaDialogContent.innerHTML = '<p class="loading-note">No photos or videos have been added to this gallery yet.</p>';
    }

    if (typeof mediaDialog.showModal === 'function') {
      if (!mediaDialog.open) mediaDialog.showModal();
    } else {
      mediaDialog.setAttribute('open', 'open');
    }
  }

  if (projectGrid) {
    projectGrid.addEventListener('click', function (event) {
      const button = event.target.closest('[data-project-index]');
      if (!button) return;

      const project = projects[Number(button.dataset.projectIndex)];
      if (!project) return;

      openMediaDialog(
        project.title,
        getLongDescription(project) || project.description,
        projectMedia(project)
      );
    });
  }

  if (schoolAlbumGrid) {
    schoolAlbumGrid.addEventListener('click', function (event) {
      const button = event.target.closest('[data-school-photo-index]');
      if (!button) return;

      const photo = schoolPhotos[Number(button.dataset.schoolPhotoIndex)];
      if (!photo) return;

      const title = photo.caption || photo.title || 'School Life Album';
      const description = getLongDescription(photo) || photo.note || 'A moment from school life.';
      openMediaDialog(title, description, schoolAlbumMedia(photo));
    });
  }

  function closeMediaDialog() {
    if (!mediaDialog) return;

    if (typeof mediaDialog.close === 'function' && mediaDialog.open) {
      mediaDialog.close();
    } else {
      mediaDialog.removeAttribute('open');
      stopAndClearGalleryMedia();
    }
  }

  function stopAndClearGalleryMedia() {
    if (!mediaDialogContent) return;

    mediaDialogContent.querySelectorAll('video').forEach(function (video) {
      video.pause();
      video.removeAttribute('src');
      video.querySelectorAll('source').forEach(function (source) {
        source.removeAttribute('src');
      });
      // Calling load() after removing sources releases the media resource.
      video.load();
    });

    mediaDialogContent.innerHTML = '';
  }

  if (mediaDialogClose) {
    mediaDialogClose.addEventListener('click', closeMediaDialog);
  }

  if (mediaDialog) {
    mediaDialog.addEventListener('click', function (event) {
      if (event.target === mediaDialog) closeMediaDialog();
    });
    mediaDialog.addEventListener('close', stopAndClearGalleryMedia);
  }

  function closeMenu() {
    if (!menuToggle || !mainNav) return;

    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    mainNav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      mainNav.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) closeMenu();
    }, { passive: true });
  }

  renderProjects();
  renderSchoolAlbum();

  // Reveal sections only when they approach the viewport. If the browser does
  // not support IntersectionObserver, content remains visible without effects.
  const revealTargets = document.querySelectorAll(
    '.section-topline, .about-heading, .about-copy, .work-card, .video-copy, .video-frame, .timeline-item, .credential-item, .recognition-point, .school-album-card'
  );

  const prefersReducedMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -24px 0px'
    });

    revealTargets.forEach(function (element) {
      element.classList.add('js-reveal');
      observer.observe(element);
    });
  }
})();
