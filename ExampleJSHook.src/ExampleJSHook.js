const path = require("path");
const Plugin = require(path.resolve('./src/classes/Plugin'));

class ExamplePlugin extends Plugin {
    constructor() {
        // With JS Hooks, you must keep the ID of your plugin the name of the source folder.
        super('Freedeck 6: Example JS Hooks', 'Freedeck', 'ExampleJSHook', false);
    }

    onInitialize () {
        console.log('Initialized example js hook plugin.')
        this.setJSHook("JSHook.js");
        this.registerNewType('Example JSHook Test', 'fd.example.jshook');
        // This is all you need to do. Freedeck will do all of the logic for you.
        return true;
    }

}

module.exports = {
	exec: () => new ExamplePlugin(),
 	class: ExamplePlugin
}