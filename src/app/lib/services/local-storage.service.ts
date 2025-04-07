import {Injectable, signal} from '@angular/core';
import {IStorage} from '@/app/lib/interface/storage.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public $storage$ = signal<IStorage[]>([]);

  constructor() {

    const storedData = localStorage.getItem('storageData');
    if (storedData) {
      this.$storage$.set(JSON.parse(storedData)); // Set the stored data to the signal
    }

  }

  public setAnswer(id: number, code: string) {
    this.$storage$.update(storage => {
      const index = storage.findIndex(item => item.id === id);
      if (index !== -1) {
        storage[index].code = code; // Update existing item
      } else {
        storage.push({ id, code }); // Add new item if not found
      }

      // Save the updated storage to localStorage
      localStorage.setItem('storageData', JSON.stringify(storage));

      // After updating the localStorage, get the updated value
      const updatedStorage = JSON.parse(localStorage.getItem('storageData') || '[]');

      // Optionally, update the signal with the latest value from localStorage
      this.$storage$.set(updatedStorage);

      return [...storage]; // Return updated array
    });
  }

  public getAnswer(id: number): string | null {
    const storedData = JSON.parse(localStorage.getItem('storageData') || '[]');
    const item = storedData.find((data: IStorage) => data.id === id);
    return item ? item.code : null; // Return the code if found, otherwise null
  }
}
