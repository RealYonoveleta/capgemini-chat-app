import { inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private toastController = inject(ToastController);

  async showToast(message: string, isError: boolean = false) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
      color: isError ?  'danger' : 'success',
    });

    await toast.present();
  }
}
