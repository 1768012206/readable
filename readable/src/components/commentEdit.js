import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchComment, fetchEditComment} from "../actions/actions";

class CommentEdit extends Component {
    body = ""
    putComment = () => {
        this.props.dispatch(fetchEditComment(this.props.comment.id, {
            timestamp: Date.now(), body: this.body
        }))
    }

    componentDidMount() {
        this.props.dispatch(fetchComment(this.props.match.params.id))
    }

    render() {
        console.log(this.props)
        return (
            <form action={"/detail/" + this.props.comment.parentId} className="am-form" onSubmit={this.putComment}>
                <fieldset>
                    <legend>评论修改</legend>
                    <div className="am-form-group">
                        <label htmlFor="doc-vld-name">正文：</label>
                        <textarea id="post-content" placeholder={this.props.comment.body}
                                  onChange={(e) => this.body = e.target.value}></textarea>
                    </div>
                </fieldset>
                <button className="am-u-md-offset-1 am-u-md-1 am-btn am-btn-secondary" type="submit">提交</button>
            </form>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        comment: state.comment,

    }
}

export default connect(mapStateToProps)(CommentEdit);