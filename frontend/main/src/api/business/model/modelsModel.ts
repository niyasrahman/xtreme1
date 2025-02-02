import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
import { datasetTypeEnum } from './ontologyClassesModel';

/** Models List Start */
/** list item */
export interface ModelListItem {
  id: number;
  teamId: Nullable<string>;
  name: string;
  runNo: Nullable<number>;
  runCount: number;
  isDeleted: boolean;
  enable: boolean;
  description: Nullable<string>;
  scenario: Nullable<string>;
  classes: Nullable<any[]>;
  createdAt: Date;
  createdBy: string | number;
  creatorName: string;
  datasetType: datasetTypeEnum;
  isInteractive: boolean;
  img: string;
}
/** list request params */
export interface GetModelParams extends BasicPageParams {
  datasetType?: datasetTypeEnum;
  isInteractive?: 0 | 1;
}

/** list response params */
export type ResponseModelParams = BasicFetchResult<ModelListItem>;

/** add Models */
export interface SaveModelParams {
  name: string;
}
/** Models List End */

/** Runs Start */
/** status Enum */
export enum statusEnum {
  started = 'STARTED',
  running = 'RUNNING',
  success = 'SUCCESS',
  failure = 'FAILURE',
  SUCCESS_WITH_ERROR = 'SUCCESS_WITH_ERROR',
}
/** run table ite, */
export interface ModelRunItem {
  id: number;
  teamId: number;
  modelId: number;
  datasetId: number;
  datasetName: string;
  createdAt: Date;
  status: statusEnum;
  runNo: string;
  errorReason: Nullable<string>;
  parameter: string;
}
/** table request params */
export interface GetModelRunParams extends BasicPageParams {
  modelId?: number;
}

/** table response params */
export type ResponseModelRunParams = BasicFetchResult<ModelRunItem>;

/** PreModel params */
export interface PreModelParam {
  minConfidence: number;
  maxConfidence: number;
  classes: string[];
}

/** model run params */
export interface runModelRunParams {
  datasetId: number;
  modelId: number;
  resultFilterParam: Nullable<PreModelParam>;
}
/** Runs End */
