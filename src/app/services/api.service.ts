import { Injectable } from '@angular/core';
import { ServerResultType } from '../types/server-result-type';
import { HttpClient } from '@angular/common/http';
import { ServerRequestType } from '../types/server-request-type';
import { GlobalConstants } from '../../environments/global-constants';
import { IEventsServerResultDataType } from '../interfaces/i-events-server-result-data-type';

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
    const url = GlobalConstants.SERVER_BASE_URL + '/' + type;
    return this.httpClient.get<ServerResultType>(url).toPromise();
  }
}
