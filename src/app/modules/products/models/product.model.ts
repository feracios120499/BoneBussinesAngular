export interface Product {
  $id: string;
  id: string;
  parentId: string | null;
  name: string;
  description: string;
  typeId: string | null;
  productType: string | null;
  isEnabled: boolean;
  dateStart: Date;
  dateEnd: Date | null;
  subProducts: Product[];
}
