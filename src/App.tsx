import { Routes, Route } from 'react-router-dom';
import './App.css';
import { BASE_PATH, TABLE } from './constants/path';
import Layout from './components/Layout';
import TablePages from './pages/TablePages';

function App() {
    return (
        <Routes>
            <Route path={BASE_PATH} element={<Layout />}>
                <Route path={TABLE} element={<TablePages />} />
            </Route>
        </Routes>
    );
}

export default App;
