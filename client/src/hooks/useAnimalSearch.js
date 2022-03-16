import { useState, useEffect } from "react";

export default function useAnimalSearch() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    search(lastQuery);
  }, []);

  const search = async (q) => {
    const response = await fetch(
      "/api?" + new URLSearchParams({ q })
    );
    const data = await response.json();
    setAnimals(data);

    localStorage.setItem("lastQuery", q);
  };

  return { search, animals };
}
