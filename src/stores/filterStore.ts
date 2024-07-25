import { makeAutoObservable } from "mobx";
import { ProductItems, Products, StrObjectArrayStr } from "../interfaces";

export default class FilterStore {
  filterOptions: StrObjectArrayStr = {
    'Gênero': [],
    'Cores': [],
    'Tipo': []
  };

  filteredData: Array<ProductItems> = [];

  constructor() {
    makeAutoObservable(this);
  }

  updateFilterCamp(category: string, value: string) {
    const tempCategoryArray = [...this.filterOptions[category]];
    if (tempCategoryArray.includes(value)) {
      tempCategoryArray.splice(tempCategoryArray.indexOf(value), 1);
    } else {
      tempCategoryArray.push(value);
    }
    this.filterOptions[category] = tempCategoryArray;
  }

  clearAllFiltersCamp() {
    Object.keys(this.filterOptions).forEach(option => {
      this.filterOptions[option] = [];
    });
  }

  filterData(data: Products | undefined, typeProduct: string) {
    if (data) {
      if (
        this.filterOptions['Gênero'].length === 0 &&
        this.filterOptions['Cores'].length === 0 &&
        this.filterOptions['Tipo'].length === 0
      ) {
        return data.items;
      } else {
        let filteredData: Array<ProductItems> = [];
        data.items.forEach(product => {
          if (data.filters[0].gender === 'Gênero') {
            if (this.filterOptions['Gênero'].includes(product.filter[0].gender)) {
              filteredData.push(product);
            }
          } else if (typeProduct === 'Camisas' && data.filters[0].color === 'Cor') {
            if (this.filterOptions['Cores'].includes(product.filter[0].color)) {
              filteredData.push(product);
            }
          } else if (typeProduct === 'Calçados' && data.filters[0].color === 'Cor') {
            if (this.filterOptions['Cores'].includes(product.filter[0].color)) {
              filteredData.push(product);
            }
          }
        });
        return filteredData;
      }
    }
  }

  clearFilteredData() {
    this.filteredData = [];
  }
}
