export interface Product {
  $id: string;
  id: string;
  parentId: string | null;
  name: string;
  description: string;
  typeId: string;
  productType: string | null;
  isEnabled: boolean;
  dateStart: Date;
  dateEnd: Date;
  subProducts: Product[];
}
