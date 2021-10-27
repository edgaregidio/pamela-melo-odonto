import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  /* margin: 2rem 0; */

  h1 {
    size: 1.125rem;
    font-weight: 500;
  }
  p {
    size: 1rem;
    font-weight: 200;
    line-height: 1.6rem;
    max-width: 1024px;
    text-align: center;
  }
`;

export const About = styled.div`
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CircleAvatar = styled.div`
  background: red;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 50%;

  .borderCircular {
    border-radius: 50%;
  }
`;

export const Avatar = styled(Image)``;
export const ImageBanner = styled(Image)``;
