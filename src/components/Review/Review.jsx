import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux';
import { Button } from '@material-ui/core'


function Review({submitFeedback}) {
    const history = useHistory();

    const [feeling, understanding, support, comments] = 
        useSelector(state => 
            [state.feeling, state.understanding, state.support, state.comments])

    return (
        <>
            <Button variant="outlined" onClick={() => {history.push('/comments')}}>BACK</Button>
            <h1>Review Your Feedback </h1>
            <h3>Feelings: {feeling}</h3>
            <h3>Understanding: {understanding}</h3>
            <h3>Support: {support}</h3>
            <h3>Comments: {comments}</h3>
            <Button variant="contained" onClick={() => {
                console.log('in submit review')
                submitFeedback(
                    {feeling, understanding, support, comments}
                )
                // why do I have to do the push from here..?
                // seems better to do it in submitFeedback
                // where we only switch to submitted when it POSTs succesfully.
                history.push('/submitted')
            }}
            >SUBMIT</Button>
        </>
    );
};

export default Review;