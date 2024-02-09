import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oops, Wrong page</h1>
      <h2>Cat img here</h2>
      <h3>
        Error details : {err.status} {err.statusText}
      </h3>
    </>
  );
};

export default Error;
