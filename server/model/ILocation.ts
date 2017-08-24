/*
* Data models for geo data objects like locations
*/

interface ILocation {
  name : string,
  coordinates : {
    latitude : string,
    longitude : string,
  }
}

export = ILocation;
