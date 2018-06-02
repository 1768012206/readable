import {
    VOTE_COMMENT,
    GET_POST,
    GET_POSTS,
    VOTE_POST,
    GET_COMMENTS,
    EDIT_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    ADD_POST,
    GET_CATEGORY,
    DELETE_POST,
    EDIT_COMMENT,
    GET_COMMENT
} from "../actions/actions";

const initialPostState = {
    posts: [],
    comments: [],
    post: [],
    comment: [],
    categories: []
}

function posts(state = initialPostState, action) {
    var temp;
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case GET_POST:
            let error = ""
            if(action.post.error || JSON.stringify(action.post)==='{}') {
                error = true
            }
            return {
                ...state,
                post: action.post,
                comments: state.comments,
                error: error
            }
        case GET_COMMENT:
            return {
                ...state,
                comment: action.comment,
            }
        case EDIT_POST:
            temp = Object.entries(state)[0][1]
            temp.map((post) => {
                if (post.id === action.post.id)
                    post.voteScore = action.post.voteScore
            })
            return {
                ...state,
                posts: temp

            }
        case EDIT_COMMENT:
            return {
                ...state,

            }
        case ADD_POST:
            state.posts.push(action.post)
            return {
                ...state,
            }
        case GET_COMMENTS:
            return {
                ...state,
                post: state.post,
                comments: action.comments
            }
        case GET_CATEGORY:
            return {
                ...state,
                categories: action.categories
            }
        case VOTE_POST:
            temp = Object.entries(state)[0][1]
            temp.map((post) => {
                if (post.id === action.post.id)
                    post.voteScore = action.post.voteScore
            })
            return {
                ...state,
                post: temp

            }
        case VOTE_COMMENT:
            temp = state.comments
            temp.map((comment) => {
                if (comment.id === action.comment.id)
                    comment.voteScore = action.comment.voteScore
            })
            return {
                ...state,
                comments: temp

            }
        case ADD_COMMENT:
            state.comments.push(action.comment)
            return {
                ...state,
            }
        case DELETE_COMMENT:
            for (var i = state.comments.length - 1; i >= 0; i--) {
                if (state.comments[i].id === action.comment.id) {
                    state.comments.splice(i, 1)
                }
            }
            return {
                ...state
            }
        case DELETE_POST:
            for (i = state.posts.length - 1; i >= 0; i--) {
                if (state.posts[i].id === action.post.id) {
                    state.posts.splice(i, 1)
                }
            }
            return {
                ...state
            }
        default:
            return state
    }
}


export default posts
