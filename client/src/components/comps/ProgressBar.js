import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({file, setFile, setPic}) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if(url){
            setFile(null);
            setPic(url);
        }
    },[url, setFile, setPic])

    return ( 
        <motion.div className="progress-bar" 
            initial={{width: 0}}
            animate={{width: progress + '%' }}
        />
     );
}
export default ProgressBar;