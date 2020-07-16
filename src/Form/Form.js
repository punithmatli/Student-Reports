import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Form extends Component {
    state = {
        fields: {},
        formIsValid: false,
        errorName: null,
        errorLastName: null,
        errorPercentage: null,
        errorClass: null,
        errorYearOfPassing: null
    }

    validate = () => {
        let fields = this.state.fields;

        if (!fields["name"]) {
            this.setState({ errorName: "Name Cannot be empty", formIsValid: false });
        } else {
            if (typeof fields["name"] !== undefined) {
                if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                    this.setState({ errorName: "Only letters are allowed", formIsValid: false });
                }
                else {
                    this.setState({ errorName: null });
                }
            }
        }

        if (!fields["lastname"]) {
            this.setState({ errorLastName: "Last Name Cannot be empty", formIsValid: false });
        } else {
            if (typeof fields["lastname"] !== "undefined") {
                if (!fields["lastname"].match(/^[a-zA-Z]+$/)) {
                    this.setState({ errorLastName: "Only letters are allowed", formIsValid: false });
                }
                else {
                    this.setState({ errorLastName: null });
                }
            }
        }

        if (!fields["class"]) {
            this.setState({ errorClass: "Class Cannot be empty", formIsValid: false });
        } else {
            if (typeof fields["class"] !== "undefined") {
                if (!fields["class"].match(/^[a-zA-Z0-9]+$/)) {
                    this.setState({ errorClass: "Only Numbers and letters are allowed", formIsValid: false });
                }
                else {
                    this.setState({ errorClass: null });
                }
            }
        }


        if (!fields["yearofpassing"]) {
            this.setState({ errorYearOfPassing: "Year Cannot be empty", formIsValid: false });
        }
        else {
            if (typeof fields["yearofpassing"] !== "undefined") {
                if (!fields["yearofpassing"].match(/^[0-9]+$/)) {
                    this.setState({ errorYearOfPassing: "Only Numbers are allowed", formIsValid: false });
                }
                else if (this.state.fields["yearofpassing"] > 2017) {
                    this.setState({ errorYearOfPassing: "Year cannot be grater than 2017", formIsValid: false });
                }
                else {
                    this.setState({ errorYearOfPassing: null });
                }
            }
        }
        if (!fields["percentage"]) {
            this.setState({ errorPercentage: "Percentage Cannot be empty", formIsValid: false });
        }
        else {
            if (typeof fields["percentage"] !== "undefined") {
                if (!fields["percentage"].match(/^[0-9]+$/)) {
                    this.setState({ errorPercentage: "Only Numbers are allowed", formIsValid: false });
                }
                else {
                    this.setState({ errorPercentage: null });
                }
            }
        }
        if (!this.state.errorName && !this.state.errorLastName && !this.state.errorClass && !this.state.errorYearOfPassing && !this.state.errorPercentage) {
            this.setState({ formIsValid: true });
        }
        return this.state.formIsValid;
    }

    contactSubmit = (event) => {
        event.preventDefault();

        if (this.state.formIsValid) {
            alert("Form submitted");
        } else {
            alert("Form has errors.")
        }
    }

    handleChange(field, e) {
        this.validate();
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div>
                <Link to='/'>Results</Link><br /> <h2>Student Registration</h2>
                <form name="studentform" className="studentform" onSubmit={this.contactSubmit}>
                    <div className="col-md-6">
                        <fieldset>
                            <input refs="name" type="text" size="30" maxLength="20" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
                            <span style={{ color: "red" }}>{this.state.errorName}</span>
                            <br />
                            <input refs="lastname" type="text" size="30" maxLength="20" placeholder="Last Name" onChange={this.handleChange.bind(this, "lastname")} value={this.state.fields["lastname"]} />
                            <span style={{ color: "red" }}>{this.state.errorLastName}</span>
                            <br />
                            <input refs="class" type="text" size="30" placeholder="Class" onChange={this.handleChange.bind(this, "class")} value={this.state.fields["class"]} />
                            <span style={{ color: "red" }}>{this.state.errorClass}</span>
                            <br />
                            <input refs="yearofpassing" type="number" size="30" placeholder="Year of passing" onChange={this.handleChange.bind(this, "yearofpassing")} value={this.state.fields["yearofpassing"]} />
                            <span style={{ color: "red" }}>{this.state.errorYearOfPassing}</span>
                            <br />
                            <input refs="percentage" type="number" size="30" placeholder="Percentage" onChange={this.handleChange.bind(this, "percentage")} value={this.state.fields["percentage"]} />
                            <span style={{ color: "red" }}>{this.state.errorPercentage}</span>
                            <br />
                        </fieldset>
                        <fieldset>
                            <button type="submit" disabled={!this.state.formIsValid}>Submit</button>
                        </fieldset>
                    </div>

                </form>
            </div>
        )
    }
}


export default Form;