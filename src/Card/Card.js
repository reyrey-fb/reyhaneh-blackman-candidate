import React, {Component} from 'react';

import "./Card.css";

class Card extends Component {
    //function to conditionally add to DOM, based on card's active state
    renderActive () {
            return (
                <p className="view-details">
                   view details
                </p>
            )
    }

    render () {
        //conditionally rendered active state class
        const active = this.props.active === this.props.namespace ? "active" : null;

        return (
                <div className={`card h-100 ${active}`} onClick={this.props.toggleCardActive}>
                    <div className="card-image">
                            <div className="card-overlay"></div>
                            <img className="card-img-top" src={`assets/images/${this.props.image}`} alt="Card"/>
                            <div className="card-overlay-content fadeIn-right">
                                <h4>{this.props.workouts}</h4>
                                <p>workouts</p>
                                <img src="assets/icons/icn_playlist.svg" alt="workouts icon"/>
                            </div>
                    </div>

                    <div className="card-body">
                        <div className="d-inline">
                            <h5 className="card-title">
                            <img className="thumbnail" src={`assets/images/${this.props.thumbnail}`} alt="Card Thumbnail"/>
                            {this.props.title}
                            </h5>
                        </div>
                        <div className={`card-text d-${this.props.time}`}>
                            <img src="assets/icons/icn_timer_line.svg" alt="timer icon"/>
                            <span> {this.props.time} </span>
                            <img src="assets/icons/icn_distance_line.svg" alt="distance icon"/>
                            <span> {this.props.distance} </span>
                        </div>  
                        {this.props.active === this.props.namespace ? this.renderActive() : null}
                    </div>   
                </div>  
        )
    }
}

export default Card;