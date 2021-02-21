import React from "react";
import { render,waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";

test("renders learn react link",  async () => {
  const { queryAllByTestId, queryByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const input = queryByTestId("perPageSelector");
  
  expect(queryAllByTestId("post").length).toBe(0);
  userEvent.type(input, "3");
  
  await waitFor(() => {
    expect(input).toHaveValue(3);
    expect(queryAllByTestId("post").length).toBe(3);
  });

});
