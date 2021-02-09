import { useState, useEffect } from 'react';
import {Row, Card, Button, Form, FormGroup, Label, Input, Alert, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import ProgressBar from '../comps/ProgressBar';
import { useHistory } from 'react-router-dom';
import { editProfile, getCurrentProfile } from '../../actions/profileActions';
import {Link} from 'react-router-dom';

const EditProfile = ({profile, editProfile, user, getCurrentProfile}) => {
    const [name, setName] = useState(profile.currProfile.name);
    const [bio, setBio] = useState(profile.currProfile.bio);
    const [pic, setPic] = useState(profile.currProfile.pic);
    const [file, setFile] = useState(null);
    const [msg, setMsg] = useState(null);
    const [isPending, setPending] = useState(false);
    const history = useHistory();

    const types = ['image/jpeg', 'image/png', 'image/jpg', 'image/heic'];

    useEffect(async () => {
        await getCurrentProfile(user._id);
        setName(profile.currProfile.name);
        setPending(false);
    }, [isPending, user])

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
        }
        else{
            setMsg('File type not supported')
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault(); 
        const newProfile = {name, bio, pic};
        await editProfile(user._id, newProfile);
        await getCurrentProfile(user._id);
        history.push(`/profile/${user._id}`);
    }

    return(
        <div className="container">
            <Row>
                <div className="col-md-7 mx-auto">
                    {!user &&
                        <Card className="card-signin">
                            <CardBody>
                                <h5 className="card-title text-center"><b>Login to view this page</b></h5>
                                <div className="form-signin">
                                    <Link to="/login"><Button color="success" className="text-uppercase btn-block">Login</Button></Link>
                                </div>
                            </CardBody>
                        </Card>
                    }
                    {user && profile && <Card className="card card-signin my-5">
                        <CardBody className="card-body">
                            <h5 className="card-title text-center"><b>Update Your Profile</b></h5>
                            {msg ? (<Alert color="danger">{msg}</Alert>):null}
                            <img src={pic} alt="Profile image" style={{height:'150px', width: '150px'}} className="d-block mx-auto img-fluid img-thumbnail mb-4"></img>
                            <Form className="form-signin" onSubmit={onSubmit}>
                                <Label className="upload-label upload-form">
                                    <Input type="file" id="pic" name="pic" onChange={changeHandler}/>
                                    <span>+</span>
                                </Label>
                                <div className="output mb-2">
                                    {file && <div >{file.name}</div>}
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
                    </Card>}
                </div>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    user: state.auth.user
})
 
export default connect(mapStateToProps, {getCurrentProfile, editProfile})(EditProfile);