import { setBoardList } from './Actions/changeBoardListActions';

export type Image = {
    src:string;
}
export interface boardItem {
    id:number;
    name: string;
}
export type BOARDLIST = {
    boardList:Array<boardItem>;
}
export type changeBoardListAction = ReturnType<typeof setBoardList>