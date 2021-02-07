import { useState } from 'react';
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
import ProgressBar from '../comps/ProgressBar';

const EditProfile = () => {
    const [name, setName] = useState('Shubham');
    const [bio, setBio] = useState('Web Developer');
    const [pic, setPic] = useState('');
    const [file, setFile] = useState(null);
    const [msg, setMsg] = useState(null);

    const types = ['image/jpeg', 'image/png', 'image/jpg', 'image/heic'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
        }
        else{
            setMsg('File type not supported')
        }
    }

    const onSubmit = (e) => {
        e.preventDefault(); 
        console.log({name, bio, pic});
    }

    return(
        <div className="container">
            <Row>
                <div className="col-md-7 mx-auto">
                    <Card className="card card-signin my-5">
                        <CardBody className="card-body">
                            <h5 className="card-title text-center">Update Your Profile</h5>
                            {msg ? (<Alert color="danger">{msg}</Alert>):null}
                            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="Profile image" style={{height:'150px', width: '150px'}} className="d-block mx-auto img-fluid img-thumbnail mb-4"></img>
                            <Form className="form-signin" onSubmit={onSubmit}>
                                <Label className="upload-label upload-form">
                                    <Input type="file" id="pic" name="pic" onChange={changeHandler}/>
                                    <span>+</span>
                                </Label>
                                <div className="output mb-2">
                                    {file && <ProgressBar file={file} setFile={setFile} setPic={setPic}/>}
                                </div>
                                <FormGroup className="form-label-group">
                                    <Input type="text" id="name" name="name" className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} required autofocus/>
                                    <Label for="name">Name</Label>
                                </FormGroup>
                                <FormGroup className="form-label-group">
                                    <Input type="text" id="bio" name="bio" className="form-control" placeholder="Bio" onChange={(e) => setBio(e.target.value)} value={bio} required autofocus/>
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
 
export default EditProfile;