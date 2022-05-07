export interface ResultPage<T = {}> {
  currentPage: number; //Pagina atual
  totalPages: number; //Quantidade total de itens
  itensPerPage: number; //Quantidade de itens por pagina
  totalItems: number; //Total de itens
  totalItemsPage: number; //Total de itens na pagina
  result: T[];
}
