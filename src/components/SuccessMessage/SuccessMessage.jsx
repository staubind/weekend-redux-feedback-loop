import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function SuccessMessage() {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <>
            <h1>Thank You!</h1>
            <button onClick={() => {
                dispatch({
                    type: 'CLEAR'
                });
                history.push('/feeling');
            }}>Leave New Feedback</button>
        </>
    );
};

export default SuccessMessage;