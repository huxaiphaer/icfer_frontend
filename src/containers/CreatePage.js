import * as React from "react";
import {Row} from 'react-materialize'
import '../styles/tab.css'
import {EducationComponent} from "../components/Education";
import {GuardianComponent} from "../components/Guardian";
import {ParentComponent} from "../components/Parents";
import {SiblingComponent} from "../components/Siblings";
import  axios from "axios";
import {toast} from "react-toastify";
import {StudentComponent} from "../components/Student";

class CreatePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            middleName: '',
            nationality: '',
            gender: '',
            religion: '',
            medical_condition: '',
            deceased: '',
            home_address: '',
            country_of_residence: '',
            city: '',
            dob: '',
            age: 0,
            loading: false,
            education:{
                education_level:"",
                school:"",
                address_of_school:"",
                headteacher:"",
                telephone:""
            },
            guardian:{
                first_name:'',
                middle_name:'',
                last_name:'',
                relationship_to_orphan:'',
                occupation:'',
                monthly_income:0.0,
                employers_name:'',
                work_address:'',
                mobile_no:'',
                physical_location:'',
                comments:''
            },
            parents:{
                religion__of_deceased_father:'',
                religion__of_deceased_mother:'',
                date_of_demise_of_father:'',
                date_of_demise_of_mother:'',
                names_of_mother:'',
                religion_of_mother:'',
                marital_status_of_mother:'',
                occupation_of_mother:'',
                monthly_income:0
            },
            siblings:{
                number_of_brothers:0,
                number_of_sisters:0
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit = (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token')
        let config = {
            headers: {
                "Authorization" : "Bearer " + token
            }
        }

        const data = this.state;

        toast('Data submitted ')

        console.log('check data', data)

        axios.post('http://localhost:8080/orphan', data, config)
            .then(res => console.log('success after submission.',res.data))
            .then(error => console.log(error));

    };

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    }


    render() {
        return (
            <div>
                <Row>
                    <StudentComponent
                        handleChange={this.handleChange}
                        obj={this.state}
                    />
                    <EducationComponent
                        handleChange={this.handleChange}
                        obj={this.state.education}/>
                    <GuardianComponent
                        handleChange={this.handleChange}
                        obj={this.state.guardian}/>
                    <ParentComponent
                        handleChange={this.handleChange}
                        obj={this.state.parents}/>
                    <SiblingComponent
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        obj={this.state.siblings}/>
                </Row>
            </div>
        );
    }

}

export default CreatePage;
