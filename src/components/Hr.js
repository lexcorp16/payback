import styled from "styled-components";
import { space } from "styled-system";

export default styled.div`
  ${space};
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  height: 1px;
`;
