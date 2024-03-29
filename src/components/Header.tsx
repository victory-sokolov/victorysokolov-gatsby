import { Link } from "gatsby";
import "normalize.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { ContainerStyle } from "../assets/styles/GlobalStyles";
import Hero from "./Hero";
import Nav from "./Nav";
import { Toggle } from "./Toggle";
import { useLocation } from "@reach/router";

const HeaderStyles = styled.header`
    background: var(--header);
    min-height: 20rem;
    position: relative;

    .heading-content {
        display: flex;
        align-items: center;
        padding: 1.5rem;
    }

    .wave,
    .wave-bottom {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .wave-bottom {
        fill: #dcdcdc;
    }

    .wave {
        bottom: -0.5rem;
        transition: all 0.5s linear;
        fill: var(--body);
    }

    h1 {
        a {
            font-weight: 800;
            color: white;
            letter-spacing: 1.5px;
            font-size: 3rem;

            &:hover > span:first-child {
                animation: moveTextRight 1s;
            }

            &:hover > span:last-child {
                animation: moveTextLeft 1s;
            }
        }

        span:last-child {
            position: relative;
            left: 1rem;
        }
    }

    .color-mode {
        z-index: 10;
        fill: white;
    }

    @media ${props => props.theme.t.breakpoints.mobile} {
        min-height: 10rem;

        .heading-content {
            padding-top: 1.5rem;
        }

        h1 a {
            font-size: 2.4rem;
        }

        .wave,
        .wave-bottom {
            display: none;
        }
    }
`;

export const Header: React.FC = () => {
    const path = useLocation().pathname;
    const [isRootUrl, setIsRootUrl] = useState(path === "/" ? true : false);

    useEffect(() => {
        setIsRootUrl(path === "/" ? true : false);
    }, [path]);

    return (
        <HeaderStyles>
            <ContainerStyle>
                <div className="heading-content">
                    <svg preserveAspectRatio="none" className="wave-bottom" height="74" viewBox="0 0 1440 74">
                        <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
                    </svg>
                    <svg preserveAspectRatio="none" className="wave" height="74" viewBox="0 0 1440 74">
                        <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
                    </svg>
                    <h1>
                        <Link to="/">Viktor Sokolov</Link>
                    </h1>
                    <Nav />
                    <Toggle />
                </div>
                {isRootUrl && <Hero />}
            </ContainerStyle>
        </HeaderStyles>
    );
};
