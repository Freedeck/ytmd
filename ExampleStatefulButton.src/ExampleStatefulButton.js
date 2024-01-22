const path = require("path");
const Plugin = require(path.resolve('./src/classes/Plugin'));

class ExampleStatefulButton extends Plugin {
    constructor() {
        // With JS Hooks, you must keep the ID of your plugin the name of the source folder.
        super('Freedeck 6: Example Stateful Button', 'Freedeck', 'ExampleStatefulButton', false);
    }

    onInitialize () {
        console.log('Initialized example stateful button plugin.')
        this.setJSServerHook("JSHookServer.js");
        this.setJSClientHook("JSHookClient.js");
        this.setJSSocketHook("JSHookSocket.js");
        this.registerNewType('This is before the state updates', 'sfb.button0');
        // This is all you need to do. Freedeck will do all of the logic for you.
        return true;
    }

}

module.exports = {
	exec: () => new ExamplePlugin(),
 	class: ExamplePlugin
}