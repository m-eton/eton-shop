import React from "react";
import { connect } from "react-redux";

import { sortBy, setTextFilter } from "../actions/filters";

const ShopFilters = props => {
  return (
    <div className="shop-filter">
      <input
        className="search"
        type="text"
        placeholder="search by name"
        defaultValue={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        className="sort"
        defaultValue={props.filters.sortBy}
        onChange={e => {
          props.dispatch(sortBy(e.target.value));
        }}
      >
        <option value="name">name</option>
        <option value="priceASC">price - asc</option>
        <option value="priceDESC">price - desc</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => ({ filters: state.filters });

export default connect(mapStateToProps)(ShopFilters);
