import React from 'react';
import styled from 'styled-components';
import { Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const FooterContainer = styled.div`
    background-color: #333;
    color: #fff;
    padding: 40px 20px;
    text-align: center;
`;

const FooterLink = styled(Link)`
    color: #fff;
    margin: 0 10px;
    transition: color 0.3s ease;

    &:hover {
        color: #1e90ff;
    }
`;

const FooterIcons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    svg {
        font-size: 2rem;
        margin: 0 10px;
        transition: color 0.3s ease;

        &:hover {
            color: #1e90ff;
        }
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Typography variant="h6" gutterBottom>
                My Portfolio
            </Typography>
            <FooterIcons>
                <FooterLink href="https://www.facebook.com" target="_blank">
                    <Facebook />
                </FooterLink>
                <FooterLink href="https://www.twitter.com" target="_blank">
                    <Twitter />
                </FooterLink>
                <FooterLink href="https://www.instagram.com" target="_blank">
                    <Instagram />
                </FooterLink>
                <FooterLink href="https://www.linkedin.com" target="_blank">
                    <LinkedIn />
                </FooterLink>
            </FooterIcons>
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </Typography>
        </FooterContainer>
    );
};

export default Footer;
