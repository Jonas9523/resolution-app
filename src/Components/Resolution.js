import reactDom from 'react-dom';
import { FaTimes } from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'


const Resolution = ({resolution, onDelete, onChange}) => {


    return (
           
           <div className={`resolution ${resolution.erledigt ? 'erledigt'  : ''}`}>
               <h4>{resolution.text}
               <FaTimes 
               style = {{color: 'red', cursor: 'pointer'} }
               onClick={() => onDelete(resolution.id)}
                />
                <FaCheck
                className = {`${resolution.erledigt ?  'hideIcon' : ''}`}
                style = {{color: 'green', cursor: 'pointer'}} 
                onClick= {() => onChange(resolution.id)}/>
               </h4>
               
           </div>
        
    )
}

export default Resolution;