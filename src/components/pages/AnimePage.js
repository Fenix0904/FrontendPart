import React from 'react';
import {withRouter} from "react-router-dom";

const AnimePage = ({match}) => {
    console.log(match);
    return (
        <div className="container">
            <div className="row">
                <h4 className="mx-auto text-primary">Title</h4>
            </div>
            <div className="row justify-content-between p-2">
                <div className="col-sm col-md-7 order-2 order-sm-1 pt-2 pt-sm-0">
                    <div className="border-bottom border-secondary py-1">
                        <div className="row">
                            <div className="d-flex">
                                <b className="mr-2">Season: </b>
                                <a href="#" className="mr-1 text-secondary">season</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex">
                                <b className="mr-2">Type: </b>
                                <a href="#" className="mr-1 text-secondary">anime type</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex">
                                <b className="mr-2">Genres: </b>
                                <a href="#" className="mr-1 text-secondary">Genre 1,</a>
                                <a href="#" className="mr-1 text-secondary">Genre 2</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>Description</span>
                    </div>
                </div>
                <div className="col-sm col-md-5 order-1 order-sm-2">
                    <div className="text-center">
                        <img className="img-fluid" src="https://source.unsplash.com/random/340x430" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(AnimePage);