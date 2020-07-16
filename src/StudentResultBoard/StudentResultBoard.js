import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './StudentResultBoard.css';

class StudentResultBoard extends Component {
    state = {
        studentData: [],
        error: null
    }

    componentWillMount() {
        axios.get('https://sample-f5cf9.firebaseio.com/studentData.json')
            .then(response => {
                this.setState({ studentData: response.data })
            })
            .catch(error => {
                this.setState({ error: true })
            })
    }

    capitalize = (str, lower = false) =>
        (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());

    render() {
        let maxMarks = 0;
        this.state.studentData.sort((a, b) => a.name.localeCompare(b.name));
        let max = Math.max.apply(Math, this.state.studentData.map(item => {
            return +item.marks.English + +item.marks.Maths + +item.marks.Science;
        }))
        let resultTable = <table className="table">
            <thead>
                <b>StudentResultBoard</b>
            </thead>
            <thead>
                <tr>
                    <th><i>Student Name</i></th>
                    <th><i>Roll Number</i></th>
                    <th><i>Total Marks</i></th>
                    <th><i>Status</i></th>
                </tr>
            </thead>
            <tbody>
                {this.state.studentData.map((item) => {
                    let totalMarks = +item.marks.English + +item.marks.Maths + +item.marks.Science;
                    let status = (totalMarks === max) ? "Topper" : ((+item.marks.English < 20 || +item.marks.Science < 20 || +item.marks.Maths < 20) && "Fail") || "Pass";
                    let recordClass = (totalMarks === max) ? "Topper" : (status === "Fail" ? "Fail" : "Pass");
                    return (
                        <tr key={item.rollNumber} className={recordClass}>
                            <td>{this.capitalize(item.name)}</td>
                            <td>{item.rollNumber}</td>
                            <td>{+item.marks.English + +item.marks.Maths + +item.marks.Science}</td>
                            <td>{status}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        return (
            <div>
                <Link to='/register'>Register</Link><br />
                <h2>Student Results</h2>
                {resultTable}
            </div>
        )
    }
}

export default StudentResultBoard