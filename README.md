# hugo-skeleton

A post-Hugo install collection of base HTML, SASS, and static assets

https://user-images.githubusercontent.com/10350960/144745031-f1fd209b-9331-42d5-91ac-a4698058ceae.mp4

## Prerequisites

- [Nodejs](https://nodejs.org/)
- [Hugo](https://gohugo.io/getting-started/installing)

On macOS you can do this with [Homebrew](https://brew.sh/):

```bash
brew install hugo
```

## Using hugo-skeleton

Create a new site with Hugo:

```bash
hugo new site my-site
```

Change directory into your new site:

```bash
cd my-site
```

Run `hugo-skeleton`:

```bash
npx @project-calavera/hugo-skeleton --output=.
```

The above will write the `hugo-skeleton` files into the current directory.
Run `hugo server` and you are on your way.
