import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button';

import './weather.css'

export const SearchForm = props => {
  const { handleSubmit } = props;


  return (
    <form onSubmit={handleSubmit} className="searchform cf">
      <div>
        <Field
          name="location"
          component="input"
          type="text"
          placeholder="Your city name"
        />
      </div>
      <Button type="submit" color="primary" variant="contained">Search</Button>
    </form>
  )
}

export default reduxForm({ form: 'search' })(SearchForm);