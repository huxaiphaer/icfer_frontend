import * as React from "react";
import axios from 'axios';
import {Tab, Tabs} from "react-materialize";
import '../styles/tab.css'
import '../styles/background.css'

import {GetStudentsComponent} from "../components/ListStudentsComponents";
import CreatePage from "./CreatePage";
import {toast} from "react-toastify";

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state ={students :[]}

    }

    notify = () => toast("Coming soon.");

    componentDidMount(){
        const token = localStorage.getItem('token')
        console.log(token)
        let config = {
            headers: {
                "Authorization" : "Bearer " + token
            }
        }

        let data ={}

        axios.get('http://localhost:8080/orphans',
            config)
            .then((response) => {
            this.setState({students:response.data})
            console.log('data ->', this.state.students)
        }).catch( (error)=>{
            console.log('data ->', error.response)
        })
    }

    render(){
        const {students} = this.state;
        return(
            <div className={'bg'}>
                <Tabs className={`z-depth-1  teal darken-2  ${'tabs'} ${'tab-size'}`}>
                    <Tab title="Students List" active> <GetStudentsComponent students={students}/></Tab>
                    <Tab title="Add Student" className={'tabs-color'} ><CreatePage/></Tab>
                    <Tab title="Reports" onClick={this.notify}></Tab>
                    <Tab title="Analysis"></Tab>
                </Tabs>
            </div>
        );
    }

}

export default Dashboard;
