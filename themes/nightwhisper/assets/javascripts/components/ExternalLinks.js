class ExternalLinks {
  constructor() {
    this.links = [].slice.call(document.links);

    this.setAttributes();
  }

  setAttributes() {
    this.links.map(link => {
      if (link.hostname && link.hostname !== location.hostname) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'nofollow');
      }
    });
  }
}

export default ExternalLinks;