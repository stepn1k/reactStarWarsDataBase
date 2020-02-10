export default class SwapiService {
  _apiBase = "https://swapi.co/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPeople(person);
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPeople);
  }

  async getStarship(id) {
    return await this.getResource(`/starships/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships`);
    return res.results;
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets`);
    return res.results;
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      gravity: planet.gravity,
      orbitalPeriod: planet.orbital_period,
      rotationPeriod: planet.rotation_period
    };
  };

  _transformPeople = people => {
    return {
      id: this._extractId(people),
      name: people.name,
      gender: people.gender,
      height: people.height,
      mass: people.mass,
      hairColor: people.hair_color,
      birthYear: people.birth_year,
      eyeColor: people.eye_color,
      skinColor: people.skin_color
    };
  };
}
