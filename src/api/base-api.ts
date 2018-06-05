import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

const isJson = response => response.headers && response.headers.has
  && response.headers.has("Content-Type")
  && response.headers.get("Content-Type").startsWith("application/json");

@autoinject
export class BaseAPI {
  backendUrl: string = "https://static.usabilla.com"
  servicePath: string = "";
  
  constructor(protected http: HttpClient) {
  }

  protected _get(path: string): Promise<any> {
    return this.fetchWithMethod("GET", path, null);
  }

  private fetchWithMethod(method: string, path: string, options: any): Promise<any> {
    return this.fetchWithServicePath(path, Object.assign({
      method: method
    }, options));
  }
  
  private fetchWithServicePath(path: string, options: object): Promise<any> {
    return this.fetch(`${this.servicePath}${path}`);
  }

  private fetch(path: string): Promise<any> {
    return (this.http.fetch(
      `${this.backendUrl}${path}`)
      .then(response => this.defaultResponseHandling(response), response => this.defaultResponseHandling(response))
      .catch(error => this.defaultErrorHandling(error))
    );
  }

  private defaultResponseHandling(response): Promise<any> {
    // no content
    if (response.status === 204) {
      return;
    }
    if (response.ok || isJson(response)) {
      return response.json().then(jsonResponse => {
        // TODO: Handle API response error here. 
        return jsonResponse;
      });
    }
    return response;
  }
  
  private defaultErrorHandling(error) {
    // TODO: Handle API request error here
    throw error;
  }
}