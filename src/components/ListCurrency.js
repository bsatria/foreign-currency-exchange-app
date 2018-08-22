import React, { Fragment } from 'react';
import FilterCurrency from './FilterCurrency';

export default ({ data, number, list, deletecurrency, detailcurrency }) => {
  const filterdata = data.rates || [];
  let dataFilter = [];
  if (filterdata.length !== 0) {
    for (const property in filterdata) {
      if (filterdata.hasOwnProperty(property)) {
        const filterData = list.indexOf(property);
        if (filterData > -1) {
          detailcurrency.forEach(val => {
            if (property === val.value) {
              let element;
              element = {
                cur: property,
                detail: val.text,
                num: filterdata[property],
              };
              dataFilter.push(element);
            }
          });
        }
      }
    }
  }
  return (
    <Fragment>
      {dataFilter.length > 0 ? (
        <FilterCurrency
          delcurrency={deletecurrency}
          filter={dataFilter}
          number={number}
        />
      ) : (
        <div>No Data Found :(</div>
      )}
    </Fragment>
  );
};
