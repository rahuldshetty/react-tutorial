const initState  = {
    posts: [
        {"id": 1, "title": "abcd1", "body":"body1"},
        {"id": 2, "title": "abcd2", "body":"body2"},
        {"id": 3, "title": "abcd3", "body":"body3"}
    ]
}
const rootReducer = (state = initState, action) => {
    if (action.type=="DELETE_POST"){
        let newPosts = state.posts.filter(post => {
            return action.id != post.id
        }) 
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer