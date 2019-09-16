require('intersection-observer');
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faGithubAlt,
  faYoutube,
  faVimeoV,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faSearch,
  faCalendarDay,
  faFolderOpen,
  faTags,
  faClock,
  faRss,
  faArchive,
  faAngleRight,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';
import lunr from 'lunr';
import axios from 'axios';

// Fontawesome
library.add(
  faTwitter,
  faGithubAlt,
  faYoutube,
  faVimeoV,
  faLinkedinIn,
  faEnvelope,
  faSearch,
  faCalendarDay,
  faFolderOpen,
  faTags,
  faClock,
  faRss,
  faArchive,
  faAngleRight,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleDoubleLeft,
);

dom.watch();

// Target blank external links
(() => {
  const links = Array.from(document.getElementsByTagName('a'));
  links.map((link) => {
    if (link.hostname && link.hostname !== location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'nofollow noreferrer noopener');
    }
  });
})();

// Lazy load images
(() => {
  document.addEventListener('DOMContentLoaded', () => {
    var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

    if ('IntersectionObserver' in window) {
      let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            // lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove('lazy');
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
      lazyImages.forEach((lazyImage) => lazyImageObserver.observe(lazyImage));
    } else {
      // Possibly fall back to a more compatible method here
    }
  });
})();

// Lunr search
(() => {
  const searchIcon = document.getElementById('search-icon');
  const search = document.querySelector('.search');
  const searchInput = search.querySelector('.search__input');
  const searchClose = search.querySelector('.search__close');
  const searchResults = search.querySelector('.search__results');
  let lunrIndex, documents;

  axios
    .get('/search.json')
    .then((response) => response.data)
    .then((json) => {
      documents = json;
      return (lunrIndex = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content', { boost: 5 });
        this.field('tags', { boost: 5 });
        this.field('categories', { boost: 5 });
        this.ref('uri');
        for (let i = 0; i < documents.length; i++) {
          this.add(documents[i]);
        }
      }));
    })
    .catch((error) => {
      console.log(
        `There was a problem fetching search indices: ${error.message}`,
      );
    });

  const executeQuery = (query) => {
    return lunrIndex.search(`${query}~1`).map((result) => {
      return documents.filter((page) => {
        return page.uri === result.ref;
      })[0];
    });
  };

  const renderResults = (results) => {
    if (!results.length)
      return (searchResults.innerHTML = `
        <ul class="search__list">
          <li class="search__item" style="padding: 1.2rem;">No Results...</li>
        </ul>
      `);
    let formattedResults = '';
    results.slice(0, 10).forEach((result) => {
      formattedResults += `
        <li class="search__item">
          <a class="search__link" href="${result.uri}" title="${result.title}">${result.title}</a>
        </li>
      `;
    });
    return (searchResults.innerHTML = `<ul class="search__list">${formattedResults}</ul>`);
  };

  const doSearch = (e) => {
    searchResults.innerHTML = '';
    let query = e.target.value;
    if (query.length < 2) return;
    let results = executeQuery(query);
    renderResults(results);
  };
  searchInput.addEventListener('keyup', doSearch);

  const toggleSearch = (e) => {
    if (e.which !== 13 && e.which !== 1) return;
    const open = search.classList.contains('search--open');
    if (!open) {
      search.classList.add('search--open');
      searchInput.focus();
    } else {
      search.classList.remove('search--open');
      searchInput.value = '';
      searchResults.innerHTML = null;
      searchIcon.focus();
    }
  };
  searchIcon.addEventListener('click', toggleSearch);
  searchClose.addEventListener('click', toggleSearch);

  const closeSearch = (e) => {
    const open = search.classList.contains('search--open');
    if (e.which === 27 && open) {
      search.classList.remove('search--open');
      searchInput.value = '';
      searchResults.innerHTML = null;
      searchIcon.focus();
    }
  };
  document.addEventListener('keydown', closeSearch);
})();
