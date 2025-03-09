"use client";

import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { testimonials } from "@/constans";

const scrollUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #eef2f6 100%);
`;

const Header = styled.div`
  padding: 2rem 1rem 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin: 0;
`;

const ScrollerContainer = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const ScrollerContent = styled.div<{ slowed: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  /* When not slowed: 40s; when slowed: 80s */
  animation: ${scrollUp} ${({ slowed }) => (slowed ? "80s" : "40s")} linear
    infinite;
`;

const TestimonialCard = styled.div<{
  $hovered: boolean;
  $isAnyHovered: boolean;
}>`
  background: #ffffff;
  color: #333;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.4s ease;

  /* Default rotation */
  transform: rotate(-3deg);

  /* Every third card is straight */
  &:nth-child(3n) {
    transform: rotate(0deg);
  }

  &:hover {
    transform: rotate(0deg) scale(1.05) translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  filter: ${({ $hovered, $isAnyHovered }) =>
    $isAnyHovered
      ? $hovered
        ? "brightness(1.2) blur(0)"
        : "brightness(1) blur(1px)"
      : "brightness(1) blur(0)"};
`;

const TestimonialsScroller: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const leaveTimer = useRef<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    leaveTimer.current = window.setTimeout(() => {
      setHoveredCard(null);
    }, 200);
  };

  return (
    <SectionContainer>
      <Header>
        <Title>What Our Lazy Customers Say</Title>
      </Header>
      <ScrollerContainer>
        <ScrollerContent slowed={hoveredCard !== null}>
          {testimonials.map((item, idx) => (
            <TestimonialCard
              key={idx}
              $hovered={hoveredCard === idx}
              $isAnyHovered={hoveredCard !== null}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <strong>{item.name}</strong>
              <br />
              <small>{item.sub}</small>
              <p style={{ marginTop: "0.5rem" }}>{item.text}</p>
            </TestimonialCard>
          ))}

          {testimonials.map((item, idx) => (
            <TestimonialCard
              key={"dup-" + idx}
              $hovered={hoveredCard === idx + testimonials.length}
              $isAnyHovered={hoveredCard !== null}
              onMouseEnter={() => handleMouseEnter(idx + testimonials.length)}
              onMouseLeave={handleMouseLeave}
            >
              <strong>{item.name}</strong>
              <br />
              <small>{item.sub}</small>
              <p style={{ marginTop: "0.5rem" }}>{item.text}</p>
            </TestimonialCard>
          ))}
        </ScrollerContent>
      </ScrollerContainer>
    </SectionContainer>
  );
};

export default TestimonialsScroller;
