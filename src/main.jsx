import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from './redux/store';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </StrictMode>
)
