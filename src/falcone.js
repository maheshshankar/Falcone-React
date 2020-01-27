import React, { Component } from 'react';
// import {PlanetsConsumer} from './context';
import {getPlanets} from './redux/planetActions';
import {connect} from 'react-redux';
class Falcone extends Component {
    componentDidMount(){
        // this.props.getPlanets();
    }
    render() {
        const {planets} = this.props;
        return (<div className="col-md-8 offset-md-2 mt-2 border">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center bg-primary"><h1>Finding Falcone</h1></div>
                <div className="col-md-12">
                    {
    planets.length > 0 ? planets.map((planet, index) => <h3 key={index}>{planet.name}</h3>) : null
                    }
                </div>
            </div>
        </div>);
    }
}

const mapStateToProps = state => {
    return {
      planets: state.planets
    }
}

export default connect(mapStateToProps, {})(Falcone);