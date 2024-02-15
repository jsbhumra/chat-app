import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './pages/chat';
import socketIO from 'socket.io-client';
const socket = socketIO.connect(process.env.REACT_BACKEND_URL || "http://localhost:3001");

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Chat socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
