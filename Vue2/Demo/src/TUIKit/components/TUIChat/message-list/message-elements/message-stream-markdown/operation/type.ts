/** type & interface */
export enum IOperationType {
  Copy = 'copy',
  Break = 'break',
  // Retry is not supported now
  // Retry = 'retry',
}
export interface IOperation {
  key: IOperationType;
  name: string;
  text?: string;
  icon: string;
  isDisabled: boolean;
  onClick: (e: Event, key: IOperationType) => void;
}
