module.exports = class Plugin {
    name;
    author;
    id;
    disabled;
    hasInit = false;

    constructor(name, author, id, disabled = false) {
        this.name = name;
        this.author = author;
        this.id = id;
        this.disabled = disabled;
        this.types = [];
        if (this.disabled) return;
        this.hasInit = this.onInitialize();
        if (!this.hasInit) {
            console.log('Plugin didn\'t initialize?');
        }
    }

    pushNotification(value, options=null) {
        if (!options) console.log('[DEV ENV] Notification body: ' + value)
        if (options != {}) {
            if (options.image) {
                console.log('[DEV ENV] Notification image: ' + options.image, 'Notification body: ' + value);
            }
        }
    }

    registerNewType (name, type) {
        console.log('Registered new type: ' + name + ' (' + type + ')');
    }

    onInitialize () {
        return true;
    }

    onButton (interaction) {
        return true;
    }
}
