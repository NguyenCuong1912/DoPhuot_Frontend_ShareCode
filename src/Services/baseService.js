
import Axios from 'axios';
import { DOMAIN } from '../utils/Settings/config';


export class baseService {
    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model
        })
    }
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model
        })
    }

    get = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
        })
    }


    delete = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
        })
    }
}