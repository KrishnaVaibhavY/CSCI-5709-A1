import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Carousel from '../components/slide';


const Body = () => {   


    return (
        <div className='m-0 p-0'>

            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="mb-3">Top Resturants This Month</h3>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23" />
                                        <div className="card-body">
                                            <h4 className="card-title">Beach Restautrent</h4>
                                            <p className="card-text">Enjoy the beach as you eat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129" />
                                        <div className="card-body">
                                            <h4 className="card-title">Sunset</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6" />
                                        <div className="card-body">
                                            <h4 className="card-title">Hills</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
<section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-3 mb-3">
                <div className="card border border-3 border-warning rounded-lg shadow-lg type">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <h5 className="card-title">Buffet</h5>
                            <p className="card-text">Enjoy a wide variety of dishes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card border border-3 border-warning rounded-lg shadow-lg type">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <h5 className="card-title">Pure Veg</h5>
                            <p className="card-text">Experience the best vegetarian cuisine.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card border border-3 border-warning rounded-lg shadow-lg type">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <h5 className="card-title">Must Visit</h5>
                            <p className="card-text">Discover the must-visit restaurants in our city.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card border border-3 border-warning rounded-lg shadow-lg type">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <h5 className="card-title">Happy Hours</h5>
                            <p className="card-text">Enjoy special discounts and offers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card border border-3 border-warning rounded-lg shadow-lg type">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <h5 className="card-title">New Restaurants</h5>
                            <p className="card-text">Explore the latest additions of restaurant.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card border border-3 border-warning rounded-lg shadow-lg type">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <h5 className="card-title">Meat Fest</h5>
                            <p className="card-text">Experience with a variety of meats.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card border border-3 border-warning rounded-lg shadow-lg type">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <h5 className="card-title">Sea Food</h5>
                            <p className="card-text">Treat yourself to seafood from the ocean.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card border border-3 border-warning rounded-lg shadow-lg type">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <h5 className="card-title">Vegan</h5>
                            <p className="card-text">Discover the benefits of a plant-based diet.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
                
            </section>
            <div className='container slide'>
                <h2>Featured Restaurant</h2>
                <Carousel/>
            </div>
        </div>
    );
};

export default Body;
