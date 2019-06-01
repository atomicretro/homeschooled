export const RESIZE_NAVBAR = 'RESIZE_NAVBAR';

export const resizeNavbar = (size) => {
  return {
    type: RESIZE_NAVBAR,
    size
  };
}
