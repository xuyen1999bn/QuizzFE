import React from 'react';
import RankList from '../../../components/public/RankList/RankList';
import { GameStateProvider } from '../../../store/context/gameContext';
import { SubjectStateProvider } from '../../../store/context/subjectContext';

function Ranked(props) {
    return (
        <>
            <SubjectStateProvider>
                <GameStateProvider>
                    <RankList />
                </GameStateProvider>
            </SubjectStateProvider>
        </>
    );
}

export default Ranked;