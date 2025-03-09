"use client";

import styled, { css } from "styled-components";

const transitionEasing = "0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)";

/* Main container */
export const Container = styled.div<{ $active: boolean }>`
  position: relative;
  width: 90%;
  max-width: 960px;
  min-height: 480px;
  margin: 2rem auto;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    width: 95%;
    border-radius: 10px;
  }
`;

/* Sign Up container */
export const SignUpContainer = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  transition: transform ${transitionEasing};
  opacity: 0;
  z-index: 1;

  ${({ $active }) =>
    $active &&
    css`
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
    `}

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    transform: none;
    opacity: 1;
    z-index: 5;
    display: ${({ $active }) => ($active ? "block" : "none")};
  }
`;

/* Sign In container */
export const SignInContainer = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  transition: transform ${transitionEasing};
  z-index: 2;

  ${({ $active }) =>
    $active &&
    css`
      transform: translateX(100%);
    `}

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    transform: none;
    display: ${({ $active }) => ($active ? "none" : "block")};
  }
`;

/* Overlay container */
export const OverlayContainer = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform ${transitionEasing};
  z-index: 100;
  transform: ${({ $active }) =>
    $active ? "translateX(-100%)" : "translateX(0)"};

  @media (max-width: 768px) {
    display: none;
  }
`;

/* Overlay */
export const Overlay = styled.div<{ $active: boolean }>`
  background: linear-gradient(to left, #63aeee, #3893ea);
  position: relative;
  left: -100%;
  width: 200%;
  height: 100%;
  transition: transform ${transitionEasing};
  transform: ${({ $active }) =>
    $active ? "translateX(50%)" : "translateX(0)"};

  @media (max-width: 768px) {
    display: none;
  }
`;

/* Left Overlay Panel */
export const LeftOverlayPanel = styled.div<{ $active: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  justify-content: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* Right Overlay Panel */
export const RightOverlayPanel = styled.div<{ $active: boolean }>`
  position: absolute;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* Form */
export const Form = styled.form`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px; /* Increased width from 350px to 500px */
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  border-radius: 5px;
  margin: 0 auto; /* Centered horizontally */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 90%;
  }
`;

/* Title */
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

/* Input */
export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: 1px solid #a5d8ff;
  color: black;
  border-radius: 10px;
  font-size: 1rem;
  background: #ecf0f1;
  transition: border 0.3s;

  &:focus {
    outline: none;
    border-color: #74c0fc;
    box-shadow: 0 0 8px rgba(116, 192, 252, 0.6);
  }
`;

/* Button */
export const Button = styled.button`
  border-radius: 25px;
  border: none;
  background: #74c0fc;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 2rem;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.2s;
  margin-top: 1rem;

  &:hover {
    background: #1c5980;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

/* Anchor */
export const Anchor = styled.a`
  color: #2c3e50;
  font-size: 0.9rem;
  text-decoration: underline;
  margin: 1rem 0;
  cursor: pointer;
`;

/* Google Button */
export const GoogleButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #ffffff;
  color: #111827;
  border: 1px solid #e5e7eb;
  margin-top: 0.5rem;

  &:hover {
    background: #f3f4f6;
    transform: translateY(-2px);
  }
`;
