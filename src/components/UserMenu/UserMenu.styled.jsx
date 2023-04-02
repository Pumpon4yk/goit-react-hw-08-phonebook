import styled from 'styled-components';


export const Container = styled.div`
display: flex;
gap: 15px

`

export const Text = styled.p`
padding: 0;
margin: 0;

`

export const Button = styled.button`
width: 55px;
height: 20px;
  background-color: rgb(228, 30, 27. 0.9);
  border-radius: 100px;
  box-shadow: rgba(125, 50, 10, 0.2) 0 -25px 18px -14px inset,
    rgba(125, 50, 10, 0.15) 0 1px 2px, rgba(125, 50, 10, 0.15) 0 2px 4px,
    rgba(125, 50, 10, 0.15) 0 4px 8px, rgba(125, 50, 10, 0.15) 0 8px 16px,
    rgba(125, 50, 10, 0.15) 0 16px 32px;
  color: red;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 2px 5px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    box-shadow: rgba(125, 50, 10, 0.25) 0 -25px 18px -14px inset,
      rgba(125, 50, 10, 0.25) 0 1px 2px, rgba(125, 50, 10, 0.25) 0 2px 4px,
      rgba(125, 50, 10, 0.25) 0 4px 8px, rgba(125, 50, 10, 0.25) 0 8px 16px,
      rgba(125, 50, 10, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`