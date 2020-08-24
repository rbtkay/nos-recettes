const Step = (props) => {
    const { content, count } = props;
    return (
        <div className="recipie-step">
            {count > -1 ? <p className="recipie-step-count">{count}</p> : null}
            <p className="recipie-description">{content}</p>
            <br />
        </div>
    );
};

export default Step;
