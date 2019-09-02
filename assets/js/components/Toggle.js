class Toggle {
  constructor() {
    this.btn = document.querySelector('.Header-toggle');
    this.socialNav = document.querySelector('.SocialNav');
    this.siteNav = document.querySelector('.SiteNav');

    this.toggle = this.toggle.bind(this);
    this.btn.addEventListener('click', this.toggle);
  }

  toggle() {
    this.btn.classList.toggle('js-active');
    this.socialNav.classList.toggle('js-open');
    this.siteNav.classList.toggle('js-open');
  }
}

export default Toggle;