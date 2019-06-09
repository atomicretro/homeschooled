export const EMBIGGEN_NAVBAR = 'EMBIGGEN_NAVBAR';
export const DIMINISH_NAVBAR = 'DIMINISH_NAVBAR';

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
