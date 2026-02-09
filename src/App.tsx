import AppRoute from "./navigation/AppRoute";
import { appStore } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <AppRoute />
    </Provider>
  );
}

export default App;
