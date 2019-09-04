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

// Lazy load images
(() => {
  let lazy = [];

  const setLazy = () => {
    lazy = document.getElementsByClassName('lazy');
  };

  const lazyLoad = () => {
    for (let i = 0; i < lazy.length; i++) {
      if (isInViewport(lazy[i])) {
        if (lazy[i].getAttribute('data-src')) {
          lazy[i].src = lazy[i].getAttribute('data-src');
          lazy[i].removeAttribute('data-src');
        }
      }
    }
    cleanLazy();
  };

  const cleanLazy = () => {
    lazy = Array.prototype.filter.call(lazy, (l) => l.getAttribute('data-src'));
  };

  const isInViewport = (el) => {
    let rect = el.getBoundingClientRect();

    return (
      rect.bottom >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const registerListener = (e, f) => {
    window.addEventListener
      ? window.addEventListener(e, f)
      : window.attachEvent('on' + e, f);
  };

  registerListener('load', setLazy);
  registerListener('load', lazyLoad);
  registerListener('scroll', lazyLoad);
  registerListener('resize', lazyLoad);
})();

// Lunr search
(() => {
  const searchIcon = document.getElementById('search-icon');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  let lunrIndex, documents;

  axios
    .get('/search.json')
    .then((response) => response.data)
    .then((json) => {
      documents = json;
      return (lunrIndex = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('contents', { boost: 5 });
        this.field('tags', { boost: 5 });
        this.field('categories', { boost: 5 });
        this.ref('permalink');
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

  const search = (query) => {
    return lunrIndex.search(query).map((result) => {
      return documents.filter((page) => {
        return page.uri === result.ref;
      })[0];
    });
  };

  const renderResults = (results) => {
    if (!results.length)
      return (searchResults.innerHTML = `
        <ul class="Search-list">
          <li class="Search-item">
            <a class="Search-link">No Results...</a>
          </li>
        </ul>
      `);
    let formattedResults = '';
    results.slice(0, 10).forEach((result) => {
      formattedResults += `
        <li class="Search-item">
          <a class="Search-link" href="${result.uri}" title="${result.title}">${result.title}</a>
        </li>
      `;
    });
    return (searchResults.innerHTML = `<ul class="Search-list">${formattedResults}</ul>`);
  };

  searchInput.addEventListener('keyup', (e) => {
    searchResults.innerHTML = '';
    let query = e.target.value;
    if (query.length < 2) return;
    let results = search(query);
    renderResults(results);
  });

  document.addEventListener('keyup', (e) => {
    if (
      e.which === 27 &&
      searchInput.classList.contains('Search-input--active')
    ) {
      searchInput.classList.remove('Search-input--active');
      searchInput.value = '';
      searchResults.innerHTML = '';
    }
  });

  searchIcon.addEventListener('click', (e) => {
    if (!searchInput.classList.contains('Search-input--active')) {
      searchInput.classList.add('Search-input--active');
      searchInput.focus();
    } else {
      searchInput.classList.remove('Search-input--active');
      searchInput.value = '';
      searchResults.innerHTML = '';
    }
  });
})();
