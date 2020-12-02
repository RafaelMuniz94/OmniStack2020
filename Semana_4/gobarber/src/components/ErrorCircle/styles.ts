import styled from "styled-components";

import ToolTip from '../ToolTip'

export const Container = styled(ToolTip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span{ /*É possivel editar o tooltip visto que o styled encadeia ele*/
      background:#c53030;
      color: #fff;

      &::before{
          border-color: #c53030 transparent;
      }
  }

  &:hover span{
    opacity: 1;
    visibility: visible;
  }

`;
