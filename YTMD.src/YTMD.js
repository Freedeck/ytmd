const path = require("path");
const Plugin = require(path.resolve('./src/classes/Plugin'));

class YTMD extends Plugin {
    constructor() {
        // With JS Hooks, you must keep the ID of your plugin the name of the source folder.
        super('YouTube Music Desktop Controller', 'Freedeck', 'YTMD', false);
        this.version = '1.0.0';
    }

    query(url, pw, action='') {
        return new Promise((resolvePro, rej) => {
            fetch(url + '/query' + (action!=''?'/' + action:''), {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + pw
                }
            }).then((res) => res.json()).then((res)=> {
                resolvePro(res)
            }).catch((err) => {
                rej(err)
            })
        })
    }

    command(url, pw, action, value="") {
        return new Promise((resolvePro, rej) => {
            fetch(url + '/query', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + pw
                },
                body: JSON.stringify({
                    command: action,
                    value
                })
            }).then((res) => res.json()).then((res)=>{
                resolvePro(res)
            }).catch((err) => {
                rej(err)
            })
        })
    }
    onInitialize () {
        let lastSong = '';
        const simple = [
            {
                name: 'Play/Pause',
                command: 'track-pause'
            },
            {
                name: 'Next',
                command: 'track-next'
            },
            {
                name: 'Previous',
                command: 'track-previous'
            },
            {
                name: 'Volume Up',
                command: 'player-volume-up'
            },
            {
                name: 'Volume Down',
                command: 'player-volume-down'
            },
            {
                name: 'Forward 10s',
                command: 'player-forward'
            },
            {
                name: 'Rewind 10s',
                command: 'player-rewind'
            },
            {
                name: 'Toggle Shuffle',
                command: 'player-shuffle'
            },
        ]
        simple.forEach((button) => {
            this.registerNewType('YTMD: Do ' + button.name, 'ytmd.cmd.' + button.command)
        });
        this.setJSClientHook('ytmd/mainHook.js');
        this.setJSServerHook('ytmd/mainHook.js');
        this.setJSSocketHook('ytmd/sock.js');

        setInterval(() => {
            this.query('http://localhost:9863', 'G7AQT', 'track').then((res1) => {
                this.query('http://localhost:9863', 'G7AQT', 'player').then((res2) => {
                    if(lastSong != res1.title+'-'+res1.author) {
                        this.pushNotification('Now playing: ' + res1.title + ' by ' + res1.author, {
                            image: res1.image
                        })
                    }
                    lastSong = res1.title+'-'+res1.author;
                    this.stateChange(res1, res2)
                })
            })
        }, 1500);
        // This is all you need to do. Freedeck will do all of the logic for you.
        return true;
    }

    onButton(interaction) {
        if (interaction.type.includes('ytmd.cmd.')) {
            this.command('http://localhost:9863', 'G7AQT', interaction.type.split('ytmd.cmd.')[1]).then((res) => {
                console.log('Sent command to YTMD!');
            })
            .catch((err) => {
                console.error(err)
            })
        }
    }

    stateChange(){}
}

module.exports = {
	exec: () => new YTMD(),
 	class: YTMD
}