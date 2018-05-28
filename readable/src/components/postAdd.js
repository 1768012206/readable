import React, {Component} from 'react';
import {fetchAddPost, fetchAllCategories} from "../actions/actions"
import {getUid} from "../utils"
import {connect} from "react-redux";
import ReactDOM from "react-dom"

class PostAdd extends Component {

    componentDidMount() {
        this.props.dispatch(fetchAllCategories())
    }

    title = ""
    body = ""
    author = ""
    addPost = () => {
        var index = ReactDOM.findDOMNode(this.refs.select).selectedIndex
        var category = ReactDOM.findDOMNode(this.refs.select).options[index].innerHTML
        this.props.dispatch(fetchAddPost({
            id: getUid(24, 16),
            timestamp: Date.now(),
            title: this.title,
            body: this.body,
            author: this.author,
            category: category
        }))
    }

    render() {

        return (
            <form action="/" className="am-form" data-am-validator onSubmit={this.addPost}>
                <fieldset>
                    <legend>发表新文章</legend>
                    <div className="am-form-group">
                        <label htmlFor="doc-vld-name-2">title：</label>
                        <input type="text" id="doc-vld-name-2" minLength="3" placeholder="输入标题（至少 3 个字符）"
                               onChange={(e) => {
                                   this.title = e.target.value
                               }} required/>
                    </div>

                    <div className="am-form-group">
                        <label htmlFor="doc-vld-name-2">author：</label>
                        <input type="text" id="doc-vld-email-2" placeholder="输入作者" onChange={(e) => {
                            this.author = e.target.value
                        }} required/>
                    </div>

                    <div className="am-form-group">
                        <label htmlFor="doc-vld-name-2">body：</label>
                        <input type="text" id="doc-vld-email-2" placeholder="输入正文" onChange={(e) => {
                            this.body = e.target.value
                        }} required/>
                    </div>

                    <div className="am-form-group">
                        <label htmlFor="doc-select-1">分类</label>
                        <select id="doc-select-1" ref="select">
                            {this.props.categories.map((category) => (
                                <option value="" key={category.path}>{category.name}</option>
                            ))}
                        </select>
                        <span className="am-form-caret"></span>
                    </div>


                    <button className="am-btn am-btn-secondary" type="submit">提交</button>
                </fieldset>
            </form>
        );
    }
}


function mapStateToProps(state) {
    return {
        categories: state.categories,
        state: state
    }
}

export default connect(mapStateToProps)(PostAdd);