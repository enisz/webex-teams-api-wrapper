import Webex from "../webex";
import Got from "got";

export default class Request {

    /**
     * Sending GET request to the endpoint
     *
     * @param endpoint the endpoint
     * @param params payload
     */
    public static get(endpoint: string, body?: any): Promise<any> {
        const queryString: string[] = [];

        if(body) {
            for(let x in body) {
                queryString.push(x + "=" + body[x]);
            }
        }

        return Request.send("get", Webex.getApiUrl() + "/" + endpoint + (body ? "?" + queryString.join("&") : ""));
    }

    /**
     * Sending POST request to the endpoint
     *
     * @param endpoint the endpoint
     * @param body payload
     */
    public static post(endpoint: string, body: any): Promise<any> {
        return Request.send("post", Webex.getApiUrl() + "/" + endpoint, body);
    }

    /**
     * Sending DELETE request to the endpoint
     *
     * @param endpoint the endpoint
     */
    public static delete(endpoint: string): Promise<any> {
        return Request.send("delete", Webex.getApiUrl() + "/" + endpoint);
    }

    /**
     * Sending PUT request to the endpoint
     *
     * @param endpoint the endpoint
     * @param body payload
     */
    public static put(endpoint: string, body: any): Promise<any> {
        return Request.send("put", Webex.getApiUrl() + "/" + endpoint, body);
    }

    /**
     * Sending the request
     *
     * @param method The request method
     * @param url The URL
     * @param body payload
     */
    private static send(method: 'post' | 'get' | 'put' | 'delete', url: string, body?: any): Promise<any> {
        return Got(url, {
            method : method,
            headers : {
                "Authorization" : `Bearer ${Webex.getAccesToken()}`,
                "Content-Type" : "application/json"
            },
            resolveBodyOnly: true,
            responseType: "json",
            body : body ? JSON.stringify(body) : undefined
        });
    }
}