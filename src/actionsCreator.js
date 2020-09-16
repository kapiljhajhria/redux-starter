import * as actions from "./actiontTypes";


// export function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED, payload: {
//             description: description
//         }
//     }
// }

// export function bugRemoved(bugId) {
//     return {
//         type: actions.BUG_REMOVED, payload: {
//             id: bugId
//         }
//     }
// }

export const bugAdded = description => ({
    type: actions.BUG_ADDED, payload: {
        description: description
    }
})
export  const bugRemoved = bugId =>( {
    type: actions.BUG_REMOVED, payload: {
        id: bugId
    }
})
export  const bugResolved =bugId =>({
    type:actions.BUG_RESOLVED,payload:{
        id:bugId
    }
})