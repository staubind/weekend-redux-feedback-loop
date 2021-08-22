import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core'

function SuccessMessage() {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <>
            <h1>Thank You!</h1>
            <Button onClick={() => {
                dispatch({
                    type: 'CLEAR'
                });
                history.push('/feeling');
            }}>Leave New Feedback</Button>
        </>
    );
};

export default SuccessMessage;