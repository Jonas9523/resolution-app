import { useState } from "react";


const AddTracker = ({onAdd}) => {
    const [text, setText] = useState('');
    const [erledigt, setErledigt] = useState(false);

    const onsubmit = (e) => {
        e.preventDefault();
        
        if (!text){
            alert('Please add Resolution');
        }
        
        onAdd({text, erledigt})

        setText('');
        setErledigt(false);
    };

return (
    
        <form className ="form"
        onSubmit={onsubmit}>
            <div className = "form-control">
                <input 
                id = 'text'
                type= 'text'
                value = {text}
                placeholder = 'Neuer Vorsatz'
                onChange={(e) => setText(e.target.value)}>
                
                </input>
            </div>
            <input type = 'submit'
            className = 'btn'
             value = 'Bestätige Vorsatz' ></input>
        </form>
   
)

}

export default AddTracker