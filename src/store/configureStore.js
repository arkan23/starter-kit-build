import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from '../reducers';
import createLogger from './logger';
// import saveUser from './user';

export default function configureStore(initialState) {
    const middleware = [];

    let enhancer;

    if (__DEV__) {
        // middleware.push(saveUser());
        middleware.push(createLogger());

        // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
        let devToolsExtension = f => f;
        if (process.env.BROWSER && window.devToolsExtension) {
            devToolsExtension = window.devToolsExtension();
        }

        enhancer = compose(applyMiddleware(...middleware), devToolsExtension);
    } else {
        enhancer = applyMiddleware(...middleware);
    }

    const rootReducer = createRootReducer();

    // See https://github.com/reactjs/redux/releases/tag/v3.1.0
    const store = createStore(rootReducer, initialState, enhancer);

    // Listen All user actions

    /* store.subscribe(() => {
        console.log(`store data:  ${store.pageActions.userData}`);
    }); */
    // store.subscribe(() => {console.log('listen ALL you action')});

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (__DEV__ && module.hot) {
        module.hot.accept('../reducers', () =>
            // eslint-disable-next-line global-require
            store.replaceReducer(require('../reducers').default),
        );
    }

    return store;
}
