/*
Function to fetch a url and converting it to json using the async and await syntax. Returning the result from the url in json format.
*/
export default async function getRequest(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  } finally {
    console.log("Api request completed");
  }
}
