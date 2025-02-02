import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { KanjiLesson } from '@/interface/IKanjiItem';
import { BookOpen, Pencil, FileText, List } from "lucide-react";

interface QuizGameProps {
    kanjiItems: KanjiLesson[];
}

const QuizGame: React.FC<QuizGameProps> = ({ kanjiItems }) => {
    const [questionType, setQuestionType] = useState<'hiragana' | 'mean'>('hiragana');
    const [remainingQuestions, setRemainingQuestions] = useState<KanjiLesson[]>([...kanjiItems]);
    const [currentQuestion, setCurrentQuestion] = useState<KanjiLesson | null>(null);
    const [options, setOptions] = useState<KanjiLesson[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (kanjiItems.length > 0) {
            generateQuestion();
            setLoading(false);
        }
    }, [kanjiItems]);

    const generateQuestion = () => {
        if (remainingQuestions.length === 0) {
            setShowResults(true);
            return;
        }
        const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
        const selectedQuestion = remainingQuestions[randomIndex];
        const correctAnswer = selectedQuestion.kanji;
        const shuffledOptions = kanjiItems
            .filter(item => item.kanji !== correctAnswer)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        shuffledOptions.push(selectedQuestion);
        shuffledOptions.sort(() => Math.random() - 0.5);

        setCurrentQuestion(selectedQuestion);
        setOptions(shuffledOptions);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setShowDetails(false);
        setRemainingQuestions(prev => prev.filter(item => item.id !== selectedQuestion.id));
    };

    const handleAnswer = (answer: string) => {
        const correct = answer === currentQuestion?.kanji;
        setSelectedAnswer(answer);
        setIsCorrect(correct);

        if (correct) {
            setCorrectCount(prev => prev + 1);
        } else {
            setWrongCount(prev => prev + 1);
        }

        const audio = new Audio(correct ? '/correct.mp3' : '/wrong.mp3');
        audio.play();
    };

    const resetGame = () => {
        setRemainingQuestions([...kanjiItems]);
        setCorrectCount(0);
        setWrongCount(0);
        setShowResults(false);
        generateQuestion();
    };

    if (loading) {
        return (
            <div className="text-center text-lg">Đang tải...</div>
        );
    }

    return (
        <Card className="w-[850px] max-w-full p-8 mx-auto mb-4">
            <div className="w-full max-w-md mx-auto mt-4">
                <p className="text-center text-lg mt-1 text-green-600">
                    {correctCount + wrongCount} / {kanjiItems.length} câu hỏi
                </p>
            </div>
            <CardHeader>
                <CardTitle className="text-2xl">
                    <Select value={questionType} onValueChange={(value) => setQuestionType(value as 'hiragana' | 'mean')}>
                        <SelectTrigger className="w-[150px] text-lg py-3 mb-5 md:mb-0 mt-3 md:mt-0">
                            <SelectValue placeholder="Chọn loại câu hỏi" />
                        </SelectTrigger>
                        <SelectContent className='bg-white'>
                            <SelectItem value="hiragana">Hiragana</SelectItem>
                            <SelectItem value="mean">Nghĩa</SelectItem>
                        </SelectContent>
                    </Select>
                </CardTitle>
            </CardHeader>

            <CardContent>
                {showResults ? (
                    <div className="text-center">
                        <p className="text-3xl font-bold mb-4">Kết quả</p>
                        <p className="text-xl text-green-500">✅ Đúng: {correctCount}</p>
                        <p className="text-xl text-red-500">❌ Sai: {wrongCount}</p>
                        <Button onClick={resetGame} className="mt-6 text-white bg-blue-500 text-lg w-full">
                            Luyện lại
                        </Button>
                    </div>
                ) : (
                    currentQuestion && (
                        <>
                            <p className="text-3xl font-semibold text-center mb-8">
                                {questionType === "hiragana"
                                    ? currentQuestion.hiragana
                                    : typeof currentQuestion.mean === 'string'
                                        ? JSON.parse(currentQuestion.mean)?.vi
                                        : currentQuestion.mean?.vi}
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {options.map(option => (
                                    <Button
                                        key={option.id}
                                        onClick={() => handleAnswer(option.kanji)}
                                        className={`md:text-2xl text-lg py-4 h-[70px] rounded-lg transition-colors ${selectedAnswer === option.kanji
                                            ? isCorrect
                                                ? "bg-green-600 text-white"
                                                : "bg-red-600 text-white"
                                            : "bg-gray-400 hover:bg-gray-600 text-white"
                                            }`}
                                        disabled={selectedAnswer !== null}
                                    >
                                        {option.kanji}
                                    </Button>
                                ))}
                            </div>

                            {selectedAnswer && (
                                <div className="mt-8 p-4 rounded-lg bg-gray-800">
                                    <p className={isCorrect ? "text-green-400" : "text-red-400"}>
                                        {isCorrect ? "🎉 Bạn đã chọn đúng!" : `❌ Sai rồi! Đáp án đúng: ${currentQuestion.kanji}`}
                                    </p>

                                    <p className="text-white mt-2 flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-yellow-400" />
                                        <span className="flex-1 break-words">Ý nghĩa: {typeof currentQuestion.mean === 'string'
                                            ? JSON.parse(currentQuestion.mean)?.vi
                                            : currentQuestion.mean?.vi}
                                        </span>
                                    </p>

                                    <p className="text-white mt-2 flex items-center gap-2">
                                        <Pencil className="w-5 h-5 text-blue-400" />
                                        <span className="flex-1 break-words">Phiên âm: {currentQuestion.hiragana}</span>
                                    </p>

                                    {currentQuestion.examples && currentQuestion.examples.length > 0 && (
                                        <p className="text-white mt-2 flex items-start gap-2">
                                            <FileText className="w-5 mt-1 h-5 text-green-400" />
                                            <span className="flex-1 break-words">Ví dụ: {currentQuestion.examples[0].sentence} - {currentQuestion.examples[0].meaning.vi}</span>
                                        </p>
                                    )}

                                    <div className="mt-2">
                                        <strong className="text-white flex gap-2">
                                            <List className="w-5 h-5 text-fuchsia-400" />
                                            Kanji Parts:
                                        </strong>
                                        <ul className="list-inside list-disc pl-6" style={{ listStylePosition: 'inside' }}>
                                            {currentQuestion.kanji_parts.map((part, idx) => (
                                                <li key={idx} className="text-white mt-1 flex">
                                                    <div className="flex items-center gap-2">
                                                        <span className="flex-1">
                                                            <strong> - {part.kanji}:</strong> {part.han_viet} - {typeof part.meaning === 'string' ? JSON.parse(part.meaning).vi : part.meaning?.vi}
                                                        </span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>
                            )}

                            <Separator className="my-3" />

                            <Button onClick={generateQuestion} className="w-full text-lg text-white py-6 bg-blue-500" disabled={selectedAnswer === null}>
                                Câu hỏi tiếp theo
                            </Button>
                        </>
                    )
                )}
            </CardContent>
        </Card>
    );
};

export default QuizGame;
