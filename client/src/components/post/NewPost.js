import { useState } from 'react';
import { Row, Card, Button, Form, FormGroup, Label, Input, Alert, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import ProgressBar from '../comps/ProgressBar';
import { useHistory } from 'react-router-dom';
import {addPost} from '../../actions/postActions';
import {Link} from 'react-router-dom';

const NewPost = ({addPost, user}) => {
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [file, setFile] = useState(null);
    const [msg, setMsg] = useState(null);
    const history = useHistory();

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

    const onSubmit = async (e) => {
        e.preventDefault(); 
        const userId = user._id;
        const newPost = {userId, image, desc};
        await addPost(newPost);
        history.push('/');
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
                    <Card className="card card-signin my-5">
                        <CardBody className="card-body">
                            <h5 className="card-title text-center"><b>Add a new Photo</b></h5>
                            {msg ? (<Alert color="danger">{msg}</Alert>):null}
                            {image && <img src={image} alt="Profile image" className="d-block mx-auto img-fluid img-thumbnail mb-4"></img>}
                            <Form className="form-signin" onSubmit={onSubmit}>
                                <Label className="upload-label upload-form">
                                    <Input type="file" id="image" name="image" onChange={changeHandler}/>
                                    <span>+</span>
                                </Label>
                                <div className="output mb-2">
                                    {file && <div >{file.name}</div>}
                                    {file && <ProgressBar file={file} setFile={setFile} setPic={setImage}/>}
                                </div>
                                <FormGroup className="form-label-group">
                                    <Input type="text" id="desc" name="desc" className="form-control" placeholder="Description" onChange={(e) => setDesc(e.target.value)} required autofocus/>
                                    <Label for="desc">Description</Label>
                                </FormGroup>
                                <Button color="primary" className="btn btn-lg btn-block text-uppercase" type="submit">Post</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})
 
export default connect(mapStateToProps,{addPost})(NewPost);