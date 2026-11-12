(function () {
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

  if (year) year.textContent = new Date().getFullYear();

  // Use the supplied portrait if present; otherwise try a sample portrait, then a local visual placeholder.
  const profilePhoto = document.getElementById('profilePhoto');
  if (profilePhoto) {
    const photoFallbacks = [profilePhoto.dataset.fallbackSrc, profilePhoto.dataset.placeholderSrc].filter(Boolean);
    let fallbackIndex = 0;
    function advanceProfilePhotoFallback() {
      if (fallbackIndex >= photoFallbacks.length) return;
      profilePhoto.src = photoFallbacks[fallbackIndex++];
    }
    profilePhoto.addEventListener('error', advanceProfilePhotoFallback);
    if (profilePhoto.complete && profilePhoto.naturalWidth === 0) advanceProfilePhotoFallback();
  }

  function escapeHTML(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const schoolPhotos = Array.isArray(window.SCHOOL_LIFE_PHOTOS) ? window.SCHOOL_LIFE_PHOTOS : [];

  function projectMedia(project) {
    if (Array.isArray(project.media) && project.media.length) return project.media;
    if (project.cover) return [{ type: 'image', src: project.cover, alt: project.coverAlt || project.title, caption: project.title }];
    return [];
  }

  // A School Life card can be a single photo (the original format) or a grouped
  // album containing any number of photos and videos in its media array.
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
      mimeType: photo.mimeType
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
      const longDescription = getLongDescription(project) || project.description || '';
      const projectTitle = project.title || 'Untitled project';
      return `
        <article class="work-card project-card">
          <button class="work-image image-short project-cover" type="button" data-project-index="${index}" aria-label="Open photos and videos for ${escapeHTML(projectTitle)}. ${escapeHTML(longDescription)}">
            <img src="${escapeHTML(project.cover || '')}" alt="${escapeHTML(project.coverAlt || projectTitle)}" loading="lazy">
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
      return `
        <div class="school-album-entry">
          <button class="school-album-card" type="button" data-school-photo-index="${index}" aria-label="Open ${escapeHTML(title)} gallery with ${mediaCount} media items. ${escapeHTML(longDescription)}">
            <span class="school-album-image"><img src="${escapeHTML(cover)}" alt="${escapeHTML(photo.alt || title)}" loading="lazy"><span class="school-photo-note">${escapeHTML(photo.note || 'SCHOOL LIFE')} · ${mediaCount} ITEM${mediaCount === 1 ? '' : 'S'}</span><span class="school-photo-open" aria-hidden="true">↗</span><span class="school-hover-panel" aria-hidden="true"><span class="hover-panel-kicker">SCHOOL LIFE</span><span class="hover-panel-title">${escapeHTML(title)}</span><span class="hover-panel-copy">${escapeHTML(longDescription || 'Add a longer description for this album in portfolio-data.js.')}</span><span class="hover-panel-action">OPEN ALBUM ↗</span></span></span>
            <span class="school-album-caption">${escapeHTML(title)}</span>
          </button>
          ${longDescription ? `<details class="touch-description school-touch-description"><summary>Read the story</summary><p>${escapeHTML(longDescription)}</p></details>` : ''}
        </div>`;
    }).join('');
  }

  function openMediaDialog(title, description, mediaItems) {
    if (!mediaDialog || !mediaDialogContent) return;
    mediaDialogTitle.textContent = title || 'Gallery';
    mediaDialogDescription.textContent = description || '';
    const validItems = (Array.isArray(mediaItems) ? mediaItems : []).filter(function (item) { return item && item.src; });
    mediaDialogContent.innerHTML = validItems.map(function (item) {
      const caption = escapeHTML(item.caption || item.alt || '');
      if (item.type === 'video') {
        const poster = item.poster ? ` poster="${escapeHTML(item.poster)}"` : '';
        const mime = item.mimeType || 'video/mp4';
        return `<figure class="media-dialog-item"><video controls playsinline preload="metadata"${poster} aria-label="${escapeHTML(item.alt || item.caption || 'Project video')}"><source src="${escapeHTML(item.src)}" type="${escapeHTML(mime)}">Your browser does not support this video.</video>${caption ? `<figcaption>${caption}</figcaption>` : ''}<span class="media-kind">VIDEO</span></figure>`;
      }
      return `<figure class="media-dialog-item"><img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.alt || item.caption || title || 'Portfolio photo')}" loading="lazy">${caption ? `<figcaption>${caption}</figcaption>` : ''}<span class="media-kind">PHOTO</span></figure>`;
    }).join('');
    if (!validItems.length) {
      mediaDialogContent.innerHTML = '<p class="loading-note">No photos or videos have been added to this gallery yet.</p>';
    }
    if (typeof mediaDialog.showModal === 'function') mediaDialog.showModal();
    else mediaDialog.setAttribute('open', 'open');
  }

  if (projectGrid) {
    projectGrid.addEventListener('click', function (event) {
      const button = event.target.closest('[data-project-index]');
      if (!button) return;
      const project = projects[Number(button.dataset.projectIndex)];
      if (!project) return;
      openMediaDialog(project.title, getLongDescription(project) || project.description, projectMedia(project));
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
    if (mediaDialog && typeof mediaDialog.close === 'function' && mediaDialog.open) mediaDialog.close();
    else if (mediaDialog) mediaDialog.removeAttribute('open');
  }
  if (mediaDialogClose) mediaDialogClose.addEventListener('click', closeMediaDialog);
  if (mediaDialog) {
    mediaDialog.addEventListener('click', function (event) {
      if (event.target === mediaDialog) closeMediaDialog();
    });
    mediaDialog.addEventListener('close', function () {
      // Stop videos when the gallery closes so they do not continue playing in the background.
      mediaDialogContent.querySelectorAll('video').forEach(function (video) { video.pause(); });
      mediaDialogContent.innerHTML = '';
    });
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
    mainNav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  renderProjects();
  renderSchoolAlbum();

  // Subtle reveal effect also applies to projects and album cards rendered above.
  const revealTargets = document.querySelectorAll('.section-topline, .about-heading, .about-copy, .work-card, .video-copy, .video-frame, .timeline-item, .credential-item, .recognition-point, .school-album-card');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    revealTargets.forEach(function (element) {
      element.classList.add('js-reveal');
      observer.observe(element);
    });
  }
})();
