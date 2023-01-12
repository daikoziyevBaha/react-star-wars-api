
export default class SwapApi {
    _apiBase = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img/';

    async getResources(url) {
      const res = await fetch(`${this._apiBase}${url}`)
      if (!res.ok) {
        throw new Error(`Catched the error with status ${res.status}`)
      }
      return await res.json()
    }
  
    getAllPeople = async () => {
      const res = await this.getResources('/people')
      return res.results.map(this._transformPerson)
    }
  
    getPerson = async (id) => {
      const person = await this.getResources(`/people/${id}`)
      return this._transformPerson(person)
    }
  
    getAllStarships = async () => {
      const res = await this.getResources('/starships')
      return res.results.map(this._transformStarship)
    }
  
    getStarship = async (id) => {
      const starship = await this.getResources(`/starships/${id}`)
      return this._transformStarship(starship)
    }

    getAllPlanets = async () => {
      const res = await this.getResources('/planets')
      return res.results.map(this._transformPlanet)
    }
  
    getPlanet = async (id) => {
      const planet = await this.getResources(`/planets/${id}`)
      return this._transformPlanet(planet)
    }

    extractId(url) {
      const regex = /\/([0-9]*)\/$/;
      const regexId = url.match(regex)[1];
      return regexId
    }

    getPersonImage = ({id}) => {
      const url = `${this._imageBase}characters/${id}.jpg`
      return url
    }

    getStarshipImage = ({id}) => {
      const url = `${this._imageBase}starships/${id}.jpg`
      return url
    }

    getPlanetImage = ({id}) => {
      const url = `${this._imageBase}planets/${id}.jpg`
      return url
    }

    _transformPlanet = (planet) => {
      const id = this.extractId(planet.url)

      return {
        id: id,
        name: planet.name,
        population: planet.population,
        diameter: planet.diameter,
        rotationPeriod: planet.rotation_period
      }
    }

    _transformStarship = (starship) => {
      return {
        id: this.extractId(starship.url),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.cost_in_credits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargoCapacity
      }
    }

    _transformPerson = (person) => {
      return {
        id: this.extractId(person.url),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
      }
    }
  }

