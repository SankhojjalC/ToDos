import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isloggedIn = useSelector((state) => state.logedInReducer.isloggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        isloggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};
