import styled from "styled-components";
import {ReactComponent as MainMenuImage} from "../../assets/main_menu_logo.svg";

export const MainMenuPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;
`;

export const MainMenuLogo = styled(MainMenuImage)`
  display: flex;
  width: 70%;
  height: 70%;
`;