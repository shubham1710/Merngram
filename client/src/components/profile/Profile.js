import { Component } from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Profile extends Component {
    render(){
        const user = 'Shubham';
        return(
            <div className="row py-5 px-4">
                <div className="col-md-9 mx-auto">
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 cover">
                            <div className="media align-items-end profile-head">
                                <div className="profile mr-3">
                                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="rounded mb-2 img-thumbnail"/>
                                    <Link to='/edit-profile'><a className="btn btn-outline-dark btn-sm btn-block">Edit profile</a></Link>
                                    {/* <Button color="outline-success" className="btn-sm btn-block">Follow</Button>
                                    <Button color="outline-danger" className="btn-sm btn-block">Unfollow</Button> */}
                                </div>
                                <div className="media-body mb-5 text-white">
                                    <h4 className="mt-0 mb-4">Kumar Shubham</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-4 d-flex justify-content-end text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">745</h5>
                                    <Link to={`/followers/id`}>
                                        <small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">340</h5>
                                    <Link to={`/following/id`}>
                                        <small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 py-3">
                            <h5 className="mb-1">About</h5>
                            <div className="p-4 rounded shadow-sm bg-light">
                                <p className="font-italic mb-0">Full Stack Web Developer</p>
                            </div>
                        </div>
                        <div className="py-4 px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h5 className="mb-0">Recent photos</h5>
                                <Link to={`/photos/id`}>
                                    <a className="btn btn-link text-muted">Show all</a>
                                </Link>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"/></div>
                                <div className="col-lg-6 mb-2 pl-lg-1"><img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"/></div>
                                <div className="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className="img-fluid rounded shadow-sm"/></div>
                                <div className="col-lg-6 pl-lg-1"><img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
