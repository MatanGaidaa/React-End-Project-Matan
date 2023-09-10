import { useEffect, useState } from "react";


export function useRegisteredCards() {
  const [registeredCards, setRegisteredCards] = useState([]);

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      const storedUsers = localStorage.getItem("registeredCards");
      if (storedUsers) {
        setRegisteredCards(JSON.parse(storedUsers));
      }
    }
  }, []);

  return registeredCards;
}

export function useRegisteredUsers() {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      const storedUsers = localStorage.getItem("registeredUsers");
      if (storedUsers) {
        setRegisteredUsers(JSON.parse(storedUsers));
      }
    }
  }, []);

  return registeredUsers;
}
