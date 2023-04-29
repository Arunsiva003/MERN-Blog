import React, { useState, useEffect } from "react";
import styled,{keyframes} from "styled-components";

export const TypingAnimation = ({ textArray, typingSpeed }) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = textArray[currentIndex];
      setText(currentText.slice(0, text.length + 1));
      if (text.length === currentText.length) {
        setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % textArray.length);
        }, 2000);
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, currentIndex, textArray, typingSpeed]);

  return (
    <>
    <StyledTypingAnimation>
      <StyledText>{text}</StyledText>
    </StyledTypingAnimation>
    <FloatingText text={"ScrollDown"}/>
    </>
  );
};

const StyledTypingAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`;

const StyledText = styled.p`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: black;
`;


const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  position: absolute;
  font-size: 2rem;
  color: black;
  animation: ${float} 3s ease-in-out infinite;
`;

const FloatingText = ({text}) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};


export default TypingAnimation;
