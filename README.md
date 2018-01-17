# Ember Foundation SASS Addon

This addon automates the steps to include SASS with [Foundation 5.5.3](https://github.com/zurb/foundation) into your ember-cli app using [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) as well as simplifying the customization of the settings and which components you want to include.

It also installs [broccoli-clean-css](https://github.com/shinnn/broccoli-clean-css), purely for convenience since it generally seems to lead to the best minification results: http://goalsmashers.github.io/css-minification-benchmark/.

## Usage
### Installation
* `ember install ember-foundation-sass`

### Installation (ember-cli < 1.0.0)
* `npm install ember-foundation-sass --save-dev`
* `ember g ember-foundation-sass`
* If you clone an existing project with this addon, just run `npm i && bower i`.

### What It Does
Running the blueprint installs **Foundation 5.5.3** via Bower, copies over the `_settings.scss` as well as the `foundation.scss` to your `app/styles` folder.
It also creates a default `app.scss` that imports the `_settings.scss` as well as the `_foundation.scss`, so you can serve the app immediately. Lastly, it installs the already mentioned dependencies [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) and [broccoli-clean-css](https://github.com/shinnn/broccoli-clean-css).

This setup is made so you don't have to worry about how to customize Foundation, but just lets you do it. Furthermore [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) helps that the foundation `import` statements (in the `_foundation.scss`) 'just' work.


### Options

This addon provides an API to simplify adding the Foundation JavaScript modules and dependencies:

```js
//ember-cli-build.js
//Includes modernizr, fastclick and the full foundation.js with all modules
var app = new EmberApp({
  'ember-foundation-sass': {
    'modernizr': true,
    'fastclick': true,
    'foundationJs': 'all'
  },
  'sassOptions': { //include foundation scss
    'includePaths': [
      'bower_components/foundation-sites/scss'
    ]
  }
});

//Includes the core foundation.js with the tab, topbar, orbit and dropdown module
var app = new EmberApp({
  'ember-foundation-sass': {
    'foundationJs': ['tab', 'topbar', 'orbit', 'dropdown']
  },
  'sassOptions': { //include foundation scss
    'includePaths': [
      'bower_components/foundation-sites/scss'
    ]
  }
});

//Includes just the core foundation.js without any modules
var app = new EmberApp({
  'ember-foundation-sass': {
    'foundationJs': true
  },
  'sassOptions': { //include foundation scss
    'includePaths': [
      'bower_components/foundation-sites/scss'
    ]
  }
});
```

Whenever you use any foundation JS module in your code, make sure that component includes the following:
```js
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.$().foundation(); //or Ember.$(document).foundation();
  }
});
```
### Credits/Info

This addon is copy of ember-cli-foundation-sass. Since the repository is no more maintained and not supported by latest version of ember-cli so I have created ember-foundation-sass to support latest ember-cli version.
