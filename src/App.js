import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactList from './pages/ContactList';
import { Provider } from 'react-redux';
import store from './store';
import SingleContact from './pages/SingleContact';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-list' element={<ContactList />} />
        <Route path='/contact-list/:contactId' element={<SingleContact/>} />
      </Routes>
    </Provider>
  );
}

export default App;
