import request from 'superagent';

import {id as pluginId} from '../manifest';

export default class Client {
    constructor() {
        this.url = `/plugins/${pluginId}/api/v1`;
    }

    getAttributes = async (userID = '') => {
        return this.doGet(`${this.url}/attributes?user_id=` + userID);
    }

    doGet = async (url, body, headers = {}) => {
        headers['X-Requested-With'] = 'XMLHttpRequest';
        headers['X-Timezone-Offset'] = new Date().getTimezoneOffset();

        try {
            const response = await request.
                get(url).
                set(headers).
                accept('application/json');

            return response.body;
        } catch (err) {
            throw err;
        }
    }

    doPost = async (url, body, headers = {}) => {
        headers['X-Requested-With'] = 'XMLHttpRequest';
        headers['X-Timezone-Offset'] = new Date().getTimezoneOffset();

        try {
            const response = await request.
                post(url).
                send(body).
                set(headers).
                type('application/json').
                accept('application/json');

            return response.body;
        } catch (err) {
            throw err;
        }
    }

    doDelete = async (url, body, headers = {}) => {
        headers['X-Requested-With'] = 'XMLHttpRequest';
        headers['X-Timezone-Offset'] = new Date().getTimezoneOffset();

        try {
            const response = await request.
                delete(url).
                send(body).
                set(headers).
                type('application/json').
                accept('application/json');

            return response.body;
        } catch (err) {
            throw err;
        }
    }

    doPut = async (url, body, headers = {}) => {
        headers['X-Requested-With'] = 'XMLHttpRequest';
        headers['X-Timezone-Offset'] = new Date().getTimezoneOffset();

        try {
            const response = await request.
                put(url).
                send(body).
                set(headers).
                type('application/json').
                accept('application/json');

            return response.body;
        } catch (err) {
            throw err;
        }
    }
}
