import React, { Fragment } from 'react';
import { Grid, Icon } from 'semantic-ui-react';

export default ({ filter, number, delcurrency }) => {
  return (
    <Fragment>
      {filter.map((val, key) => {
        return (
          <Grid key={key} className="list-currency">
            <Grid.Row columns={2}>
              <Grid.Column width={13} className="border">
                <Grid.Row className="flex">
                  <Grid.Column className="w50">{val.cur}</Grid.Column>
                  <Grid.Column className="w50 right">
                    {(number * Math.round(val.num * 100)) / 100}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Column>
                  {val.cur} - {val.detail}
                </Grid.Column>
                <Grid.Column>
                  {number} USD = {val.cur}{' '}
                  {(number * Math.round(val.num * 100)) / 100}
                </Grid.Column>
              </Grid.Column>
              <Grid.Column width={3} className="flex center centerFlex">
                <Icon link name="trash" onClick={() => delcurrency(val.cur)} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
      })}
    </Fragment>
  );
};
