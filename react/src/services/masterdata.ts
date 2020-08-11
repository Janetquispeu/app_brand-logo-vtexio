const URL = process.env.API_MASTERDATA;

export const masterDataService = {
  async getMasterData(seller: string) {
    const URL_LOCAL = `https://us-east1-pe-gcp-marketplace-01.cloudfunctions.net/fun-dev-seller/sellers/${seller}`;
    const response = await fetch(URL_LOCAL, {
      method: 'GET'
    });
    
    return response.json();
  }
}
