function FormItem({ question, type, isRequired}) {

    const submitItem = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={evt => submitItem(evt)}>
            <h2>{question}</h2>
            <input 
            type={type} 
            required={isRequired}

        />

            <input type="submit" value="NEXT" />
        </form>
    );
};

export default FormItem;