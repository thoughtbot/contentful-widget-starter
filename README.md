# thoughtbot Contentful Widget Starter

## About

This starter kit for a Contentful Widget follows the
[thoughtbot styleguide](https://github.com/thoughtbot/guides) and includes our
favorite front end tools.

## About Contentful

[Contentful](https://www.contentful.com/) is a SaaS headless CMS and CDN.
This generator generates a Custom Widget that works with the
[contentful/widget-sdk](https://github.com/contentful/widget-sdk).

## Includes

* [Sass (LibSass)](http://sass-lang.com):
  CSS with superpowers
* [Webpack](https://webpack.github.io/):
  Module bundler.
* [ES6 modules](http://babeljs.io/docs/learn-es2015/#modules):
  Future-forward module scoping for JavaScript.

## Directories

* Stylesheets go in the `app/stylesheets/` directory.
* JavaScript logic goes into `app/app.js`.
* Layout and markup are housed at `app/templates/app.ejs`.

This base structure is designed to get you going ASAP. Use these entry-points
for more complex templating, SASS, and JavaScript organization with nested tree
structures in their respective folders.

## Getting Started

Set up your project:

```
git clone https://github.com/thoughtbot/proteus-contentful-widget.git your-project-folder
cd your-project-folder
git remote rm origin
git remote add origin your-git-url
cp .env.sample .env
npm install
```

Fill out the required ENV variables in `.env` to interact with the
Contentful API.

Open `widget.json` and update the following fields:

* `id` to unique hasherized name (no spaces or caps)
* `name` to human-readable name
* `fieldTypes` to applicable field types for new widget

Open `webpack.config.js` and update the following fields:

* Under `plugins` and `new HtmlWebpackPlugin` update `title` to
  the human-readable name you used above in `widget.json` (it will
  become the title visible to the Contentful user.

Open `package.json` and update the following fields:

* `name` to the id used above in `widget.json`
* `author` to your author name

Create the widget in the space on Contentful:

* `npm run widget:create`

### Development Workflow

**Note** Widget must be created (see above), in order to update it or run
local dev server.

Compile assets and templates with watch:

```bash
npm run watch
```

Run local server:

```bash
npm run widget:dev
```

Then visit [http://localhost:3030/index.html](http://localhost:3030/dist/index.html).

Update widget on Contentful:

```bash
npm run widget:update
```

### Versioning Widgets

**TBD**: needs documentation & workflow.

### List all Widgets

* `npm run widget:list`

Look for the `id` to interact with it via the CLI. The `json` is hard to read,
try using an online JSON formatter.

### Delete a widget

Locate the `id` for the widget you wish to delete in the appropriate
`widget.json` file; then run:

`contentful-widget delete --space-id [SPACE_ID] --id [WIDGET_ID] --force`

If you do not have access to the `widget.json` file, you can find it from the
"List all widgets" command.

## Contributing

If you have problems, please create a
[GitHub Issue](https://github.com/thoughtbot/proteus-contentful-widget/issues).

Have a fix or want to add a feature?
[Pull Requests](https://github.com/thoughtbot/proteus-contentful-widget/pulls) are welcome!

## Credits

[![thoughtbot](http://images.thoughtbot.com/bourbon/thoughtbot-logo.svg)](http://thoughtbot.com)

thoughtbot Contentful Widget Starter is maintained and funded by [thoughtbot, inc](http://thoughtbot.com). Thank you to all of [the contributors](https://github.com/thoughtbot/proteus-contentful-widget/contributors)!

## License

Copyright © 2014–2015 [thoughtbot, inc](http://thoughtbot.com). thoughtbot Contentful Widget Starter is free software, and may be redistributed under the terms specified in the [license](https://github.com/thoughtbot/bourbon/blob/master/LICENSE.md).
