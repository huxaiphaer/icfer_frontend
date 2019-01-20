import * as React from "react";
import {LoginComponent} from "../components/LoginComponent";
import axios from "axios";
import {setLoader} from "../utils/utils";
import {LoaderComponent} from "../components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FooterComponent} from "../components/Footer";

export class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    notify = () => toast("Wow so easy !");

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const obj = {
            username: this.state.username,
            password: this.state.password,
        };


        if (obj.password === '' && obj.password === '') {

            this.setState({ loading: false })
            toast.error("Please enter your Username or Password.")

        }
        else {

            axios.post('http://localhost:8080/api/auth/signin', obj)
                .then(res => {
                    this.setState({ loading: false })
                    localStorage.setItem("token", res.data.accessToken);
                    localStorage.setItem("loggedIn","1")
                    toast.success("You have successfully logged in ")
                    this.props.history.push('/dashboard')
                }).catch(error => {
                this.setState({ loading: false })
                toast.error("Invalid Username or Password.")

            })
        }
    }


    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }

    render() {
        const {loading } = this.state;
        return (
            <div>
                {loading ? <LoaderComponent/> :''}
                <LoginComponent
                    handleSubmit={this.handleSubmit}
                    obj={this.state}
                    handleChange={this.handleChange}
                />
                <FooterComponent/>
            </div>

        );
    }

}
