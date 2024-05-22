import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import About from './components/about';
import Service from './components/service';
import PortfolioStandard from './components/portfolio-standard';
import Pricing from './components/pricing';
import Testimonial from './components/testimonial';
import Contact from './components/contact';
import FreeQuote from './components/freeQuote';


class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route path="/about" component={About} />
	                    <Route path="/service" component={Service} />
	                    <Route path="/portfolio-standard" component={PortfolioStandard} />
	                    <Route path="/pricing" component={Pricing} />
						<Route path="/free-quote" component={FreeQuote}/>
	                    <Route path="/testimonial" component={Testimonial} />
	                    <Route path="/contact" component={Contact} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('flikrinnovation'));
