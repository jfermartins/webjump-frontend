import Box from '@material-ui/core/Box';
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { FilterOptions, FilterOptionsType, MapperColor, NavListOptions, NavListOptionsRoutes } from "../../../../constants/constants";
import { HasThisRoute } from "../../../../helpers/routes";
import { ToastError } from "../../../../helpers/toast";
import { useStores } from "../../../../hooks/useStores";
import { StrObjectArrayStr } from "../../../../interfaces";
import { ButtonList, ColorPicker, FilterCamp, HistoryRoutes, HomeStyles, ShopStyles, Styles } from "./styles";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { filterStore } = useStores();
  const location = useLocation();
  const [viewFilterOptions, setViewFilterOptions] = useState<StrObjectArrayStr>({});
  const [viewFilterTypeOptions, setViewFilterTypeOptions] = useState<Array<string>>([]);

  useEffect(() => {
    if (location.pathname !== '/home') {
      const indexRoute = Object.values(NavListOptionsRoutes).indexOf(location.pathname);
      const idView = Object.keys(NavListOptionsRoutes)[indexRoute];
      setViewFilterOptions(FilterOptions[idView]);
      setViewFilterTypeOptions(FilterOptionsType[Object.keys(FilterOptions).indexOf(idView)]);
    }
  }, [location]);

  const indexOptionsRoute = Object.values(NavListOptionsRoutes).indexOf(location.pathname);

  return (
    <Styles>
      {location.pathname === '/home' || location.pathname === '/' ? (
        <HomeStyles>
          {NavListOptions.map((option: string) => (
            <li key={`item-${option}`}>
              <button
                key={`button-${option}`}
                onClick={() => {
                  HasThisRoute(option)
                    ? navigate(NavListOptionsRoutes[option])
                    : ToastError("Funcionalidade ainda não inserida");
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </HomeStyles>
      ) : (
        <ShopStyles>
          <HistoryRoutes>
            <span onClick={() => { navigate('/home'); }}>Página inicial</span>
            <IoIosArrowForward size={14} />
            <span>{Object.keys(NavListOptionsRoutes)[indexOptionsRoute]}</span>
          </HistoryRoutes>
          <FilterCamp>
            <span>FILTRE POR</span>
            {viewFilterTypeOptions && viewFilterTypeOptions.length > 0 ? (
              <>
                {Object.keys(viewFilterOptions).map((option) => (
                  <React.Fragment key={`filter-${option}`}>
                    <span key={`title-${option}`}>{option.toLocaleUpperCase()}</span>
                    {viewFilterTypeOptions[Object.keys(viewFilterOptions).indexOf(option)] === 'list' ? (
                      viewFilterOptions[option].map((item) => (
                        <li key={`item-${item}`}>
                          <ButtonList
                            key={`button-${item}`}
                            isActive={filterStore.filterOptions[option].includes(item)}
                            onClick={() => {
                              filterStore.updateFilterCamp(option, item);
                            }}
                          >
                            {item}
                          </ButtonList>
                        </li>
                      ))
                    ) : (
                      <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" sx={{ maxWidth: '100%' }}>
                        {viewFilterOptions[option].map((color, index) => (
                          <Box p={0.01} key={`box-color_picker-${index}`}>
                            <ColorPicker
                              key={`color_picker-${index}`}
                              onClick={() => {
                                filterStore.updateFilterCamp(option, MapperColor[color]);
                              }}
                              color={color}
                              isActive={filterStore.filterOptions[option].includes(MapperColor[color])}
                            ></ColorPicker>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </React.Fragment>
                ))}
              </>
            ) : null}
          </FilterCamp>
        </ShopStyles>
      )}
    </Styles>
  );
};

export default observer(Sidebar);
