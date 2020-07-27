import styled from "styled-components";

import {ReactComponent as FooterLogo} from '../../assets/footer.svg';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20px;
`;

export const FooterImage = styled(FooterLogo)`
  width: 100%;
`;