const path = require("path");
const Plugin = require(path.resolve('./src/classes/Plugin'));

class ExamplePlugin extends Plugin {
    constructor() {
        super('Freedeck 6: Example Plugin', 'Freedeck', 'fd.plugins.example', false);
    }

    onInitialize () {
        console.log('Initialized example plugin.')
        this.registerNewType('Example Plugin Test', 'fd.plugins.example');
        this.createSaveData();
        this.setToSaveData('test', 'It works!');
        console.log('Saved test data: ' + this.getFromSaveData('test'));
        return true;
    }

    onButton(interaction) {
        this.pushNotification(interaction.type + ' pressed!');
        return true;
    }
}

module.exports = {
	exec: () => new ExamplePlugin(),
 	class: ExamplePlugin
}