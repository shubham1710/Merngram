import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import { getProfile } from '../../actions/profileActions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { set } from 'mongoose';

const Followers = ({profile, getProfile}) => {
    const { id } = useParams();
    const [Loading, setLoading] = useState(true);
    const followerProfiles = [];

    useEffect(() =>  {
        getProfile(id);
        setLoading(false);
    }, [setLoading])

    return ( 
        <div className="container mt-5">
            <div className="height-100 row d-flex justify-content-center">
                <div className="col-md-7">
                <h3 className="mb-2">Followers</h3>
                    {followerProfiles.map((follower) => (
                        <div className="p-3 bg-white rounded">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <div className="position-relative">
                                    <img src={follower.pic} width="80" className="rounded-circle"/>
                                </div>
                                <div className="ml-2">
                                    <h5 className="mb-0">Kumar Shubham</h5>
                                    <div className="d-flex flex-row">
                                        <span className="mr-3">725 followers</span> 
                                        <span>120 following</span>
                                    </div>
                                    <div class="mt-2">
                                        <Button color="info" className="btn-sm">Follow</Button>
                                        <Button color="danger" className="btn-sm">Unfollow</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile
})
 
export default connect(mapStateToProps, {getProfile})(Followers);