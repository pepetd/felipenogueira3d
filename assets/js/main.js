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
import {} from '@fortawesome/free-regular-svg-icons';

// We are only using the user-astronaut icon
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

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();

// import lunr from 'lunr';
// import fitvids from 'fitvids';
// import ExternalLinks from './components/ExternalLinks';
// import Toggle from './components/Toggle';

// new ExternalLinks();
// new Toggle();
// fitvids();

// (() => {
//   // grab elements from the DOM
//   const searchIcon = document.getElementById('search-icon');
//   const searchInput = document.getElementById('search-input');
//   const searchResults = document.getElementById('search-results');
//   // define variables
//   let lunrIndex, documents;
//   // fetch the search index.json
//   fetch('/index.json').then(response => {
//     return response.json();
//   }).then(json => {
//     documents = json;
//     return lunrIndex = lunr(function() {
//       this.field("title", { boost: 10 })
//       this.field("description", { boost: 5 })
//       this.field("tags", { boost: 5 })
//       this.field("categories", { boost: 5 })
//       this.ref("uri")
//       for (let i = 0; i < documents.length; i++) {
//         this.add(documents[i]);
//       }
//     });
//   }).catch(error => {
//     console.log(`There was a problem fetching search indices: ${error.message}`);
//   });
//   // define search function
//   const search = (query) => {
//     return lunrIndex.search(query).map(result => {
//       return documents.filter(page => {
//         return page.uri === result.ref;
//       })[0];
//     });
//   }
//   // define renderResults function
//   const renderResults = (results) => {
//     if (!results.length)
//       return searchResults.innerHTML = `
//         <ul class="Search-list">
//           <li class="Search-item">
//             <a class="Search-link">No Results...</a>
//           </li>
//         </ul>
//       `;
//     let formattedResults = '';
//     results.slice(0, 10).forEach(result => {
//       formattedResults += `
//         <li class="Search-item">
//           <a class="Search-link" href="${result.uri}" title="${result.title}">${result.title}</a>
//         </li>
//       `;
//     });
//     return searchResults.innerHTML = `<ul class="Search-list">${formattedResults}</ul>`;
//   }
//   // bind event listeners
//   searchInput.addEventListener('keyup', (event) => {
//     searchResults.innerHTML = '';
//     // only trigger a search when 2 or more characters have been typed
//     let query = event.target.value;
//     if (query.length < 2) return;
//     let results = search(query);
//     renderResults(results);
//   });
//   document.addEventListener('keyup', (event) => {
//     if (event.keyCode === 27 && searchInput.classList.contains('Search-input--active')) {
//       searchInput.classList.remove('Search-input--active');
//       searchInput.value = '';
//       searchResults.innerHTML = '';
//     }
//   });
//   searchIcon.addEventListener('click', (event) => {
//     if (!searchInput.classList.contains('Search-input--active')) {
//       searchInput.classList.add('Search-input--active');
//       searchInput.focus();
//     } else {
//       searchInput.classList.remove('Search-input--active');
//       searchInput.value = '';
//       searchResults.innerHTML = '';
//     }
//   });
// })();
