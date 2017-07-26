import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
    render() {

        let heading = "Soaring to the new heights";
        let subheading ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere nec sem quis congue. Morbi at rutrum enim.";

        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                { heading }
                            </h1>
                            <div className="is-two-thirds column is-paddingless">
                                <h2 className="subtitle">
                                    { subheading }
                                </h2>
                            </div>
                            <router-link to="learn" className="button is-large is-primary" id="learn">Learn more</router-link>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="columns pd is-desktop">
                            <div className="column is-1 has-text-centered">
                                <i className="fa fa-5x fa-cog is-primary"></i>
                            </div>
                            <div className="column is-one-third-desktop">
                                <p className="title">
                                    <strong>We provide superior logistics so that your business can succeed in a crazy world </strong>
                                </p>
                            </div>
                            <div className="column">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere nec sem quis congue. Morbi at rutrum enim</p>
                            </div>
                        </div>
                    </div>
                    <div className="columns pd">
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <p className="title">One title Nam posuere nec sem quis congue. </p>
                                    <p className="subtitle">- Samuel Diogo</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <p className="title">Centered title Nam posuere nec sem quis congue. </p>
                                    <p className="subtitle">- Samuel Diogo</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <p className="title">last title Nam posuere nec sem quis congue. </p>
                                    <p className="subtitle">- Samuel Diogo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;