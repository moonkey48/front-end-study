import { setBoardList } from './Actions/changeBoardListActions';

export type Image = {
    src:string;
}
export interface boardItem {
    id:number;
    type:string;
    name: string;
    image:string;
    reviews:Array<Object>;
}
export type BOARDLIST = {
    boardList:Array<boardItem>;
}
export type changeBoardListAction = ReturnType<typeof setBoardList>