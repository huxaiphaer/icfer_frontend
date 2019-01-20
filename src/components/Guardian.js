import {Card,Row,Input} from "react-materialize";
import React from "react";
import '../styles/student.css'

export const GuardianComponent = ({handleChange,obj}) => (
    <Card s={12}>
        <Row>
            <label className={'label-style'}>Guardian Info.</label>
        </Row>
        <Row >
            <Input s={3} label="First Name" className={'label-sizes'} type={'text'}
                   value={obj.first_name}  onChange={handleChange} name={'first_name'}/>
            <Input s={3} label="Last Name" className={'label-sizes'}
                   value={obj.last_name}  onChange={handleChange} name={'last_name'}/>
            <Input s={3} label="Middle Name" className={'label-sizes'}
                   value={obj.middle_name}  onChange={handleChange} name={'middle_name'}/>
            <Input s={3} label="Relationship to the Orphan" className={'label-sizes'}
                   value={obj.relationship_to_orphan}  onChange={handleChange} name={'relationship_to_orphan'}/>
            <Input s={3} label="Occupation" className={'label-sizes'}
                   value={obj.occupation}  onChange={handleChange} name={'occupation'}/>
            <Input s={3} label="Monthly Income" className={'label-sizes'}
                   value={obj.monthly_income}  onChange={handleChange} name={'monthly_income'}/>
            <Input s={3} label="Employers Name" className={'label-sizes'}
                   value={obj.employers_name}  onChange={handleChange} name={'employers_income'}/>
            <Input s={3} label="Work Address" className={'label-sizes'}
                   value={obj.work_address}  onChange={handleChange} name={'work_address'}/>
            <Input s={3} label="Mobile No." className={'label-sizes'}
                   value={obj.mobile_no}  onChange={handleChange} name={'mobile_no'}/>
            <Input s={3} label="Physical Location" className={'label-sizes'}
                   value={obj.physical_location}  onChange={handleChange} name={'physical_location'} />
            <Input s={3} label="Comments" className={'label-sizes'}
                   value={obj.comments}  onChange={handleChange} name={'comments'}/>
        </Row>
    </Card>

)
