import {Card,Row,Input} from "react-materialize";
import React from "react";
import '../styles/student.css'

export const EducationComponent = ({handleChange,obj}) => (
    <Card s={12}>
        <Row>
            <label className={'label-style'}>Education.</label>
        </Row>
        <Row >
            <Input s={3} label="Education Level" className={'label-sizes'}
                   value={obj.education_level}  onChange={handleChange} name={'education_level'}/>
            <Input s={3} label="School" className={'label-sizes'}
                   value={obj.school}  onChange={handleChange} name={'school'}/>
            <Input s={3} label="Address of School" className={'label-sizes'}
                   value={obj.address_of_school}  onChange={handleChange} name={'address_of_school'}/>
            <Input s={3} label="Nationality" className={'label-sizes'}
                   value={obj.nationality}  onChange={handleChange} name={'nationality'}/>
            <Input s={3} label="Head Teacher" className={'label-sizes'}
                   value={obj.headteacher}  onChange={handleChange} name={'headteacher'}/>
            <Input s={3} label="Telephone" className={'label-sizes'}
                   value={obj.telephone}  onChange={handleChange} name={'telephone'}/>
        </Row>
    </Card>

)
