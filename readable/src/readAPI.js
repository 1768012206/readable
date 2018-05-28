const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

//获取分类
export const getCategoreis = () =>
    fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories)

//通过分类获取帖子
export const getAllByCategoreis = (category) =>
    fetch(`${api}/${category}/posts`, {headers})
        .then(res => res.json())
        .then(data => data)

//通过id获取帖子
export const getArticleById = (id) =>
    fetch(`${api}/posts/${id}`, {headers})
        .then(res => res.json())
        .then(data => data)

//通过id获取评论
export const getCommentById = (id) =>
    fetch(`${api}/comments/${id}`, {headers})
        .then(res => res.json())
        .then(data => data)


//通过帖子id获取所有评论
export const getCommentsById = (id) =>
    fetch(`${api}/posts/${id}/comments`, {headers})
        .then(res => res.json())
        .then(data => data)


//获取所有帖子
export const getAll = () =>
    fetch(`${api}/posts`, {headers})
        .then(res => res.json())
        .then(data => data)

export const update = (book, shelf) =>
    fetch(`${api}/books/${book.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({shelf})
    }).then(res => res.json())

//增加新帖子
export const addNew = (content) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({content})
    }).then(res => res.json())

//删除帖子
export const Delete = (id) =>
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => data.books)

//评论投票
export const voteComment = (id, bodyContent) =>
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())
        .then(data => data)

//帖子投票
export const votePost = (id, bodyContent) =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())

//修改帖子
export const editPost = (id, bodyContent) =>
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())


//修改评论
export const editComment = (id, bodyContent) =>
    fetch(`${api}/comments/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())


//发帖
export const addPost = (bodyContent) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())

// 添加评论
export const addComment = (bodyContent) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())

//删除评论
export const deleteComment = (id) =>
    fetch(`${api}/comments/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => data)

//删除帖子
export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => data)