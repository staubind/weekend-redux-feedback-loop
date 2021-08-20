import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

function FormItem({ question, type, required, next, reducer}) {
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

            <input type="submit" value="NEXT" />
        </form>
    );
};

export default FormItem;