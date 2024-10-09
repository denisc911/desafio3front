import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Importa el Provider de react-redux
import { store } from './redux/store.js'; // Asegúrate de que el store está correctamente importado
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
