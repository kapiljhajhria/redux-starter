import store from "./store";
import {bugAdded, bugRemoved, bugResolved} from "./actionsCreator";

// console.log(store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("Store Changed", store.getState())
})
store.dispatch(bugAdded("bug 01"))

store.dispatch(bugResolved(1));
// console.log(store.getState())
// unsubscribe();
store.dispatch(bugRemoved(1))

// console.log(store.getState())