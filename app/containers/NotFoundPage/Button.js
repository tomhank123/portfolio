import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;
