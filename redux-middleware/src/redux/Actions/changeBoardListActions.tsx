import * as type from '../Types';

export const SET_BOARDLIST = "changeBoardList/SET_BOARDLIST" as const;

export const setBoardList = (boardItemList:type.boardItem[])=> ({
    type: SET_BOARDLIST,
    payload: boardItemList,
})
