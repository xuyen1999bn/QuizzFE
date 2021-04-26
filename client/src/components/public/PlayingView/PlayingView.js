import { Button, Tooltip, Col, message, Row, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { WrapContent } from '../../../utilities/styledComponent/_shared';
import { useHistory, useParams } from 'react-router';
import { GetAuthStateContext } from '../../../store/context/authContext';
import { PlayingCard, QuestionContent, Answer, ResultView } from '../../../utilities/styledComponent/PlayingComponent/PlayingComponent';
import { CloseOutlined, BarChartOutlined, DeleteOutlined, PhoneOutlined } from '@ant-design/icons';
import { axiosInstance } from '../../../configs/axiosInstance';
import LoadingForm from '../../shared/LoadingForm';
import Call1 from '../../../assets/call-1.jpg'
import Call2 from '../../../assets/call-2.jpg'
import Call3 from '../../../assets/call-3.jpg'
import Call4 from '../../../assets/call-4.jpg';
import Call5 from '../../../assets/call-5.jpg';

function PlayingView() {
    const { gameId } = useParams();
    const history = useHistory();
    let interval;
    const [countDownPlaying, setCountDownPlaying] = useState({
        label: "",
        number: 0,
        timer: 120
    });
    const [gameState, setGameState] = useState({
        game: null,
        subject: null,
        selected: 0,
        currentQuestion: null,
        active: false,
        checked: false,
        loading: false,
        startGame: true,
        removeAnswerWrong: null,
        getRightAnswer: {
            active: false,
            value: null,
        },
        getWrongAnswer: {
            active: false,
            value: [],
        }
    });
    const { authState } = GetAuthStateContext();
    const countDown = (duration) => {
        let timer = duration;
        let minutes, seconds;
        interval = window.setInterval(() => {
            minutes = window.parseInt(timer / 60, 10);
            seconds = window.parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            if (--timer === -2) {
                window.clearInterval(interval);
            } else {
                setCountDownPlaying({
                    label: `${minutes} : ${seconds}`,
                    number: minutes * 60 + seconds,
                    timer: timer,
                });
            }
        }, 1000);
    }
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const getWrongAnswer = () => {
        axiosInstance.get(`/game/remove-wrong-answer/${gameState.game?._id}/question/${gameState.currentQuestion?._id}`)
            .then((res) => {
                if (res && res.status >= 200 && res.status <= 300) {
                    console.log(res);
                    setGameState({
                        ...gameState,
                        game: {
                            ...gameState.game,
                            isRemoveTwoWrongAnswer: true,
                        },
                        getWrongAnswer: {
                            active: true,
                            value: res.data
                        }
                    });
                } else {
                    message.error({ content: "Error get support" })
                }
            });
    }
    const getRandomImg = () => {
        const randomImg = getRandomInt(5);
        switch (randomImg) {
            case 1:
                return Call1;
            case 2:
                return Call2;
            case 3:
                return Call3;
            case 4:
                return Call4;
            case 5:
                return Call5;
            default:
                return Call1;
        }
    }
    const getAnswerText = (answer) => {
        switch (answer) {
            case 1:
                return "A"
            case 2:
                return "B"
            case 3:
                return "C"
            case 4:
                return "D"
            default:
                return ""
        }
    }
    const getCallSupport = () => {
        axiosInstance.get(`/game/call-support/${gameState.game?._id}/question/${gameState.currentQuestion?._id}`)
            .then((res) => {
                if (res && res.status >= 200 && res.status <= 300) {
                    console.log(res);
                    const imgRandom = getRandomImg();
                    Modal.info({
                        className: "ctn-support-call",
                        title: "Answer Support",
                        content: (
                            <>
                                <img src={imgRandom} alt="" width="100%" height="300" />
                                <h3>My answer is {getAnswerText(res.data.supportAnswer)}</h3>
                            </>
                        )
                    });
                    setGameState({
                        ...gameState,
                        game: {
                            ...gameState.game,
                            isCalledSupport: true,
                        },
                    });
                } else {
                    message.error({ content: "Error get support" })
                }
            });
    }
    const getRightAnswer = () => {
        axiosInstance.get(`/game/right-answer/${gameState.game?._id}/question/${gameState.currentQuestion?._id}`)
            .then((res) => {
                if (res && res.status >= 200 && res.status <= 300) {
                    let optionRight = 1;
                    let value = 50;
                    let options = [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 },];
                    options.forEach(option => {
                        if (option.id === optionRight) option.value += 50;
                        let optionValue = getRandomInt(value);
                        if (option.id === 4) {
                            option.value += value;
                        } else {
                            option.value += optionValue;
                            value -= optionValue;
                        }
                    });
                    setGameState({
                        ...gameState,
                        game: {
                            ...gameState.game,
                            isGetRightAnswer: true,
                        },
                        getRightAnswer: {
                            active: true,
                            value: {
                                optionA: options[0].value,
                                optionB: options[1].value,
                                optionC: options[2].value,
                                optionD: options[3].value,
                            }
                        }
                    });
                } else {
                    message.error({ content: "Error get support" })
                }
            });
    }
    const getQuestion = (game) => {
        const questionId = gameState.subject.questionList[game.currentQuestionPosition];
        axiosInstance.get('/question/' + questionId).then((res) => {
            if (res && res.status >= 200 && res.status <= 300) {
                setGameState({
                    ...gameState,
                    loading: false,
                    currentQuestion: res.data.question,
                    active: false,
                    game: game,
                    getRightAnswer: {
                        active: false,
                        value: null,
                    },
                    getWrongAnswer: {
                        active: false,
                        value: [],
                    }
                });
            }
        })
    }
    const updateGame = (dataUpdate) => {
        setGameState({
            ...gameState,
            loading: true,
            selected: dataUpdate.playerAnswerPosition,
        });
        axiosInstance.put('/game/' + gameId, dataUpdate).then((res) => {
            if (res && res.status >= 200 && res.status <= 300) {
                setGameState({
                    ...gameState,
                    loading: true,
                    active: true,
                    checked: res.data.isCorrect,
                    selected: dataUpdate.playerAnswerPosition,
                });
                window.setTimeout(() => {
                    if (!res.data.game.isFinished) {
                        getQuestion(res.data.game);
                    } else {
                        setGameState({
                            ...gameState,
                            game: res.data.game,
                            loading: false,
                        });
                    }
                }, 1000);
            } else {
                message.error({ content: "Cannot update answer" });
            }
        })
    }
    const handleSelectAnswer = (value) => {
        if (!gameState.loading) {
            let dataUpdate = {};
            if ((gameState.game.currentQuestionPosition + 1) === gameState.subject.questionList.length) {
                dataUpdate = {
                    playerAnswerPosition: value,
                    question: gameState.currentQuestion._id,
                    isFinished: true,
                    doingTime: (gameState.game.time - countDownPlaying.number),
                    gameId: gameState.game._id
                };
            } else {
                dataUpdate = {
                    playerAnswerPosition: value,
                    question: gameState.currentQuestion._id,
                    isFinished: false,
                    doingTime: (gameState.game.time - countDownPlaying.number),
                    gameId: gameState.game._id
                };
            }
            updateGame(dataUpdate);
        }
    }
    useEffect(() => {
        if (gameState.game?._id && gameState.game?.subject && gameState.startGame) {
            const questionId = gameState.subject.questionList[gameState.game.currentQuestionPosition];
            if (!questionId) {
                message.info({ content: "Don't have any question" });
                history.push('/home/join');
            }
            axiosInstance.get('/question/' + questionId).then((res) => {
                if (res && res.status >= 200 && res.status <= 300) {
                    setGameState({
                        ...gameState,
                        loading: false,
                        startGame: false,
                        currentQuestion: res.data.question
                    });
                }
            })
        }
        // eslint-disable-next-line
    }, [gameState.game]);
    useEffect(() => {
        if (!authState.accessToken && !localStorage.getItem('token_access')) {
            history.push('/auth/login');
        }
        setGameState({
            ...gameState,
            loading: true,
        });
        axiosInstance.get('/game/' + gameId).then((res) => {
            if (res && res.status >= 200 && res.status <= 300) {
                setGameState({
                    ...gameState,
                    game: res.data,
                    subject: res.data.subject
                });
                countDown(res.data.time);
            } else {
                message.error({ content: "Cannot found game" });
                window.setTimeout(() => {
                    history.push("/home/join");
                }, 1000);
            }
        });
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        if (--countDownPlaying.timer === -2) {
            axiosInstance.put('/game/' + gameId, {
                playerAnswerPosition: 0,
                isFinished: true,
                question: gameState.currentQuestion._id,
                doingTime: (gameState.game.time - countDownPlaying.number),
                gameId: gameState.game._id
            }).then((res) => {
                if (res && res.status >= 200 && res.status <= 300) {
                    setGameState({
                        ...gameState,
                        game: res.data.game
                    });
                }
            })
        }
        //eslint-disable-next-line
    }, [countDownPlaying.timer])
    return (
        <>
            {gameState.loading && <LoadingForm />}
            <WrapContent
                padding='24px'
                backgroundColor="#1e2827"
                className="playing-view"
            >
                <PlayingCard
                    title={
                        <WrapContent padding='0 16px'>
                            <Row>
                                <Col md={8} sm={24} className="head-action-col">
                                    <WrapContent display='flex' justifyContent='flex-start'>
                                        <Tooltip placement="top" title="Close Game" color="red">
                                            <Button
                                                type="danger"
                                                icon={<CloseOutlined />}
                                                onClick={() => {
                                                    Modal.confirm({
                                                        content: "Close game ?",
                                                        onOk: () => {
                                                            Modal.destroyAll();
                                                            history.push('/home/join');
                                                        },
                                                    })
                                                }}
                                            ></Button>
                                        </Tooltip>
                                        <div className="score-current">
                                            <span>Score:</span>
                                            <span>{gameState?.game?.score || "0"}</span>
                                        </div>
                                    </WrapContent>
                                </Col>
                                <Col md={8} sm={24} className="head-action-col">
                                    <WrapContent display='flex' justifyContent='center' width="100%" color='#fff'>
                                        {!gameState?.game?.isFinished && countDownPlaying.label}
                                    </WrapContent>
                                </Col>
                                <Col md={8} sm={24} className="head-action-col">
                                    <WrapContent display='flex' justifyContent='flex-end'>
                                        <Tooltip placement="top" title="Get Right Answer" color="blue">
                                            <Button
                                                type="primary"
                                                icon={<BarChartOutlined />}
                                                onClick={() => getRightAnswer()}
                                                disabled={gameState.game?.isGetRightAnswer || gameState?.game?.isFinished}
                                            ></Button>
                                        </Tooltip>
                                        <Tooltip placement="top" title="Call Support" color="blue">
                                            <Button
                                                type="primary"
                                                icon={<PhoneOutlined />}
                                                onClick={() => getCallSupport()}
                                                disabled={gameState.game?.isCalledSupport || gameState?.game?.isFinished}
                                            ></Button>
                                        </Tooltip>
                                        <Tooltip placement="top" title="Remove Answer Wrong" color="blue">
                                            <Button
                                                type="primary"
                                                icon={<DeleteOutlined />}
                                                onClick={() => getWrongAnswer()}
                                                disabled={gameState.game?.isRemoveTwoWrongAnswer || gameState?.game?.isFinished}
                                            ></Button>
                                        </Tooltip>
                                    </WrapContent>
                                </Col>
                            </Row>
                        </WrapContent>
                    }
                >
                    <Row>
                        <Col span={24}>

                            <Row style={{ padding: '10px 16px' }}>
                                <Col md={12} sm={24}>
                                    <h2 className='title-question' style={{ minHeight: '30px' }}>
                                        {!gameState?.game?.isFinished ? `Question ${gameState.game?.currentQuestionPosition + 1}` : ' '}
                                    </h2>
                                </Col>
                                <Col md={12} sm={24} className='title-position-question'>
                                    {!gameState?.game?.isFinished && <WrapContent
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='flex-end'
                                        fontWeight='bold'
                                        height='100%'

                                    >
                                        {
                                            gameState.game ?
                                                `${gameState.game?.currentQuestionPosition + 1} / ${gameState.subject?.questionList?.length}` :
                                                '-/-'
                                        }
                                    </WrapContent>
                                    }
                                </Col>
                            </Row>
                            <WrapContent
                                padding='0 16px'
                                position="relative"
                                height="calc(100vh - 385px)"
                            >
                                {gameState?.game?.isFinished ?
                                    <Row>
                                        <Col md={24} sm={24}>
                                            <ResultView failed={gameState.game?.score === 0}>
                                                <div className='result-background'></div>
                                                <div className='result-content'>
                                                    <h2>Result</h2>
                                                    <p>Score: {gameState.game.score}</p>
                                                    <p>Time: {(120 - gameState.game.time)} seconds</p>
                                                </div>
                                            </ResultView>
                                        </Col>
                                    </Row>
                                    :
                                    <>
                                        <WrapContent
                                            backgroundImage={`url(${gameState.currentQuestion?.image})`}
                                            style={{
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                opacity: 0.4,
                                                position: 'absolute',
                                                inset: 0,
                                                margin: '0 16px',
                                            }}
                                        ></WrapContent>
                                        <QuestionContent>
                                            {gameState.currentQuestion?.name}
                                        </QuestionContent>
                                    </>
                                }
                            </WrapContent>
                        </Col>
                    </Row>
                    {!gameState?.game?.isFinished ?
                        <Row style={{ padding: '14px 16px' }} gutter={[16, 16]}>
                            <Col md={12} sm={24} xs={24}>
                                <Answer
                                    active={gameState.selected === 1}
                                    onClick={() => handleSelectAnswer(1)}
                                    activeAnimation={gameState.selected === 1 && gameState.active}
                                    checked={gameState.checked}
                                >
                                    <div className="title-answer"> A:</div>
                                    {
                                        (gameState.getWrongAnswer.active && gameState.getWrongAnswer.value.indexOf(1) > -1) ?
                                            "" :
                                            <>
                                                {gameState.currentQuestion?.optionA}
                                                {
                                                    gameState.getRightAnswer.active && <span className="right-question">
                                                        {gameState.getRightAnswer.value?.optionA} %
                                                        </span>
                                                }
                                            </>
                                    }
                                </Answer>
                            </Col>
                            <Col md={12} sm={24} xs={24}>
                                <Answer
                                    active={gameState.selected === 2}
                                    onClick={() => handleSelectAnswer(2)}
                                    activeAnimation={gameState.selected === 2 && gameState.active}
                                    checked={gameState.checked}
                                >
                                    <div className="title-answer"> B:</div>
                                    {
                                        (gameState.getWrongAnswer.active && gameState.getWrongAnswer.value.indexOf(2) > -1) ?
                                            "" :
                                            <>
                                                {gameState.currentQuestion?.optionB}
                                                {
                                                    gameState.getRightAnswer.active && <span className="right-question">
                                                        {gameState.getRightAnswer.value?.optionB} %
                                                    </span>
                                                }
                                            </>
                                    }
                                </Answer>
                            </Col>
                            <Col md={12} sm={24} xs={24}>
                                <Answer
                                    active={gameState.selected === 3}
                                    onClick={() => handleSelectAnswer(3)}
                                    activeAnimation={gameState.selected === 3 && gameState.active}
                                    checked={gameState.checked}
                                >
                                    <div className="title-answer"> C:</div>
                                    {
                                        (gameState.getWrongAnswer.active && gameState.getWrongAnswer.value.indexOf(3) > -1) ?
                                            "" :
                                            <>
                                                {gameState.currentQuestion?.optionC}
                                                {
                                                    gameState.getRightAnswer.active && <span className="right-question">
                                                        {gameState.getRightAnswer.value?.optionC} %
                                                    </span>
                                                }
                                            </>
                                    }
                                </Answer>
                            </Col>
                            <Col md={12} sm={24} xs={24}>
                                <Answer
                                    active={gameState.selected === 4}
                                    onClick={() => handleSelectAnswer(4)}
                                    activeAnimation={gameState.selected === 4 && gameState.active}
                                    checked={gameState.checked}
                                >
                                    <div className="title-answer"> D:</div>
                                    {
                                        (gameState.getWrongAnswer.active && gameState.getWrongAnswer.value.indexOf(4) > -1) ?
                                            "" :
                                            <>
                                                {gameState.currentQuestion?.optionD}
                                                {
                                                    gameState.getRightAnswer.active && <span className="right-question">
                                                        {gameState.getRightAnswer.value?.optionD} %
                                                    </span>
                                                }
                                            </>
                                    }
                                </Answer>
                            </Col>
                        </Row> :
                        <Row style={{ padding: '14px 16px', minHeight: '200px' }} gutter={[16, 16]}></Row>
                    }
                </PlayingCard>
            </WrapContent >
        </>
    );
}

export default PlayingView;