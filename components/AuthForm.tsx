"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Container,
  SignUpContainer,
  SignInContainer,
  OverlayContainer,
  Overlay,
  LeftOverlayPanel,
  RightOverlayPanel,
  Form,
  Title,
  Input,
  Button,
  Anchor,
  GoogleButton,
} from "@/components/ui/LoginStyles";
import styled from "styled-components";

const MobileToggle = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    margin-top: 1rem;
  }
`;

const AuthForm: React.FC = () => {
  const [active, setActive] = useState(false); // active = true → Sign Up, false → Sign In
  const router = useRouter();

  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;
    toast("Registration successful!", {
      description: "Welcome aboard!",
    });
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const handleSignInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;
    toast("Sign in successful!", {
      description: "Welcome back!",
    });
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const handleGoogleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast("Google registration successful!", {
      description: "You signed up with your Google account!",
    });
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const handleGoogleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast("Google sign in successful!", {
      description: "You signed in with your Google account!",
    });
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <Container $active={active}>
      <SignUpContainer $active={active}>
        <Form onSubmit={handleSignUpSubmit}>
          <Title>Create account</Title>
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Button type="submit">Sign Up</Button>
          <GoogleButton type="button" onClick={handleGoogleSignUp}>
            <img
              src="googleLogo.svg"
              alt="Google logo"
              width={30}
              height={30}
            />
            <span>Sign up with Google</span>
          </GoogleButton>
        </Form>
      </SignUpContainer>
      <SignInContainer $active={active}>
        <Form onSubmit={handleSignInSubmit}>
          <Title>Sign In</Title>
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Anchor href="#">Forgot your password?</Anchor>
          <Button type="submit">Sign In</Button>
          <GoogleButton type="button" onClick={handleGoogleSignIn}>
            <img
              src="googleLogo.svg"
              alt="Google logo"
              width={30}
              height={30}
            />
            <span>Sign in with Google</span>
          </GoogleButton>
        </Form>
      </SignInContainer>
      <OverlayContainer $active={active}>
        <Overlay $active={active}>
          <LeftOverlayPanel $active={active}>
            <h2>Welcome back!</h2>
            <p>If you already have an account, click to sign in!</p>
            <Button type="button" onClick={() => setActive(false)}>
              Sign In
            </Button>
          </LeftOverlayPanel>
          <RightOverlayPanel $active={active}>
            <h2>Hello, friend!</h2>
            <p>If you don't have an account yet, sign up now!</p>
            <Button type="button" onClick={() => setActive(true)}>
              Sign Up
            </Button>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
      <MobileToggle>
        <Button type="button" onClick={() => setActive(!active)}>
          {active ? "Switch to Sign In" : "Switch to Sign Up"}
        </Button>
      </MobileToggle>
    </Container>
  );
};

export default AuthForm;
