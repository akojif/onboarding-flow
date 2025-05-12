import axios from 'axios';
import Reminder from '../Models/reminder';

export class ReminderService {
  ApiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

  async getReminders() {
    const response = await this.ApiClient.get<Reminder[]>('/posts');
    return response.data;
  }
}
