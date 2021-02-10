import { motion } from 'framer-motion';
import { getAllPosts } from '../../actions/postActions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Explore = ({post, getAllPosts}) => {

    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        getAllPosts();
        setIsPending(false);
    },[isPending])

    return ( 
        <div className="container">
            <div className="row">
                {post.allPosts && post.allPosts.map((post)=>(
                    <div className="col-md-3 mb-3">
                        <motion.img src={post.image} loading="lazy" alt="" className="img-fluid rounded shadow-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    post: state.post
})
 
export default connect(mapStateToProps, {getAllPosts})(Explore);