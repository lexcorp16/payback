import styled from "styled-components";
import { space, color } from "styled-system";

const Container = styled.div`
  ${space} ${color} width: 100%;
  max-width: 1040px;
  max-width: ${props => props.xs && "320px"};
  max-width: ${props => props.sm && "600px"};
  margin: 0 auto;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export default Container;
