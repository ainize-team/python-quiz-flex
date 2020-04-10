import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
`;

const CountText = styled.div`
    margin-top: ${props => props.marginTop || 0}px;
    margin-left: ${props => props.marginLeft || 0}px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.15px;
    color: #f2f2f2;
`;

const SubjectText = styled.div`
    margin-left: ${props => props.marginLeft || 0}px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0.15px;
    background: linear-gradient(to right, #AD1DF0 0%, #FF8C25 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    margin-bottom: 24px;
`;

const QuestionText = styled.div`
    margin-left: ${props => props.marginLeft || 0}px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.15px;
    color: #f2f2f2;
    margin-bottom: 24px;
`;

class Questionboard extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
        };
    }

    render() {
        const { count } = this.state;
        const { questions } = this.props;

        return (
            <Wrapper>
                <Header>
                    <CountText marginLeft={24} marginTop={24}>
                        {`${count + 1}/10`}
                    </CountText>
                </Header>
                <SubjectText marginLeft={24}>
                    {`${questions[count].Subject}`}
                </SubjectText>
                <QuestionText marginLeft={24}>
                    {`${questions[count].Question}`}
                </QuestionText>
            </Wrapper>
        );
    }
}

export default Questionboard;
