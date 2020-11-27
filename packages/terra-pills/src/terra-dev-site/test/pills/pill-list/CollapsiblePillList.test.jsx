import React from 'react';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const CollapsiblePillList = () => (
  <PillList
    ariaLabel="Terra Modal"
    isCollapsible
  >
    <Pill
      labelText="Demo 1"
    />
    <Pill
      labelText="Demo 2"
    />
    <Pill
      labelText="Demo 3"
    />
    <Pill
      labelText="Demo 4"
    />
    <Pill
      labelText="Demo 5"
    />
  </PillList>
);

export default CollapsiblePillList;
