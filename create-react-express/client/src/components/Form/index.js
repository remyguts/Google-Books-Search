"use strict";
import React from "react";
import "./style.css";

const Form = (props) => {
  return (
    <form>
      <div className="form-group">
        <label className="BookSearchLabel">
          <h3>Search for books</h3>
        </label>
        <input
          className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchBook"
          placeholder="Enter a book here"
          onChange={props.handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="submitBtn btn btn-secondary"
        onClick={props.handleFormSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
