import React from "react";
import { Container, Item } from "./duration-tabs.styles";

export const DURATION_TABS = [
  {
    id: "WEEK_DURATION_TAB",
    label: "TODAY"
  },
  {
    id: "TODAY_DURATION_TAB",
    label: "HOURLY"
  }
];

const DurationTabs = ({ selected = DURATION_TABS[0].id, onSelect }) => {
  return (
    <Container data-testid="duration-tabs-container">
      {DURATION_TABS.map((tab) => (
        <Item
          data-testid={tab.id}
          key={tab.id}
          selected={selected === tab.id}
          onClick={() => onSelect(tab.id)}
          className={selected === tab.id ? "selected" : ""}
        >
          {tab.label}
        </Item>
      ))}
    </Container>
  );
};

export default DurationTabs;
