import React from "react";
import { UNIT, UNIT_CAPTION } from "../../constants";
import { Container, Item } from "./unit-tabs.styles";

export const UNIT_TABS = [
  {
    id: UNIT.DARKMODE,
    label: UNIT_CAPTION[UNIT.DARKMODE]
  },
  {
    id: UNIT.LIGHTMODE,
    label: UNIT_CAPTION[UNIT.LIGHTMODE]
  }
];

const UnitTabs = ({ selected, onSelect }) => {
  return (
    <Container>
      {UNIT_TABS.map((tab) => (
        <Item
          key={tab.id}
          selected={selected === tab.id}
          onClick={() => onSelect(tab.id)}
        >
          {tab.label}
        </Item>
      ))}
    </Container>
  );
};

export default UnitTabs;
