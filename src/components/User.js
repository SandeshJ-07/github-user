import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Followers from './Followers';
function User(){
    return(
        <section className='section'>
            <Wrapper className='section-center'>
                <Card></Card>
                <Followers></Followers>
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.div`
    display:grid;
    padding-top:2rem;
    gap: 3rem 2rem;
    @media (min-width:992px){
        grid-template-columns:1fr 1fr;
    }
`;

export default User;