import './App.css';

// import Login from './components/login/Login';
import AppRouter from './router/AppRouter';
import 'tailwindcss/tailwind.css';
import STORAGE, { getStorage } from "./lib/storage"
import BoxChat from './Page/BoxChat';

function App() {
  const isLogin = getStorage(STORAGE.TOKEN)
  return (
    <div className='full-body'>
      I am bot
      <BoxChat />
    </div>
  );
}

export default App;
