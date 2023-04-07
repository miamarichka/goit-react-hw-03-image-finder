/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { getData } from "api/fetchData";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from '../Button/Button'
import Notiflix from 'notiflix';
import { AppStyled } from "./App.styled";

Notiflix.Notify.init({
  width: '30vw',
  heigth: '100vh',
  position: 'right-top',
  fontSize: '16px',
});

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoadMore, setIsLoadMore] = useState(false);

  const getDataFromServer = async () => {
    try {
      Notiflix.Loading.circle()
      const responce = await getData(query, page)

      if (responce.data.hits.length) {
          if (responce.data.totalHits.length === responce.data.hits.length) {
            setIsLoadMore(false);
            throw new Error('Sorry, there is no more result');
        }

        responce.data.hits.length === 12 
          ? setIsLoadMore(true)
          : setIsLoadMore(false)

        gallery.length
          ? setGallery(prevState => [...prevState, ...responce.data.hits])
          : setGallery(responce.data.hits)
      } else {
        throw new Error();
      }
    } catch {
      setIsLoadMore(false)
      Notiflix.Notify.failure('Sorry, there is no result');
    } finally {
      Notiflix.Loading.remove();
    }
  }

  const increasePage = () => {
    setPage(prevState => prevState + 1)
  }

  const getQuery = (searchQuery) => {
    if (query === searchQuery) {
      return
    }
    setQuery(searchQuery);
    setGallery([]);
    setPage(1);
  }

  useEffect(() => {
    if (!query.trim()) {
      return
    }
    getDataFromServer()
  }, [page, query])

  return (
    <AppStyled>
      <Searchbar onSearchSubmit={getQuery} />
      <ImageGallery gallery={gallery} />
      {isLoadMore && (<Button onLoadMore={increasePage} />)}
    </AppStyled>
  );
};
