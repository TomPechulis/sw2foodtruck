import React, { Component } from 'react';
import axios from 'axios';

class Guac extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeStatus(event) {
        this.setState({level: event.target.value});
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    handleSubmit(event) {

        const foodTruckDto = {
            name: this.state.name
        };

        event.preventDefault();
    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <a href = "/">Home</a>
                <br/>
                <h1>Food Truck Search</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Food Truck Name:
                        </label>
                        <input name = "name" className="form-control" value={this.state.name} type="text" onChange={this.handleInputChange} />

                    </div>
                    <br/>
                    <input type="submit" value="Search" />
                </form>
                <br />
                <label>{this.state.message}</label>


            </div>
        );
    }
}
export default Guac;