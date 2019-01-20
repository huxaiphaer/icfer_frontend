import {Button, Card, Col, Input, Row} from "react-materialize";
import React  from 'react';
import '../styles/login.css'
import {primaryColor} from '../utils/utils'

export const LoginComponent = ({handleSubmit, obj, handleChange})=>(
    <div>
        <Card className={'landing-card'}>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col  s={12} m={12} l={12}>
                        <h5 s={12} l={12} className={'header'}>  Login </h5>
                    </Col>
                    <Input s={12} l={12} type={'text'} value={obj.username}  label="Username" name='username' onChange={handleChange} />
                    <Col s={12} m={12} l={6}>
                        <div className={'errors'} s={10}></div>
                    </Col>
                    <Input s={12} l={12} type="password" value={obj.password} label="Password" name='password' onChange={handleChange} />
                    <Col s={12} m={12} l={12}>
                        <Button waves='light' className={`${primaryColor} button-align`} value='submit' type='submit' >Login</Button>
                    </Col>
                </Row>
            </form>
        </Card>
    </div>

);
