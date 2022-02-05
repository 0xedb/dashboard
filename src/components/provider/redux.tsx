import { store } from "../../stores";
import { Provider } from "react-redux";

export const ReduxStore: React.FC = function ({ children }) {
  return <Provider store={store}>{children}</Provider>;
};
