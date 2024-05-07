import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import HomeV4 from './components/home-v4';
import About from './components/about';
import Service from './components/service';
import ServiceV2 from './components/service-v2';
import ServiceDetails from './components/service-details';
import PortfolioStandard from './components/portfolio-standard';
import PortfolioFull from './components/portfolio-full';
import PortfolioMasonary from './components/portfolio-masonary';
import PortfolioDetails from './components/portfolio-details';
import Pricing from './components/pricing';
import Faq from './components/faq';
import Testimonial from './components/testimonial';
import Team from './components/team';
import BlogGrid from './components/blog-grid';
import BlogList from './components/blog-list';
import BlogDetails from './components/blog-details';
import Contact from './components/contact';


class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    {/* <Route exact path="/home-v2" component={HomeV2} />
	                    <Route exact path="/home-v3" component={HomeV3} />
	                    <Route exact path="/home-v4" component={HomeV4} /> */}
	                    <Route path="/about" component={About} />
	                    <Route path="/service" component={Service} />
	                    {/* <Route path="/service-v2" component={ServiceV2} />
	                    <Route path="/service-details" component={ServiceDetails} /> */}
	                    <Route path="/portfolio-standard" component={PortfolioStandard} />
	                    <Route path="/portfolio-full" component={PortfolioFull} />
	                    <Route path="/portfolio-masonary" component={PortfolioMasonary} />
	                    <Route path="/portfolio-details" component={PortfolioDetails} />
	                    <Route path="/pricing" component={Pricing} />
	                    <Route path="/faq" component={Faq} />
	                    <Route path="/testimonial" component={Testimonial} />
	                    <Route path="/team" component={Team} />
	                    <Route path="/blog-grid" component={BlogGrid} />
	                    {/* <Route path="/blog-list" component={BlogList} />
	                    <Route path="/blog-details" component={BlogDetails} /> */}
	                    <Route path="/contact" component={Contact} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('bizkar'));
