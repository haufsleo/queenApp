import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventVM } from '../../models/event-vm/event-vm';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Media } from '../../models/types/media.enum';
import { ModalController } from '@ionic/angular';
import { AddPage } from './add/add.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit, OnDestroy {
  constructor(
    private dataService: DataService,
    private modalController: ModalController
  ) {}
  Media = Media;
  eventVMs: EventVM[] = [];
  private _eventVM$: Subscription;

  searchtext = '';
  ngOnInit() {
    this._eventVM$ = this.dataService.eventVMsObs.subscribe((ev) => {
      this.eventVMs = ev;
    });
  }

  async ionViewDidEnter() {
    await this.dataService.fetchEvents();
  }

  ngOnDestroy() {
    if (this._eventVM$) {
      this._eventVM$.unsubscribe();
    }
  }

  get filteredEventVMs() {
    return this.eventVMs.filter((eventVM) => {
      const fullfillsSearchCriterion =
        eventVM.title.toLowerCase().indexOf(this.searchtext.toLowerCase()) > -1;

      return fullfillsSearchCriterion;
    });
  }

  eventHasMediaType(eventVM: EventVM, type: Media) {
    const index = eventVM.media.findIndex((media: Media) => media === type);
    return index > -1;
  }

  eventHasMediaTypeSet(eventVM: EventVM, type: Media) {
    const index = eventVM.addedTo.findIndex((med: Media) => med === type);
    return index > -1;
  }

  async addClicked() {
    const modal = await this.modalController.create({
      component: AddPage,
      presentingElement: await this.modalController.getTop(),
      showBackdrop: true,
      swipeToClose: true
    });
    return await modal.present();
  }
}
