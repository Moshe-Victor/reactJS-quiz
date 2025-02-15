function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div>
      <div options="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} 
            ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }
            `}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payLoad: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
