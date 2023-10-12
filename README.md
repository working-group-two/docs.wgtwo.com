# WGTwo  API docs v0

This is the project for WGTwo API docs v0, hosted at [v0.docs.wgtwo.com/](https://v0.docs.wgtwo.com/).

Prior to 2023-03-29 these docs were hosted on docs.wgtwo.com.
The actual docs.wgtwo.com code can be found in loltel/public-api-docs.

## Contributing
Check out [CONTRIBUTING.md](CONTRIBUTING.md) and add your content to [docs/](docs/)

## Prerequisites / install
- Node.js 16.x
- vips (for image processing) `brew install vips` (for any arm/Mac M1+ users)
- python 3.10

If you use pyenv and rtx/asdf then this might be enough:

```shell
brew install vips
npm install
```

If not you might also need:
```shell
rtx install python@3.10
rtx install node@16
brew install vips
npm install
```

## Run project
1. `npm run develop`

## Building
`npm run build`

## Development workflow

`npm run develop` will watch for changes and automatically refresh the site content.
If you add a new markdown file or Vue component, you might have to restart the process.
