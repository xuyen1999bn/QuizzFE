import React from 'react';
import SubjectRecent from './SubjectRecent';
import SubjectDefault from './SubjectDefault';
import { Row } from 'antd';
import { SubjectStateProvider } from '../../../store/context/subjectContext';
import { GameStateProvider } from '../../../store/context/gameContext';
import { GetAuthStateContext } from '../../../store/context/authContext';

function Home(props) {
    const { authState } = GetAuthStateContext();
    return (
        <>
            <SubjectStateProvider>
                <GameStateProvider>
                    {(localStorage.getItem('token_access') && authState.accessToken)
                        &&
                        <Row>
                            <SubjectRecent />
                        </Row>
                    }
                    <Row>
                        <SubjectDefault />
                    </Row>
                </GameStateProvider>
            </SubjectStateProvider>
        </>
    );
}

export default Home;