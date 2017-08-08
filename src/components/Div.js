import styled from "styled-components";
import { space, color, fontSize } from "styled-system";

export default styled.div`
  ${space};
  ${color};
  ${fontSize};
  width: ${props => props.width};
  height: ${props => props.height};
`;
