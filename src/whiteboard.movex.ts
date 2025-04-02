import { createMovexReducer } from "movex";

type WhiteboardState = {
  drawings: { x: number; y: number; color: string }[];
};

export const whiteboardMovex = createMovexReducer<WhiteboardState>()({
  initialState: { drawings: [] },
  actions: {
    addDrawing: (state, { x, y, color }: { x: number; y: number; color: string }) => ({
      drawings: [...state.drawings, { x, y, color }],
    }),
  },
});
