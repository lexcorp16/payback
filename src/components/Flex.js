import styled from "styled-components";
import { space, color } from "styled-system";

const Flex = styled.div`
  ${space} ${color};
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  height: ${({ height }) => height};
  width: ${props => props.width};
`;

export default Flex;
