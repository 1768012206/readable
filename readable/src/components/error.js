import React, {Component} from 'react';
import {Link} from "react-router-dom"

class Error extends Component {

    render() {
        return (
            <div>
                <p className="am-article-meta blog-text-center"><span><Link to={{
                    pathname: '/'
                }}>返回主页</Link></span></p>
                <div className="am-article-meta blog-text-center"><h1
                >该帖子不存在或者已被删除！</h1></div>
            </div>
        );
    }
}

export default Error;