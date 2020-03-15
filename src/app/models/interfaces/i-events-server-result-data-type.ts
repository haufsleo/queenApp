export interface IEventsServerResultDataType {
  id: number;
  title: string;
  englishTitle: string;
  fromDate: string;
  toDate: string;
  wholeDay: boolean;
  place: string;
  repetition: IRepetitionProperty;
  manager: string;
  media: number[];
  addedTo: number[];
  germanDescription: string;
  englishDescription: string;
  eventFinished: boolean;
}
