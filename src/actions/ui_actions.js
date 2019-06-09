export const EMBIGGEN_NAVBAR = 'EMBIGGEN_NAVBAR';
export const DIMINISH_NAVBAR = 'DIMINISH_NAVBAR';
export const SET_HEADER = 'SET_HEADER';

export const setHeader = (header) => {
  return {
    type: SET_HEADER,
    payload: header
  }
}

export const embiggenNavbar = () => {
  return {
    type: EMBIGGEN_NAVBAR
  };
}

export const diminishNavbar = () => {
  return {
    type: DIMINISH_NAVBAR
  };
}
