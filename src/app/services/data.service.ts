import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventVM } from '../models/event-vm/event-vm';
import { ApiService } from './api.service';
import { IEventsServerResultDataType } from '../models/interfaces/i-events-server-result-data-type';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _eventVMs = new BehaviorSubject<EventVM[]>([]);

  constructor(private apiService: ApiService) {}

  get eventVMsObs() {
    return this._eventVMs.asObservable();
  }

  addEvent(ev: EventVM) {
    const index = this._eventVMs.value.findIndex(
      (event: EventVM) => ev.id === event.id
    );

    if (index > -1) {
      // event already added
      console.warn(`Event with id ${ev.id} already in data.`);
    } else {
      const newEvents = [...this._eventVMs.value];
      newEvents.push(ev);

      this._eventVMs.next(newEvents);
    }
  }

  async fetchEvents() {
    const eventsServerResult = await this.apiService.fetchEvents();

    const eventVMs = this.getEventVMsFromEventsServerResultData(
      eventsServerResult
    );
    this.addAllFetchedEventsToDataModel(eventVMs);
  }

  // Helpers

  private addAllFetchedEventsToDataModel(eventVMs: EventVM[]) {
    eventVMs.forEach((eventVM) => {
      this.addEvent(eventVM);
    });
  }

  private getEventVMsFromEventsServerResultData(
    eventsServerResultData: IEventsServerResultDataType[]
  ) {
    const eventVMs: EventVM[] = [];

    eventsServerResultData.forEach(
      (eventServerResultData: IEventsServerResultDataType) => {
        let fromDate = null;
        if (eventServerResultData.fromDate) {
          fromDate = moment(eventServerResultData.fromDate);
        }

        let toDate = null;
        if (eventServerResultData.toDate) {
          toDate = moment(eventServerResultData.toDate);
        }

        const eventVM = new EventVM(
          eventServerResultData.id,
          eventServerResultData.title,
          eventServerResultData.englishTitle,
          fromDate,
          toDate,
          eventServerResultData.wholeDay,
          eventServerResultData.place,
          eventServerResultData.repetition,
          eventServerResultData.media,
          eventServerResultData.addedTo,
          eventServerResultData.germanDescription,
          eventServerResultData.englishDescription,
          eventServerResultData.eventFinished
        );

        eventVMs.push(eventVM);
      }
    );
    return eventVMs;
  }
}
