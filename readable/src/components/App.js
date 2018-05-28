import React, {Component} from 'react';
import "./header"
import Header from "./header";
import Footer from "./footer";
import PostWrapper from "./postWrapper";
import postDetail from "./postDetail"
import PostEdit from "./postEdit"
import PostAdd from "./postAdd"
import CommentEdit from "./commentEdit"
import {BrowserRouter, Route} from 'react-router-dom'


class App extends Component {

    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={PostWrapper}></Route>
                        <Route path="/detail/:id" component={postDetail}></Route>
                        <Route path="/postEdit/:id" component={PostEdit}></Route>
                        <Route path="/postAdd/" component={PostAdd}></Route>
                         <Route path="/commentEdit/:id" component={CommentEdit}></Route>
                        <Footer/>
                    </div>
                </BrowserRouter>
        );
    }
}

export default App;
