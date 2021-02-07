import { motion } from 'framer-motion';

const Feed = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-3 mb-3">
                    <motion.img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1 }}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <motion.img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1 }}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <motion.img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className="img-fluid rounded shadow-sm"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1 }}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <motion.img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1 }}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Feed;