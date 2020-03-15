import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../../environments/global-constants';
import { IEventsServerResultDataType } from '../models/interfaces/i-events-server-result-data-type';
import { ServerRequestType } from '../models/types/server-request-type';
import { ServerResultType } from '../models/types/server-result-type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  async fetchEvents() {
    const result = (await this.get('events')) as IEventsServerResultDataType[];
    return result;
  }

  private get(type: ServerRequestType) {
    const url =
      GlobalConstants.SERVER_BASE_URL + '/' + type + GlobalConstants.EXTENSION;
    return this.httpClient.get<ServerResultType>(url).toPromise();
  }
}
