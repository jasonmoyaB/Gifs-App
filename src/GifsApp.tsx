import React, { useState } from "react";

import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviuosSearches } from "./gifs/components/PreviuosSearches";
import { GifList } from "./gifs/components/GifList";

import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader
        tittle="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar
        nameplaceholder="Busca lo que quieras"
        onQuery={handleSearch}
      />

      {/* Búsquedas previas */}
      <PreviuosSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
