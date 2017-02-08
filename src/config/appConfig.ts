import { AuthProviders, AuthMethods } from 'angularfire2';

export class AppConfig {
    config: {
        apiPDF?: string,
        apiBaseUrl?: string,
        firebaseConfig: { apiKey: string, authDomain: string, databaseURL: string, storageBucket: string },
        firebaseAuthConfig: { provider: any, method: any };
    };

    constructor(env: string = 'dev') {
        if (env === 'dev') {
            this.config = {
                'firebaseConfig': {
                    apiKey: "AIzaSyDOIbwxlPcUvOT20w2Vk78pTsYRlUE12-c",
                    authDomain: "reduxtodo-840c0.firebaseapp.com",
                    databaseURL: "https://reduxtodo-840c0.firebaseio.com",
                    storageBucket: "reduxtodo-840c0.appspot.com"
                },
                firebaseAuthConfig: { provider: AuthProviders.Password, method: AuthMethods.Password }
            };
        } else {
            this.config = {
                'firebaseConfig': {
                    apiKey: "AIzaSyDOIbwxlPcUvOT20w2Vk78pTsYRlUE12-c",
                    authDomain: "reduxtodo-840c0.firebaseapp.com",
                    databaseURL: "https://reduxtodo-840c0.firebaseio.com",
                    storageBucket: "reduxtodo-840c0.appspot.com"
                },
                firebaseAuthConfig: { provider: AuthProviders.Password, method: AuthMethods.Password }
            };
        }
    }
}

export let appConfig = new AppConfig('dev');
