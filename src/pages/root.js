import React from "react";
import { useQuery } from "react-query";

import { api } from "../utils/api/instance";

export const RootPage = () => {
  const { data, isLoading } = useQuery(
    "characters",
    () =>
      api.get(
        
        {
          headers: {
            AuthToken: "test",
          },
        }
      ),
    {
      select: ({ data }) => {
        return data.data.results.map((character) => (
          <div key={character.id}>
            <img src={character.image} alt="character" />
            <div>{character.name}</div>
          </div>
        ));
      },
    }
  );

  if (isLoading) return <div>loading...</div>;

  return (
    <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>{data}</div>
  );
};