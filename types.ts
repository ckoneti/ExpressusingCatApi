export interface Image  {
  breed : Array<Breed>
  categories:Array<Categories>
  id: string;
  url: string;
  width: number;
  height:number
};
export interface Categories{
id:number,
name:string
}
export interface Breed {
id:number,
name:string
}
export interface GetImageResponse  {
  data: Image[];
};

