import React, {Component} from 'react';
import "./header"
import Comment from "../components/comment"
import {fetchAllComments, fetchPost, fetchAddComment} from "../actions/actions"
import {connect} from "react-redux";
import {getUid, timeStampToString, sortByTime, sortByVoteScore} from "../utils"
import ReactDOM from "react-dom"
import {Dropdown} from "amazeui-react"
import {Link, Redirect} from 'react-router-dom'

//每个帖子的详情
class PostDetail extends Component {

    state = {
        isFresh: 1
    }
    author = ""
    body = ""
    sorted = ""

    addComment = () => {
        this.props.dispatch(fetchAddComment({
            id: getUid(24, 16),
            timestamp: Date.now(),
            body: this.body,
            author: this.author,
            parentId: this.props.post.id
        }))
        ReactDOM.findDOMNode(this.refs.author).value = ""
        ReactDOM.findDOMNode(this.refs.body).value = ""
    }

    componentDidMount() {
        this.props.dispatch(fetchAllComments(this.props.match.params.id))
        this.props.dispatch(fetchPost(this.props.match.params.id))
    }

    // sortByTime = () => {
    //     let temp;
    //     for (let i = 0; i < this.props.comments.length; i++) {
    //         for (let j = i; j < this.props.comments.length; j++) {
    //             if (this.props.comments[j].timestamp > this.props.comments[i].timestamp) {
    //                 temp = this.props.comments[i]
    //                 this.props.comments[i] = this.props.comments[j]
    //                 this.props.comments[j] = temp
    //             }
    //         }
    //     }
    //     this.setState({isFresh: this.state.isFresh + 1})
    // }
    //
    // sortByVoteScore = () => {
    //     let temp;
    //     for (let i = 0; i < this.props.comments.length; i++) {
    //         for (let j = i; j < this.props.comments.length; j++) {
    //             if (this.props.comments[j].voteScore > this.props.comments[i].voteScore) {
    //                 temp = this.props.comments[i]
    //                 this.props.comments[i] = this.props.comments[j]
    //                 this.props.comments[j] = temp
    //             }
    //         }
    //     }
    //     this.setState({isFresh: this.state.isFresh + 1})
    // }

    render() {
        if (this.props.error) {
            return (
                <Redirect push to="/404"/>
            )
        } else
            return (
                <div>
                    <article className="am-article blog-article-p">
                        <div className="am-article-hd">

                            <h1 className="am-article-title blog-text-center">{this.props.post.title}</h1>
                            <p className="am-article-meta blog-text-center">
                                <span><a href="" className="blog-color">{this.props.post.category} &nbsp;</a></span>-
                                <span>@{this.props.post.author} &nbsp;</span>-
                                <span>{timeStampToString(this.props.post.timestamp)}--</span>
                                <span><Link to={{
                                    pathname: '/'
                                }}>返回主页</Link></span>
                            </p>
                        </div>
                        <div className="am-article-bd">
                            <p className="am-article-lead">
                                {this.props.post.body}
                            </p>
                        </div>
                    </article>
                    <div className="am-u-lg-10 am-u-md-10 am-u-sm-10 blog-entry-text" style={{marginTop: -40}}>
                        <Dropdown title="排序" btnStyle="am-dropdown-toggle">
                            <Dropdown.Item ref="time"
                                           onClick={(e) => {
                                               this.sorted = e.target.innerHTML
                                               sortByTime(this.props.comments)
                                               console.log("111")
                                               this.setState({isFresh: this.state.isFresh + 1})
                                           }}>时间</Dropdown.Item>
                            <Dropdown.Item ref="voteScore"
                                           onClick={(e) => {
                                               this.sorted = e.target.innerHTML
                                               sortByVoteScore(this.props.comments)
                                               this.setState({isFresh: this.state.isFresh + 1})
                                           }}>点赞数</Dropdown.Item>
                        </Dropdown>
                    </div>
                    {this.props.comments.map((comment) => (
                        <Comment key={comment.id} comment={comment}/>
                    ))}
                    <div className="am-form am-g">
                        <h3 className="blog-comment">评论</h3>
                        <fieldset>
                            <div className="am-form-group am-u-sm-4 blog-clear-left">
                                <input type="text" className="" placeholder="作者" ref="author"
                                       onChange={(e) => this.author = e.target.value}/>
                            </div>

                            <div className="am-form-group">
                            <textarea className="" rows="5" placeholder="一字千金" ref="body"
                                      onChange={(e) => this.body = e.target.value}></textarea>
                            </div>

                            <p>
                                <button className="am-btn am-btn-default" onClick={this.addComment}>发表评论</button>
                            </p>
                        </fieldset>
                    </div>
                </div>
            );
    }
}

function mapStateToProps(state, props) {
    return {
        comments: state.comments,
        post: state.post,
        state: state,
        error: state.error
    }
}

export default connect(mapStateToProps)(PostDetail);
