import { Component } from 'react';
import {
    Row,
    Card,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert,
    CardBody
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const types = ['image/jpeg', 'image/png', 'image/jpg', 'image/heic'];

class EditProfile extends Component {
    state = {
        name: 'Shubham',
        bio: 'Web Developer',
        pic: '',
        file: null,
        msg: null
    };

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    changeHandler = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            this.setState({file: selected})
        }
        else{
            this.setState({msg: 'Invalid File type'})
        }
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        
        const {name, bio, pic} = this.state;
        console.log({name, bio, pic});
    }

    render(){
        return(
            <div className="container">
                <Row>
                    <div className="col-md-7 mx-auto">
                        <Card className="card card-signin my-5">
                            <CardBody className="card-body">
                                <h5 className="card-title text-center">Update Your Profile</h5>
                                {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>):null}
                                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="Profile image" style={{height:'150px', width: '150px'}} className="d-block mx-auto img-fluid img-thumbnail mb-4"></img>
                                <Form className="form-signin" onSubmit={this.onSubmit}>
                                    <label>
                                        <input type="file" id="pic" name="pic" className="form-control" onChange={this.changeHandler}/>
                                    </label>
                                    <FormGroup className="form-label-group">
                                        <Input type="text" id="name" name="name" className="form-control" placeholder="Name" onChange={this.onChange} value={this.state.name} required autofocus/>
                                        <Label for="name">Name</Label>
                                    </FormGroup>
                                    <FormGroup className="form-label-group">
                                        <Input type="text" id="bio" name="bio" className="form-control" placeholder="Bio" onChange={this.onChange} value={this.state.bio} required autofocus/>
                                        <Label for="bio">Bio</Label>
                                    </FormGroup>
                                    <Button color="primary" className="btn btn-lg btn-block text-uppercase" type="submit">Update</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </div>
        )
    }
}
 
export default EditProfile;