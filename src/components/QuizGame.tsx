import React, { useState, useEffect } from 'react';

interface KanjiItem {
    id: number;
    kanji: string;
    hiragana: string;
    mean: string;
    on_yomi: string;
    examples: string[];
}

interface QuizGameProps {
    kanjiItems: KanjiItem[];
}

const QuizGame: React.FC<QuizGameProps> = ({ kanjiItems }) => {
    const [questionType, setQuestionType] = useState<'hiragana' | 'mean'>('hiragana');
    const [currentQuestion, setCurrentQuestion] = useState<KanjiItem | null>(null);
    const [options, setOptions] = useState<KanjiItem[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showDetails, setShowDetails] = useState<boolean>(false);

    useEffect(() => {
        generateQuestion();
    }, [questionType]);

    const generateQuestion = () => {
        const randomQuestion = kanjiItems[Math.floor(Math.random() * kanjiItems.length)];
        const correctAnswer = randomQuestion.kanji;
        const shuffledOptions = kanjiItems
            .filter((item) => item.kanji !== correctAnswer)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        shuffledOptions.push(randomQuestion);
        shuffledOptions.sort(() => 0.5 - Math.random());

        setCurrentQuestion(randomQuestion);
        setOptions(shuffledOptions);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setShowDetails(false);  // Reset the details visibility
    };

    const handleAnswer = (answer: string) => {
        const correct = answer === currentQuestion?.kanji;
        setSelectedAnswer(answer);
        setIsCorrect(correct);

        const audio = new Audio(correct ? '/correct.mp3' : '/wrong.mp3');
        audio.play();
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="p-6 w-[90%] md:h-[450px] h-400px  mx-auto bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Học Kanji</h1>
                <select
                    value={questionType}
                    onChange={(e) => setQuestionType(e.target.value as 'hiragana' | 'mean')}
                    className="border rounded px-2 py-1"
                >
                    <option value="hiragana">Hiragana</option>
                    <option value="mean">Mean</option>
                </select>
            </div>

            {currentQuestion && (
                <>
                    <p className="text-lg font-medium mb-4">
                        {questionType === 'hiragana' ? currentQuestion.hiragana : currentQuestion.mean}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleAnswer(option.kanji)}
                                className={`p-3 rounded text-center border transition-colors ${selectedAnswer === option.kanji
                                    ? isCorrect
                                        ? 'bg-green-500 text-white'
                                        : 'bg-red-500 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                                disabled={selectedAnswer !== null}
                            >
                                {option.kanji}
                            </button>
                        ))}
                    </div>
                    {selectedAnswer && !isCorrect && (
                        <p className="mt-4 text-green-500">
                            Đáp án đúng: {currentQuestion.kanji}
                        </p>
                    )}
                    {selectedAnswer && isCorrect && (
                        <p className="mt-4 text-green-500">Bạn đã chọn đúng!</p>
                    )}

                    {/* Toggle Details Button */}
                    <button
                        onClick={toggleDetails}
                        className="mt-4 px-4 py-2 mr-3 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600"
                    >
                        {showDetails ? 'Ẩn chi tiết' : 'Hiển thị chi tiết'}
                    </button>

                    {/* Show Details */}
                </>
            )}

            <button
                onClick={generateQuestion}
                className="mt-4 px-4 py-2 mr-0 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
                Câu hỏi tiếp theo
            </button>
            {showDetails && currentQuestion && (
                <div className="mt-4 p-4 md:w-[30%] w-48 mb-6  bg-gray-100 rounded">
                    <p><strong>Meaning:</strong> {currentQuestion.mean}</p>
                    <p><strong>On-yomi:</strong> {currentQuestion.on_yomi}</p>
                    <p><strong>Examples:</strong> {currentQuestion.examples.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default QuizGame;
