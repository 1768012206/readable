import React, {Component} from 'react';
import "../assets/css/amazeui.min.css"
import "../assets/css/app.css"

class Header extends Component {

    render() {
        return (
            <div>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
                <meta name="renderer" content="webkit"/>
                <div className="am-g am-g-fixed blog-fixed blog-text-center blog-header">
                    <div className="am-u-sm-8 am-u-sm-centered">
                        <img width="200" src="http://s.amazeui.org/media/i/brand/amazeui-b.png" alt="Amaze UI Logo"/>
                        <h2 className="am-hide-sm-only">Readable Project</h2>
                    </div>
                </div>
                <hr/>
            </div>

        );
    }
}

export default Header;
