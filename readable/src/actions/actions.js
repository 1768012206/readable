import * as readAPI from "../readAPI"

//获取所有帖子
export const GET_POSTS = 'GET_POSTS'
export function getPosts(posts) {
    return {
        type: GET_POSTS,
        posts
    }
}
export const fetchAllPosts = () => dispatch => {
    readAPI.getAll().then((posts) => dispatch(getPosts(posts)))
}


//获取所有类型
export const GET_CATEGORY = 'GET_CATEGORY'
export function getCategory(categories) {
    return {
        type: GET_CATEGORY,
        categories
    }
}
export const fetchAllCategories = () => dispatch => {
    readAPI.getCategoreis().then((categories) => dispatch(getCategory(categories)))
}


//获取单个帖子
export const GET_POST = 'GET_POST'
export function getPost(post, comments) {
    return {
        type: GET_POST,
        post,
        comments
    }
}
export const fetchPost = (id) => dispatch => {
    readAPI.getArticleById(id).then((post) => dispatch(getPost(post)))
}


//修改单个帖子
export const EDIT_POST = 'EDIT_POST'
export function editPost(post) {
    return {
        type: EDIT_POST,
        post,
    }
}
export const fetchEditPost = (id, body) => dispatch => {
    readAPI.editPost(id, body).then((post) => dispatch(editPost(post)))
}


//修改单个评论
export const EDIT_COMMENT = 'EDIT_COMMENT'
export function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        comment,
    }
}
export const fetchEditComment = (id, body) => dispatch => {
    readAPI.editComment(id, body).then((comment) => dispatch(editComment(comment)))
}


//给帖子点赞
export const VOTE_POST = 'VOTE_POST'
export function votePost(post) {
    return {
        type: VOTE_POST,
        post
    }
}
export const fetchVotePost = (id, data) => dispatch => {

    readAPI.votePost(id, data).then((post) => dispatch(votePost(post)))
}


//给评论点赞
export const VOTE_COMMENT = 'VOTE_COMMENT'
export function voteComment(comment) {
    return {
        type: VOTE_COMMENT,
        comment
    }
}
export const fetchVoteComment = (id, data) => dispatch => {

    readAPI.voteComment(id, data).then((comment) => dispatch(voteComment(comment)))
}


//获取单个帖子的所有评论
export const GET_COMMENTS = 'GET_COMMENTS'
export function getComments(comments) {

    return {
        type: GET_COMMENTS,
        comments
    }
}
export const fetchAllComments = (id) => dispatch => {
    readAPI.getCommentsById(id).then((comments) => dispatch(getComments(comments)))
}

//根据ID获取单个评论
export const GET_COMMENT = 'GET_COMMENT'
export function getComment(comment) {

    return {
        type: GET_COMMENT,
        comment
    }
}

export const fetchComment = (id) => dispatch => {
    readAPI.getCommentById(id).then((comment) => dispatch(getComment(comment)))
}


//发表评论
export const ADD_COMMENT = 'ADD_COMMENT'
export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment,
    }
}
export const fetchAddComment = (body) => dispatch => {
    readAPI.addComment(body).then((comment) => dispatch(addComment(comment)))
}

//删除评论
export const DELETE_COMMENT = 'DELETE_COMMENT'
export function deleteComment(comment) {
    return {
        type: DELETE_COMMENT,
        comment
    }
}
export const fetchDeleteComment = (id) => dispatch => {
    readAPI.deleteComment(id).then((comment) => dispatch(deleteComment(comment)))
}

//删除帖子
export const DELETE_POST = 'DELETE_POST'
export function deletePost(post) {
    return {
        type: DELETE_POST,
        post
    }
}
export const fetchDeletePost = (id) => dispatch => {
    readAPI.deletePost(id).then((post) => dispatch(deletePost(post)))
}


//发表帖子
export const ADD_POST = 'ADD_POST'
export function addPost(post) {
    return {
        type: ADD_POST,
        post,
    }
}
export const fetchAddPost = (body) => dispatch => {
    readAPI.addPost(body).then((post) => dispatch(addPost(post)))
}
