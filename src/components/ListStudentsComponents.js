import {Card, Table, Icon} from "react-materialize";
import React from "react";

export const GetStudentsComponent = ({students})=>(
    <div>
        <Card className={'align-dash-card'}>
        <Table
            hoverable={true}
            responsive={true}
            striped={true}
            bordered={true}
            centered={true}
        >
            <thead>
            <tr>
                <th data-field="id"> # No.</th>
                <th data-field="firstname">First Name</th>
                <th data-field="middlename">Middle  Name</th>
                <th data-field="lastname">Last Name</th>
                <th data-field="nationality">Nationality</th>
                <th data-field="gender">Gender</th>
                <th data-field="religion">Religion</th>
                <th data-field="nationality">HomeAddress</th>
                <th data-field="dob">Date of Birth</th>
                <th data-field="action">Action</th>
            </tr>
            </thead>

            <tbody>
            {students.map(student =>
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.middleName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.nationality}</td>
                    <td>{student.gender}</td>
                    <td>{student.religion}</td>
                    <td>{student.home_address}</td>
                    <td>{student.dob}</td>
                    <td>  <Icon >edit</Icon></td>
                    <td> <Icon >delete</Icon></td>
                </tr>
            )}


            </tbody>
        </Table>
        </Card>
    </div>

);
