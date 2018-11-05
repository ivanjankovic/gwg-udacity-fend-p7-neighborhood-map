class Helper {
  static baseURL(){
      return 'https://api.foursquare.com/v2/'
  }
  static auth(){
      const keys = {
          client_id:'?N2LF450TRQ1L3PF3DSWNIV1N3UXBH1LRQ5LQ4PULFCAIO5A5',
          client_secret:'ONQENVONQGOXO0UJ2WCXC1A55Q3F00X0CAV505SXNUPAXOJD',
          v: '20181028'
      };
      return Object.keys(keys)
          .map(key => `${key}=${keys[key]}`)
          .join('&');
  }
  static urlBuilder(urlPrams) {
      if(!urlPrams){
          return ''
      }
      return Object.keys(urlPrams)
          .map(key => `${key}=${urlPrams[key]}`)
          .join('&');
  }
  static headers() {
      return {
          Accept: 'application/json'
      };
  }
  static simpleFetch(endPoint, method, urlPrams) {
      let requestData = {
          method,
          headers: Helper.headers()
      };
      return fetch(
          `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlPrams)}`,
          requestData
      ).then(res => res.json());
  }
}
export default class SquareAPI {
  static search(urlPrams){
      return Helper.simpleFetch('/venues/search', 'GET', urlPrams);
  }
  static getVenueDetails(VENUE_ID){
      return Helper.simpleFetch(`/venues/${VENUE_ID}`, 'GET')
  }
  static getVenuePhotos(VENUE_ID){
      return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, 'GET')
  }
}