import { baseService } from "./baseService";


class QuanLyAccountService extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    signUp = (dataSignUp) => {
        return this.post(`Account/SignUp`, dataSignUp)
    }

    signIn = (dataSignIn) => {
        return this.post(`Account/SignIn`, dataSignIn)
    }

    getAll = (Username) => {
        if (Username) {
            return this.get(`Account?Username=${Username}`)
        } else {
            return this.get(`Account`)
        }
    }

    getDetail = (id) => {
        return this.get(`Account/${id}`)
    }

    updateAccount = (id, data) => {
        return this.put(`Account/${id}`, data)
    }

    delUser = (id) => {
        return this.put(`Account/Delete/${id}`)
    }
}


export const quanLyAccountService = new QuanLyAccountService();