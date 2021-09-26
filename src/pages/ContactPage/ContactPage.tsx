import React from 'react';
import styled from "styled-components";
import {openPopupWidget} from "react-calendly";

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2D3047;
    padding: 80px 20px;
`;

const ContactMessage = styled.div`
    margin-bottom: 20px;
    color: white;
    font-size: 32px;
`;

const PopupButton = styled.button`
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 24px;
  font-weight: 600;
  line-height: 20px;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
`;

const ContactPage = () => {
    return (
        <MainWrapper>
            <ContactMessage>Want to get in touch?</ContactMessage>
            <PopupButton onClick={() => {
                openPopupWidget({url: 'https://calendly.com/alessiosymons'})
            }}>
                Schedule a meeting
            </PopupButton>
        </MainWrapper>
    );
};

export default ContactPage;
