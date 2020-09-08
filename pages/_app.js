import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import rootReducer from "../reducers";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
