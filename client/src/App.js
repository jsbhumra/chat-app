import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <div className='font-bold text-3xl'>
      Hello
    </div>
  );
}

export default App;
