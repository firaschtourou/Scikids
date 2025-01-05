import React, { useState } from "react";

const QuizBuilder = () => {
    const [quiz, setQuiz] = useState({ name: "", questions: [] });

    const addQuestion = () => {
        setQuiz({
            ...quiz,
            questions: [
                ...quiz.questions,
                { type: "text", text: "", options: [], correctOption: null },
            ],
        });
    };

    const updateQuestionText = (index, text) => {
        const updatedQuestions = [...quiz.questions];
        updatedQuestions[index].text = text;
        setQuiz({ ...quiz, questions: updatedQuestions });
    };

    const addOption = (index, type) => {
        const updatedQuestions = [...quiz.questions];
        updatedQuestions[index].options.push({ text: "", isCorrect: false, type });
        setQuiz({ ...quiz, questions: updatedQuestions });
    };

    const updateOptionText = (qIndex, oIndex, text) => {
        const updatedQuestions = [...quiz.questions];
        updatedQuestions[qIndex].options[oIndex].text = text;
        setQuiz({ ...quiz, questions: updatedQuestions });
    };

    const toggleCorrectOption = (qIndex, oIndex) => {
        const updatedQuestions = [...quiz.questions];
        if (updatedQuestions[qIndex].options[oIndex].type === "radio") {
            updatedQuestions[qIndex].options.forEach((option) => {
                option.isCorrect = false;
            });
        }
        updatedQuestions[qIndex].options[oIndex].isCorrect =
            !updatedQuestions[qIndex].options[oIndex].isCorrect;
        setQuiz({ ...quiz, questions: updatedQuestions });
    };

    const removeQuestion = (index) => {
        const updatedQuestions = [...quiz.questions];
        updatedQuestions.splice(index, 1);
        setQuiz({ ...quiz, questions: updatedQuestions });
    };

    const handleSave = () => {
        console.log("Quiz saved:", quiz);
    };

    return (

        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <div style={{ marginBottom: "20px" }}>
                <label>
                    <strong>Quiz name *</strong>
                </label>
                <input
                    type="text"
                    value={quiz.name}
                    onChange={(e) => setQuiz({ ...quiz, name: e.target.value })}
                    placeholder="Seleccionar"
                    style={{
                        display: "block",
                        width: "100%",
                        padding: "8px",
                        margin: "10px 0",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                    }}
                />
            </div>

            {quiz.questions.map((question, qIndex) => (
                <div
                    key={qIndex}
                    style={{
                        marginBottom: "20px",
                        padding: "15px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        background: "#f9f9f9",
                    }}
                >
                    <div>
                        <input
                            type="text"
                            value={question.text}
                            onChange={(e) => updateQuestionText(qIndex, e.target.value)}
                            placeholder={`Question ${qIndex + 1}`}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "8px",
                                margin: "10px 0",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>
                    {question.options.map((option, oIndex) => (
                        <div key={oIndex} style={{ display: "flex", alignItems: "center" }}>
                            <input
                                type={option.type}
                                checked={option.isCorrect}
                                onChange={() => toggleCorrectOption(qIndex, oIndex)}
                                style={{ marginRight: "10px" }}
                            />
                            <input
                                type="text"
                                value={option.text}
                                onChange={(e) =>
                                    updateOptionText(qIndex, oIndex, e.target.value)
                                }
                                placeholder="Option text"
                                style={{
                                    flex: 1,
                                    padding: "8px",
                                    margin: "5px 0",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                }}
                            />
                        </div>
                    ))}
                    <div style={{ marginTop: "10px" }}>
                        <button onClick={() => addOption(qIndex, "radio")}>Add Radio</button>
                        <button
                            onClick={() => addOption(qIndex, "checkbox")}
                            style={{ marginLeft: "10px" }}
                        >
                            Add Checkbox
                        </button>
                        <button
                            onClick={() => removeQuestion(qIndex)}
                            style={{
                                marginLeft: "10px",
                                background: "red",
                                color: "white",
                            }}
                        >
                            Remove Question
                        </button>
                    </div>
                </div>
            ))}

            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={addQuestion}
                    style={{
                        padding: "10px 15px",
                        borderRadius: "4px",
                        border: "none",
                        background: "#28a745",
                        color: "white",
                    }}
                >
                    Add Question
                </button>
                <button
                    onClick={handleSave}
                    style={{
                        marginLeft: "10px",
                        padding: "10px 15px",
                        borderRadius: "4px",
                        border: "none",
                        background: "#007bff",
                        color: "white",
                    }}
                >
                    Save
                </button>
            </div>
        </div>
    );

};

export default QuizBuilder;
