import { createStore } from 'redux'
import reducer from './reducers'

// import { createStore, applyMiddleware, compose } from 'redux'
// import ReduxThunk from 'redux-thunk'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, enhancer)

export default store



// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//
// const enhancer = compose(
//   applyMiddleware(ReduxThunk),
//   devTools
// )
