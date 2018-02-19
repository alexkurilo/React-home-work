import React, { Component } from 'react'

import {Router, Route, Link} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"

import HomeWork1 from './HomeWork#1'
import HomeWork2 from './HomeWork#2'

const history = createBrowserHistory();

class App extends Component {
    getDataFromRouter = function() {
        return [{
            path: "/homeWork1",
            nameLink: 'Click the link to view HomeWork2',
            nameComponent: 'HomeWork1'
        },
        {
            path: "/homeWork2",
            nameLink: 'Click the link to view HomeWork1',
            nameComponent: 'HomeWork2'
        }];
    }
    render() {
        return (
            <Router history={history}>
                <div>
                    <h3>
                        <ul>
                            <li>
                                <Link to="/homeWork1">
                                    Click the link to view HomeWork1
                                </Link>
                            </li>
                            <li>
                                <Link to="/homeWork2">
                                    Click the link to view HomeWork2
                                </Link>
                            </li>
                        </ul>
                    </h3>
                    <h2>
                      <Route exact path="/homeWork1" component={HomeWork1}/>
                      <Route exact path="/homeWork2" component={HomeWork2}/>
                    </h2>
                </div>
          </Router>
      );
  }
}

export default App;


