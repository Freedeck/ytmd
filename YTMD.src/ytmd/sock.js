module.exports = (socket, io, instance) => {
	socket.on('yvo', () => {
		io.emit('yvo',instance.ytmdVol());
	})
	instance.stateChange = (...data) => {
		const track = data[0];
		const player = data[1];
		io.emit('_t', `Playing: ${track.title} by ${track.author} (${player.seekbarCurrentPositionHuman}/${track.durationHuman})`);
	}
}