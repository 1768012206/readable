import React from 'react';
import "../assets/css/amazeui.min.css"
import "../assets/css/app.css"

const Header = () => {

    return (
        <div>
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

export default Header;
