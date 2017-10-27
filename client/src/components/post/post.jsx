import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bulma/css/bulma.css';
import './post.css';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showImages: false
        };
        this.handleMoreClick = this.handleMoreClick.bind(this);
        this.handleShowImagesClick = this.handleShowImagesClick.bind(this);
        this.renderDescription = this.renderDescription.bind(this);
        this.renderImages = this.renderImages.bind(this);
    }

    handleMoreClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            showDescription: !prevState.showDescription
        }));
    };

    handleShowImagesClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            showImages: !prevState.showImages
        }));        
    };

    renderDescription() {
        const { post } = this.props;
        const { routeName, routeGrade, routeDescription, thumbSrc, submissionDate, routeType, routeProtection } = post;
        return (
            <div className="tile is-4">
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <div className="content" style={{
                            textAlign: "left"
                        }}>
                            <p><strong>Route Name:</strong> {routeName} </p> 
                            <p><strong>Grade:</strong> {routeGrade} </p>
                            <p><strong>Type:</strong> {routeType}</p>
                            {routeProtection ? <p><strong>Pro:</strong> {routeProtection}</p> : null}
                            <div className="box">
                                <div className="content" style={{
                                    overflowY: "scroll",
                                    maxHeight: "150px"
                                }}>
                                        <p>
                                            {routeDescription}
                                        </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderImages() {
        //TODO need to handle pagination of images
        const { post } = this.props;
        const { imageUrls } = post;
        const imageDivs = imageUrls.map((imageUrl, index) => {
            return (
                <figure key={index}>
                    <img src={imageUrl} alt="image"/>
                </figure>
            );
        });

        return (
            <div className="tile is-8">
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <div className="image-grid-container">
                            {imageDivs}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { post, user } = this.props;
        const { showDescription, showImages } = this.state;
        const { routeName, routeGrade, routeDescription, thumbSrc, submissionDate, routeType, routeProtection } = post;
        const { userThumb, userName } = post.author; 

        return (
        <div className="post">
            <div className="box">
                <div className="tile is-ancestor">
                    <div className="tile is-3">
                        <div className="tile is-parent">
                            <div className="tile is-child card">
                                    <header className="card-header">
                                        <span> 
                                            <p className="card-header-title is-2">
                                                {routeName}
                                            </p>
                                        </span>
                                            <p className="card-header-title">
                                                {routeGrade}
                                            </p>
                                        <span> 
                                        </span>
                                    </header>
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={thumbSrc} alt=""/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-48x48">
                                                    <img src={userThumb} alt="user"/>
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <p className="title is-4">{userName}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <a href='#' className="card-footer-item" onClick={this.handleShowImagesClick}>
                                            Images
                                        </a>
                                    </footer>
                                </div>
                        </div> 
                    </div>
                    {showImages ? this.renderImages() : this.renderDescription() }
                </div>
            </div>
        </div>
        );
    }
}

Post.displayName = 'Post';
Post.propTypes = {
    post: PropTypes.object,
    user: PropTypes.object
}

export default Post;
