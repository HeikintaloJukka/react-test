const Options = (props) => {
    const options = [
        {
            text: "Hello",
            handler: props.actionProvider.handleHello,
            id: 1,
        },
        {
            text: "Weather",
            handler: props.actionProvider.handleWeather,
            id: 2,
        },
        {
            text: "Bye",
            handler: props.actionProvider.handleBye,
            id: 3,
        }
    ];

    const buttonsMarkup = options.map((option) => (
        
        <button key={option.id} onClick={option.handler} type="button" className="btn btn-primary" style={{marginRight: 3}}>
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>
}

export default Options;