export default interface ICategory {
  id?: string;
  parent: "Category" | null;
  name: string;
}