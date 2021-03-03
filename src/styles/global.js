import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-weight: bold;
  letter-spacing: 0.5em;
  padding-left: 0.5em;
  transition: all 0.2s cubic-bezier(0.86, 0.16, 0.91, 0.69);

  > a {
    text-align: center;
  }

  &:hover {
    color: var(--color-5);
    transform: scale(1.1);
  }
`;
