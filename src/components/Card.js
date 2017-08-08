import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: ${({ theme }) => theme.radius};
`;

export default Card;
