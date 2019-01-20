import {Card,Row,Input,Button,Icon,Preloader} from "react-materialize";
import React from "react";
import '../styles/student.css'

export const SiblingComponent = ({handleSubmit, handleChange,obj}) => (
    <Card s={12}>
        <Row>
            <label className={'label-style'}>Student Info.</label>
        </Row>
        <form onSubmit={handleSubmit}>
        <Row >
            <Input s={3} label="No. of Brothers" className={'label-sizes'}
                   value={obj.number_of_brothers}  onChange={handleChange} name={'number_of_brothers'}/>
            <Input s={3} label="No. of Sisters" className={'label-sizes'}
                   value={obj.number_of_sisters}  onChange={handleChange} name={'number_of_sisters'}/>
        </Row>
        <Row>
            <Button s={12} waves='light' value='submit' type='submit' onClick={handleSubmit}>Save Details<Icon left>save</Icon></Button>
        </Row>
        <Row>
            <Preloader s={12} size={'big'} flashing/>
        </Row>
        </form>
    </Card>

)
