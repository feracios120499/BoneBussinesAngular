export interface Version {
  id: number;
  code: string;
  name: string;
  descriptions: string[];
  prevId: string | null;
  nextId: string | null;
}
