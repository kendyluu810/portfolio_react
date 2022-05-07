import React from 'react'
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Hung Luu</span></h1>
                <p>
                    Frontend Web Developer - UI Design
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/kendy.luuu/" className="icon i-facebook">
                        <FaFacebookF />
                    </a>
                    <a href="https://github.com/kendyluu810/" className="icon i-github">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/kendy_luu/" className="icon i-instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://dribbble.com/kendyluu810" className="icon i-dribbble">
                        <FaDribbble />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-instagram{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
            .i-dribbble{
                &:hover{
                    border: 2px solid red;
                    color: pink;
                }
            }
        }
    }
`;

export default HomePage;
