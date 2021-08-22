import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { Button } from '@material-ui/core'

function FormItem({ question, type, required, next, reducer, back}) {
    const dispatch = useDispatch();
    const history = useHistory();

    let [input, setInput] = useState('');

    const submitItem = (event) => {
        event.preventDefault();
        dispatch({
            type: reducer,
            payload: input
        });
        history.push(next);
    }

    return (
        <>
            {back && <Button variant="outlined" onClick={() => {history.push(back)}}>BACK</Button>}
            
            <form onSubmit={evt => submitItem(evt)}>
                <h2>{question}</h2>
                <input 
                type={type} 
                required={required}
                value={input}
                onChange={(evt) => {
                    setInput(evt.target.value);
                }}
            />

                <Button type="submit" variant="contained">NEXT</Button>
            </form>
        </>
    );
};

export default FormItem;