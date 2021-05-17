// src/withContext.js

import React from "react";
const Context = React.createContext({});
export default Context;


// src/withContext.js

import React from "react";
import Context from "./Context";

const withContext = WrappedComponent => {
  const WithHOC = props => {
    return (
      <Context.Consumer>
        {context => <WrappedComponent {...props} context={context} />}
      </Context.Consumer>
    );
  };

  return WithHOC;
};

export default withContext;