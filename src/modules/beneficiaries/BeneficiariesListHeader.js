import React from "react";
import { Tr, Th, Text } from "./../../components";

export default function({ titles }) {
  return (
    <thead>
      <Tr>
        {titles.map((title, key) =>
          <Th key={key}>
            <Text color="textMuted" fontSize={3}>
              {title}
            </Text>
          </Th>
        )}
      </Tr>
    </thead>
  );
}
