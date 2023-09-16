import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;a
  }
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const initialState = {
    email: '', // Initialize with an empty email
  };

  const [user, dispatch] = useReducer(userReducer, initialState);

  const setUserEmail = (email) => {
    dispatch({ type: 'SET_USER_EMAIL', payload: email });
  };

  return (
    <UserContext.Provider value={{ user, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};
