import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPost, fetchEditPost} from "../actions/actions";

class PostEdit extends Component {
    title = ""
    body = ""
    putPost = () => {
        this.props.dispatch(fetchEditPost(this.props.post.id,{title:this.title, body:this.body}))
    }

    componentDidMount() {
        this.props.dispatch(fetchPost(this.props.match.params.id))
    }

    render() {
        console.log(this.props)
        return (
            <form action="/" className="am-form" onSubmit={this.putPost}>
                <fieldset>
                    <legend>发帖修改</legend>
                    <div className="am-form-group">
                        <label htmlFor="doc-vld-name">标题：</label>
                        <input type="text" id="post-title" placeholder={this.props.post.title} className="am-form-field"
                               onChange={(e) => this.title = e.target.value}
                               required/>
                        <label htmlFor="doc-vld-name">正文：</label>
                        <textarea id="post-content" placeholder={this.props.post.body}
                                  onChange={(e) => this.body = e.target.value}></textarea>
                    </div>
                </fieldset>
                <button className="am-u-md-offset-1 am-u-md-1 am-btn am-btn-secondary" type="submit">提交</button>
            </form>
        );
    }
}

function mapStateToProps(state, props) {
    return {post:state.post}
}

export default connect(mapStateToProps)(PostEdit);