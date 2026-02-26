import { inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private toastController = inject(ToastController);

  async showError(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
      color: 'danger',
    });

    await toast.present();
  }

  async showSuccess(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
      color: 'success',
    });

    await toast.present();
  }
}
