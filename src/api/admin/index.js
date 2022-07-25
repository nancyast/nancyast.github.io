import { apiUrl } from 'api/utils';
import baseApi from '../base';

export const DASHBOARD_URL = apiUrl('admin/dashboard');
export const UPLOAD_FILE_URL = apiUrl('admin/import-user-data');

export default {
  getStatistic: async () => {
    const data = await baseApi.authRequest(DASHBOARD_URL, {
      method: 'GET'
    });
    return data;
  }
};
