class SwapiService {
  _apiBase = "https://swapi.co/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getPerson(id) {
    return await this.getResource(`/people/${id}`);
  }

  async getAllPeople() {
    const res = await this.getResource(`/people`);
    return res.results;
  }

  async getStarship(id) {
    return await this.getResource(`/starships/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships`);
    return res.results;
  }

  async getPlanet(id) {
    return await this.getResource(`/planets/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets`);
    return res.results;
  }
}

export default SwapiService;
