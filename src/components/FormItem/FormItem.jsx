import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import { Button, Rating, TextField } from '@material-ui/core'

function FormItem({ question, type, required, next, reducer, back}) {
    const dispatch = useDispatch();
    const history = useHistory();
    // weird logic below is to grab the reducer we want from state
    const selectedReducer = useSelector(state => state[(reducer.split('_')[1]).toLowerCase()])

    let [input, setInput] = useState('');

    const submitItem = (event) => {
        event.preventDefault();
        dispatch({
            type: reducer,
            payload: input
        });
        history.push(next);
    }

    useEffect(() => {
        setInput(selectedReducer)
    },[])

    return (
        <>
            {back && <Button variant="outlined" onClick={() => {history.push(back)}}>BACK</Button>}
            
            <form onSubmit={evt => submitItem(evt)}>
                <h2>{question}</h2>
                {/* 
                It'd be cool if there was a way to just replace Rating vs TextField
                I couldn't find a way to do that. 
                It'd help this be a bit more DRY
                */}
                {type === 'number' ? 
                    <Rating name="simple-controlled" value={input} required={required} onChange={evt => {setInput(evt.target.value)}} /> :
                    <TextField type={type} required={required} value={input} onChange={evt => {setInput(evt.target.value)}} />
                }
                {/* <Input 
                type={type} 
                required={required}
                value={input}
                onChange={(evt) => {
                    setInput(evt.target.value);
                }}
            /> */}
                <div>
                    <Button type="submit" variant="contained">NEXT</Button>
                </div>
            </form>
        </>
    );
};

export default FormItem;