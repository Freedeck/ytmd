const path = require("path");
const Plugin = require(path.resolve('./src/classes/Plugin'));

class ExampleStyleChanger extends Plugin {
    constructor() {
        super('Freedeck 6: Example Style Changer', 'Freedeck', 'ExampleStyleChanger', false);
    }

    onInitialize () {
        this.addImport("myCoolStyle.css")
        return true;
    }
}

module.exports = {
	exec: () => new ExampleStyleChanger(),
 	class: ExampleStyleChanger
}