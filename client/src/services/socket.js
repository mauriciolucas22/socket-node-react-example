import connect from 'socket.io-client';

const socket = connect('http://localhost:3000');

export default socket;