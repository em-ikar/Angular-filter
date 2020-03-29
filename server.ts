import { Server } from 'miragejs';
import MockData from './src/app/common/mock/mock';

export function runServer() {
    const _SERVER = new Server({
        routes() {
            this.namespace = 'api';

            this.get('/lectures', () => MockData);
        },
    });

    return _SERVER;
}
