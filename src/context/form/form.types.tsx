/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface IState {
  head: number | null;
  tail: number | null;
}


export enum ActionFormTypes {
  NEXT ='NEXT',
  PREV ='PREV',
}
