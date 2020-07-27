import styled from "styled-components";
import {ReactComponent as RefreshLogo} from '../../assets/refresh.svg';

export const RefreshButtonContainer = styled.div`
  height: 55px;
  width: 55px;
  display: flex;
  border: 1px solid deeppink;
  border-radius: 300px;
  background-color: deeppink;
  position:absolute;
  top: 807px;
  right: 120px;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  cursor: pointer;
  align-content: center;
`;

export const Refresh = styled(RefreshLogo)`
  height: 30px;
  width: 30px;
  margin-left: 12px;
  margin-top: 12px;
`;