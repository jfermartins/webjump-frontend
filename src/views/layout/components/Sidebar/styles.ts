import styled from "styled-components";

export const Styles = styled.div`
  max-width: 35%;
  min-width: 35%;
`;

export const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.five};
  padding: 10px;
  margin-right: 20px;

  li {
    margin: 10px;
    margin-left: 5px;
    font-weight: 400;
    font-size: 14px;
    white-space: nowrap;

    :hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.six};
    }

    button {
      background-color: transparent;
      border: none;
      align-self: center;
      white-space: nowrap;
      color: ${({ theme }) => theme.colors.zero};

      :hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.six};
      }

      :focus {
        outline: none;
      }
    }
  }
`;

export const ShopStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.one};
  padding: 10px;
  margin-right: 20px;
`;

export const HistoryRoutes = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    color: ${({ theme }) => theme.colors.zero};
    align-self: center;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.zero};

    :hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.six};
    }

    :last-child {
      color: ${({ theme }) => theme.colors.two};

      :hover {
        cursor: default;
      }
    }
  }
`;

export const FilterCamp = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.four};
  padding: 15px;
  margin-top: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  min-width: 100%;

  span {
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.three};
    margin: 10px 0px 5px 0px;

    :first-child {
      font-size: 16px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.two};
      margin: 0px;
    }
  }
`;

interface ButtonListInterface {
  isActive: boolean;
}

export const ButtonList = styled.button<ButtonListInterface>`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.isActive ? ({ theme }) => theme.colors.six : ({ theme }) => theme.colors.zero)};
  font-weight: 400;
  align-self: center;
  font-size: 12px;
  padding: 0px;
  white-space: nowrap;

  :focus {
    outline: none;
  }
`;

interface ColorPickerInterface {
  color: string;
  isActive: boolean;
}

export const ColorPicker = styled.div<ColorPickerInterface>`
  min-height: 20px;
  min-width: 40px;
  background-color: ${(props) => props.color};
  margin: 1px;
  border: ${(props) => (props.isActive ? '2px solid #231f20' : 'none')};
  text-align: center;

  :hover {
    cursor: pointer;
  }
`;
