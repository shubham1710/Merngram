import { getProfile } from '../../actions/profileActions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

const Following = ({profile, getProfile, user}) => {

    const { id } = useParams();
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        getProfile(id);
        setLoading(false);
    }, [setLoading])

    return ( 
        <div className="container mt-5">
            <div className="height-100 row d-flex justify-content-center">
                <div className="col-md-7">
                <h3 className="mb-2">Following</h3>
                {profile && profile.following && profile.following.map((following) => (
                    <div className="p-3 bg-white rounded">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                            <div className="position-relative">
                                <img src={following.followingPic} width="40" className="rounded-circle"/>
                            </div>
                                <div className="ml-2">
                                    {following.followingId !== user._id ?
                                    <a href={`/profile/${following.followingId}`}>
                                        <h5 className="mb-0">{following.followingName}</h5>
                                    </a>:
                                    <Link to={`/profile/${following.followingId}`}>
                                        <h5 className="mb-0">{following.followingName}</h5>
                                    </Link>
                                    }
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
    profile: state.profile.profile,
    user: state.auth.user
})

export default connect(mapStateToProps, {getProfile})(Following);