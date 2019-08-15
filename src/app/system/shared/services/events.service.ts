import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {BaseApi} from "../../../shared/core/base-api";
import {ProEvent} from "../models/event.model";

@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event: ProEvent): Observable<ProEvent> {
    return this.post('events', event);
  }

  getEvents(): Observable<ProEvent[]> {
    return this.get('events');
  }

  getEventById(id: string): Observable<ProEvent> {
    return this.get(`events/${id}`);
  }
}


