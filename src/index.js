import store from "./store";

// console.log(store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log("Store Changed",store.getState())
})
store.dispatch({
    type: 'bugAdded', payload: {
        description: 'bug 01'
    }
})

// console.log(store.getState())
unsubscribe();
store.dispatch({
    type: 'bugRemoved', payload: {
        id: 1
    }
})

// console.log(store.getState())