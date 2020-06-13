import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;

}
html,body,#root {
  height:100%
}

body,input,button {
  font-family:'Roboto',sans-serif,
}

body {
  background:#eee
}

button {
  cursor:pointer;
}

ul {
  list-style:none;
}

a {
  text-decoration:none;
}


`;
