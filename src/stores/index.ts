export { getUsers } from "./core/userList";
import { configureStore } from "@reduxjs/toolkit";
import { userListReducer as userList } from "./core/userList";
import createSagaMiddleware from "redux-saga";
import { userSaga } from "./saga";

const saga = createSagaMiddleware();

export const store = configureStore({
  middleware: [saga],
  reducer: { userList },
});

saga.run(userSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
