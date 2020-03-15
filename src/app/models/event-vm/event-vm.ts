import { Moment } from 'moment';
import { Media } from '../types/media.enum';

export class EventVM {
  id: number;
  title: string;
  englishTitle: string;
  fromDate: Moment;
  toDate: Moment;
  wholeDay: boolean;
  place: string;
  repetition: IRepetitionProperty;
  manager: string;
  media: Media[];
  addedTo: Media[];
  germanDescription: string;
  englishDescription: string;
  eventFinished: boolean;

  constructor(
    id: number,
    title: string,
    englishTitle: string,
    fromDate: Moment,
    toDate: Moment,
    wholeDay: boolean,
    place: string,
    repetition: IRepetitionProperty,
    media: Media[],
    addedTo: Media[],
    germanDescription: string,
    englishDescription: string,
    eventFinished: boolean
  ) {
    this.id = id;
    this.title = title;
    this.englishTitle = englishTitle;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.wholeDay = wholeDay;
    this.place = place;
    this.repetition = repetition;
    this.media = media;
    this.addedTo = addedTo;
    this.germanDescription = germanDescription;
    this.englishDescription = englishDescription;
    this.eventFinished = eventFinished;
  }
}
