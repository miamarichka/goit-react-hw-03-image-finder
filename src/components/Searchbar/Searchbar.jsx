import { useState } from "react";
import {
  SearchBarStyled,
  SearchForm,
  SearchFormButton,
  SearchLabel,
  SearchInput,
} from "./Searchbar.styled";

export const Searchbar = ({onSearchSubmit}) => {
  const [query, setQuery] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (!query.trim()) {
      return
    }
    onSearchSubmit(query)
    setQuery('')
  }
    return (
      <SearchBarStyled>
        <SearchForm
          className="form"
          onSubmit={submitHandler}
        >
          <SearchFormButton type="submit" className="button">
            <SearchLabel className="button-label">Search</SearchLabel>
          </SearchFormButton>

          <SearchInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={({target})=> setQuery(target.value)}
          />
        </SearchForm>
      </SearchBarStyled>
    );
}