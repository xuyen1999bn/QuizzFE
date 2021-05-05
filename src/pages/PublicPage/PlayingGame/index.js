import React from 'react';
import PlayingView from '../../../components/public/PlayingView/PlayingView';
import { GameStateProvider } from '../../../store/context/gameContext';
import { QuestionStateProvider } from '../../../store/context/questionContext';
import { SubjectStateProvider } from '../../../store/context/subjectContext';

function PlayingGame() {
    return (
        <>
            <SubjectStateProvider>
                <QuestionStateProvider>
                    <GameStateProvider>
                        <PlayingView />
                    </GameStateProvider>
                </QuestionStateProvider>
            </SubjectStateProvider>
        </>
    );
}

export default PlayingGame;