export const DESKTOP_START_POINT = 720;

export function largerWidth(w: number) {
  return w < DESKTOP_START_POINT;
}
