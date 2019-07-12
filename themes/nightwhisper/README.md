## Usage

This theme expects the following site layout.
```
.
└── content
    ├── posts
    |   ├── post1.md
    |   └── post2.md
    ├── pages
    |   └── about.md
    ├── projects
        ├── project1.md
        └── project2.md
```

## Configuration

### Hugo

Here is an example of what your site's `config.toml` could look like.

``` toml
# hostname (and path) to the root eg. http://spf13.com/
baseurl = "https://example.com/"

# Language
languageCode = "en-us"

# Site title
title = "Nightwhisper"

# Theme to use (located in /themes/THEMENAME/)
theme = "nightwhisper"

# Copyright
copyright = "2016 yourdomainname.com"

# Pagination
paginate = 5
paginatePath = "/page"

# Enable Disqus integration
disqusShortname = "your_disqus_shortname"

# Default config format
metaDataFormat = "yaml"

# Code highlighting options
PygmentsCodeFences = true

[permalinks]
  posts = "/posts/:title/"
  projects = "/projects/:title/"
  pages = "/:title/"

[taxonomies]
  tag = "tags"
  category = "categories"

[params]
  description = "An example site using the hudux theme."
  logo = "logo.png"
  linkedin = "https://linkedin.com/in/XXX/"
  github = "https://github.com/XXX"
  email = "example.email@example.com"
  twitter = "https://twitter.com/XXX"
  vimeo = "https://vimeo.com/XXX"
  youtube = "https://youtube.com/XXX"

# Site menu - internal links
[[menu.site]]
  name = "Blog"
  url = "/"
  weight = 1
[[menu.site]]
  name = "Projects"
  url = "/projects"
  weight = 2
[[menu.site]]
  name = "Development"
  url = "/categories/development"
  weight = 3
[[menu.site]]
  name = "Tutorials"
  url = "/categories/tutorial"
  weight = 4
[[menu.site]]
  name = "About"
  url = "/about"
  weight = 5
```
