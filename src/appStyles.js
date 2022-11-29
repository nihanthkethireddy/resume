import { css } from 'glamor'

.Typist .Cursor {
    display: inline-block; }
    .Typist .Cursor--blinking {
      opacity: 1;
      animation: blink 1s linear infinite; }
  
  @keyframes blink {
    0% {
      opacity: 1; }
    50% {
      opacity: 0; }
    100% {
      opacity: 1; } }

body {
  background: black;
  color: white;
  height: 100%;
}

#root {
  height: inherit;
}

.Typist {
    display: flex;
    justify-content: center;
    font-family: cursive;
    height: inherit;
    align-items: center;
}