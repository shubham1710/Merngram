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

const NewPost = () => {
    const [desc, setDesc] = useState('');
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
        console.log({pic, desc});
    }

    return(
        <div className="container">
            <Row>
                <div className="col-md-7 mx-auto">
                    <Card className="card card-signin my-5">
                        <CardBody className="card-body">
                            <h5 className="card-title text-center"><b>Add a new Photo</b></h5>
                            {msg ? (<Alert color="danger">{msg}</Alert>):null}
                            {pic && <img src={pic} alt="Profile image" className="d-block mx-auto img-fluid img-thumbnail mb-4"></img>}
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
 
export default NewPost;