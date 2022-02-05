import { call, put, takeLatest } from "redux-saga/effects";
import { getUsersSuccess, UserList, userListSlice } from "../core/userList";

type IApiPayload = Omit<UserList, "address"> & { address: { city: string } };

const URL = `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data`;

function* getUserList() {
  try {
    const res = yield call(() => fetch(URL));
    const jsonData: IApiPayload[] = yield res.json();

    yield put(
      getUsersSuccess(
        jsonData.map(({ id, name, username, email, address: { city } }) => ({
          id,
          name,
          username,
          email,
          city,
        }))
      )
    );
  } catch (e) {}
}

export function* userSaga() {
  yield takeLatest(userListSlice.actions.getUsers.toString(), getUserList);
}
