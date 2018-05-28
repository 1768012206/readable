import React, {Component} from 'react';
import Post from "./post"
import {fetchAllPosts, fetchAllCategories} from "../actions/actions"
import {connect} from "react-redux"
import {Dropdown} from "amazeui-react"
import {Link} from 'react-router-dom'

//所有帖子展示
class PostWrapper extends Component {

    constructor() {
        super();
        this.state = {
            isFresh: 0,
        }
    }

    category = ""
    sorted = ""

    componentDidMount() {
        this.props.dispatch(fetchAllPosts())
        this.props.dispatch(fetchAllCategories())
    }

    sortByCategories = () => {
        for (let i = this.props.posts.length - 1; i >= 0; i--) {
            this.props.posts[i]['hidden'] = false
        }

        for (let i = this.props.posts.length - 1; i >= 0; i--) {
            if (this.category !== "")
                if (this.props.posts[i].category === this.category)
                    this.props.posts[i]['hidden'] = true
        }
        this.setState({isFresh: this.state.isFresh + 1})
    }

    sortByTime = () => {
        let temp;
        for (let i = 0; i < this.props.posts.length; i++) {
            for (let j = i; j < this.props.posts.length; j++) {
                if (this.props.posts[j].timestamp > this.props.posts[i].timestamp) {
                    temp = this.props.posts[i]
                    this.props.posts[i] = this.props.posts[j]
                    this.props.posts[j] = temp
                }
            }
        }
        this.setState({isFresh: this.state.isFresh + 1})
    }


    sortByVoteScore = () => {
        let temp;
        for (let i = 0; i < this.props.posts.length; i++) {
            for (let j = i; j < this.props.posts.length; j++) {
                if (this.props.posts[j].voteScore > this.props.posts[i].voteScore) {
                    temp = this.props.posts[i]
                    this.props.posts[i] = this.props.posts[j]
                    this.props.posts[j] = temp
                }
            }
        }
        this.setState({isFresh: this.state.isFresh + 1})
    }

    render() {
        return (
            <div>
                <div className="am-g blog-entry-article">
                    <div className="am-u-lg-1 am-u-md-1 am-u-sm-1 blog-entry-text">
                        <Dropdown title="类型" btnStyle="am-dropdown-toggle">
                            {
                                this.props.categories.map(cate =>
                                    <Dropdown.Item key={cate.name}
                                                   onClick={(e) => {
                                                       this.category = e.target.innerHTML
                                                       this.sortByCategories()
                                                   }}>{cate.name}</Dropdown.Item>
                                )
                            }
                        </Dropdown>
                    </div>
                    <div className="am-u-lg-10 am-u-md-10 am-u-sm-10 blog-entry-text">
                        <Dropdown title="排序" btnStyle="am-dropdown-toggle">
                            <Dropdown.Item ref="time"
                                           onClick={(e) => {
                                               this.sorted = e.target.innerHTML
                                               this.sortByTime()
                                           }}>时间</Dropdown.Item>
                            <Dropdown.Item ref="voteScore"
                                           onClick={(e) => {
                                               this.sorted = e.target.innerHTML
                                               this.sortByVoteScore()
                                           }}>点赞数</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="am-u-lg-1 am-u-md-1 am-u-sm-1 am-pagination" style={{marginTop: "-0.05%"}}>
                        <li className="am-pagination-prev">
                            <Link to={{
                                pathname: '/postAdd/',
                            }}>
                                &laquo; 发帖
                            </Link>
                        </li>
                    </div>
                </div>
                <div className="am-g am-g-fixed blog-fixed">
                    <div className="am-u-md-12 am-u-sm-12">
                        {this.props.posts.map(post => {
                            if (post.hidden !== false)
                                return <Post key={post.id} post={post}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        categories: state.categories,
        state: state
    }
}

export default connect(mapStateToProps)(PostWrapper);
