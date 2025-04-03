import { createContext } from "react";
import PropTypes from "prop-types";
import { useField } from "./hooks/index";

export const CountryContext = createContext();

export const CountryProvider = ( {children} ) => {
  const filter = useField("text");

  return (
    <CountryContext.Provider value={{ filter}}>
      {children}
    </CountryContext.Provider>
  )
}

CountryProvider.propTypes = {
  children: PropTypes.node.isRequired,
}; 
