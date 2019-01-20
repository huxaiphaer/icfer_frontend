import {Card,Row,Input} from "react-materialize";
import React from "react";
import '../styles/student.css'

export const ParentComponent = ({handleChange,obj}) => (
    <Card s={12}>
        <Row>
            <label className={'label-style'}>Parents Info.</label>
        </Row>
        <Row >
            <Input s={3} label="Religion of Deceased Father" className={'label-sizes'}
                   value={obj.religion__of_deceased_father}  onChange={handleChange} name={'religion__of_deceased_father'}/>
            <Input s={3} label="Religion of Deceased Mother" className={'label-sizes'}
                   value={obj.religion__of_deceased_mother}  onChange={handleChange} name={'religion__of_deceased_mother'}/>
            <Input name='on' type='date' label="Date of Demise of Father"
                   onChange={function(e, value) {}} className={'label-sizes'}
                   value={obj.date_of_demise_of_father}  onChange={handleChange} name={'date_of_demise_of_father'}/>
            <Input name='on' type='date' label="Date of Demise of Mother"
                   onChange={function(e, value) {}} className={'label-sizes'}
                   value={obj.date_of_demise_of_mother}  onChange={handleChange}  name={'date_of_demise_of_mother'}/>
            <Input s={3} label="Names of Mother" className={'label-sizes'}
                   value={obj.names_of_mother}  onChange={handleChange} name={'names_of_mother'}/>
            <Input s={3} label="Relationship to the Orphan" className={'label-sizes'}
                   value={obj.relationship_to_orphan}  onChange={handleChange} name={'relationship_to_orphan'}/>
            <Input s={3} label="Religion of Mother" className={'label-sizes'}
                   value={obj.religion_of_mother}  onChange={handleChange} name={'religion_of_mother'}/>
            <Input s={3} type='select' label="Marital Status of Mother" defaultValue='1'
                   name={'marital_status_of_mother'}
                   value={obj.marital_status_of_mother}  onChange={handleChange} >
                <option value='1'>Single</option>
                <option value='2'>Divorced</option>
            </Input>
            <Input s={3} label="Occupation of Mother" className={'label-sizes'}
                   value={obj.occupation_of_mother}  onChange={handleChange} name={'occupation_of_mother'}/>
            <Input s={3} label="Monthly Income" className={'label-sizes'}
                   value={obj.monthly_income}  onChange={handleChange}  name={'monthly_income'}/>
        </Row>
    </Card>

)
