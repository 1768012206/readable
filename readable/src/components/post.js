import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {fetchVotePost, fetchDeletePost} from "../actions/actions"
import {connect} from "react-redux";
import {timeStampToString} from "../utils"

//主页的每个帖子
class Post extends Component {


    deletePost = () => {
        this.props.dispatch(fetchDeletePost(this.props.post.id))
    }

    render() {
        return (

            <div>
                <article className="am-g blog-entry-article">
                    <div className="am-u-lg-6 am-u-md-8 am-u-sm-12 blog-entry-text">
                        <span><a href="" className="blog-color">{this.props.post.category} &nbsp;</a></span>
                        <span> {this.props.post.author} &nbsp;</span>
                        <span>{timeStampToString(this.props.post.timestamp)}</span>
                        <h1><Link to={{
                            pathname: '/detail/' + this.props.post.id,
                        }}>{this.props.post.title}</Link></h1>
                        <p>{this.props.post.body.slice(0, 50)}
                        </p>
                        <p><a href="" className="blog-continue">continue reading</a></p>
                        <div className="am-pagination">
                            <li className="am-pagination-prev">
                                <Link to={{
                                    pathname: '/postEdit/' + this.props.post.id,
                                }}>
                                    &laquo; 修改
                                </Link>
                            </li>
                            <li className="am-pagination-prev"><span onClick={this.deletePost}>&laquo; 删除</span></li>
                        </div>
                        <a onClick="">vote({this.props.post.voteScore})</a>
                        <img className="vote-icon" src={require("../images/上.png")} alt="upVote" onClick={() => (
                            this.props.dispatch(fetchVotePost(this.props.post.id, {option: "upVote"}))
                        )}/>
                        <img className="vote-icon" src={require("../images/下.png")} alt="downVote" onClick={() => (
                            this.props.dispatch(fetchVotePost(this.props.post.id, {option: "downVote"}))
                        )}/>
                    </div>
                </article>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        posts: state.posts,
        state: state
    }
}

export default connect(mapStateToProps)(Post);


















