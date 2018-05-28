import React, {Component} from 'react';
import "../images/下.png"
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {fetchVoteComment, fetchDeleteComment} from "../actions/actions";
import {timeStampToString} from "../utils";


//单条评论
class Comment extends Component {

    deleteComment = () => {
        this.props.dispatch(fetchDeleteComment(this.props.comment.id))
    }


    render() {
        return (
            <div className="am-g blog-author blog-article-margin">
                <div className="am-u-sm-9 am-u-md-9 am-u-lg-10">
                    <h3><span>作者 &nbsp;: &nbsp;</span><span className="blog-color">{this.props.comment.author}</span>
                        &nbsp;&nbsp;发表时间 &nbsp;: &nbsp;<span>{timeStampToString(this.props.comment.timestamp)}</span>
                    </h3>
                    <p>{this.props.comment.body}</p>
                    <a onClick="">vote({this.props.comment.voteScore})</a>
                    <img className="vote-icon" src={require("../images/上.png")} alt="upVote" onClick={() => (
                        this.props.dispatch(fetchVoteComment(this.props.comment.id, {option: "upVote"}))
                    )}/>
                    <img className="vote-icon" src={require("../images/下.png")} alt="downVote" onClick={() => (
                        this.props.dispatch(fetchVoteComment(this.props.comment.id, {option: "downVote"}))
                    )}/>
                    <div className="am-pagination">
                        <li className="am-pagination-prev">
                            <Link to={{
                                pathname: '/commentEdit/' + this.props.comment.id,
                            }}>
                                &laquo; 修改
                            </Link>
                        </li>
                        <li className="am-pagination-prev"><span onClick={this.deleteComment}>&laquo; 删除</span></li>
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        state: state,
        comments: state.comments
    }
}

export default connect(mapStateToProps)(Comment);