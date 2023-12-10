# Freedeck Plugin Dev Environment

[This is meant for FD6!](https://github.com/Freedeck/6/)
Freedeck6 (FD6) is going to use a fully revamped plugin system:

- Add your own dependencies with a Node project in ASAR format!
- uhh
- Plugins are more powerful

Anyways, to use this, it's pretty self explanatory. Take a look at any folder with .src at the end, you'll want to copy that. ExamplePlugin is a nice and clean base.  

In `index.js`, you'll want to change these lines to reflect your plugin:

```js
let name = 'ExamplePlugin'
let bundleName = name + '.Freedeck'
``` 

(except the last one if you want .Freedeck after the name.)

> Example: if you have a folder called 'MyAmazingPlugin.src', change the `name` variable to `MyAmazingPlugin` and let FreedeckDevEnv do the rest for you!

## Running

Running a plugin uses a simulated Plugin class. This means you don't need to keep restarting Freedeck to test changes, unless it's something like a button press.  

To build and run your plugin in the dev env, just do `node index.js` and let FreedeckDevEnv do the rest!  

Very much magic.
