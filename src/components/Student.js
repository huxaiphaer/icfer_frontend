import {Card,Row,Input} from "react-materialize";
import React from "react";
import '../styles/student.css'

export const StudentComponent = ({handleSubmit, handleChange, obj}) => (
    <Card s={12}>
        <Row>
            <label className={'label-style'}>Student Info.</label>
        </Row>

        <Row >
            <Input s={3} label="First Name" className={'label-sizes'}
                   value={obj.firstName} name={'firstName'}  onChange={handleChange} />
            <Input s={3} label="Last Name" className={'label-sizes'}
                   value={obj.lastName} name={'lastName'}    onChange={handleChange}/>
            <Input s={3} label="Middle Name" className={'label-sizes'}
                   value={obj.middleName} name={'middleName'} onChange={handleChange}/>
            <Input s={3} label="Nationality" className={'label-sizes'}
                   value={obj.nationality} name={'nationality'}  onChange={handleChange} />
            <Input s={3} type='select' label="Select Gender" defaultValue='1' value={obj.gender} name={'gender'}  onChange={handleChange} >
                <option value='1'>Male</option>
                <option value='2'>Female</option>
            </Input>
            <Input s={3} type='select' label="Select Religion" defaultValue='1' name={'religion'} value={obj.religion}  onChange={handleChange} >
                <option value='1'>Muslim</option>
                <option value='2'>Christian</option>
                <option value='3'>Other</option>
            </Input>

            <Input s={3} label="Medical Condition" className={'label-sizes'} name={'medical_condition'} value={obj.medical_condition}  onChange={handleChange}/>
            <Input s={3} type='select' label="Deceased" defaultValue='2' name={'deceased'} value={obj.deceased}  onChange={handleChange} >
                <option value='1'>Yes</option>
                <option value='2'>No</option>
            </Input>
            <Input s={3} label="Home Address" className={'label-sizes'} name={'home_address'} value={obj.home_address}  onChange={handleChange} />
            <Input s={3} label="Country of Residence" className={'label-sizes'} name={'country_of_residence'} value={obj.country_of_residence}  onChange={handleChange} />
            <Input s={3} label="City" className={'label-sizes'} value={obj.city} name={'city'}  onChange={handleChange}/>
            <Input s={3} label="Age" className={'label-sizes'} value={obj.age} name={'age'}  onChange={handleChange}/>
            <Input name='on' type='date' label="Date" onChange={function(e, value) {}}
                   name={'date'}
                   className={'label-sizes'} value={obj.dob}  onChange={handleChange}/>
        </Row>
    </Card>

)
