const searchApi = async(searchTerm) => {
  const baseEndpoint = `https://itunes.apple.com/search?media=music&`;
  const artistEndpoint = baseEndpoint + `entity=musicArtist&attribute=artistTerm&term=${searchTerm}`;
  const trackEndpoint = baseEndpoint + `entity=musicTrack&attribute=songTerm&term=${searchTerm}`;
  const albumEndpoint = baseEndpoint + `entity=album&attribute=albumTerm&term=${searchTerm}`;
  const searchResponse=[]

  const getDataFromApi = async(endpoint) => {
    return (await fetch(endpoint)).json()
  }

  const [artists,tracks,albums] = await Promise.all(
    [
      getDataFromApi(artistEndpoint),
      getDataFromApi(trackEndpoint),
      getDataFromApi(albumEndpoint),
    ]
  );
  searchResponse.push(artists.results, tracks.results, albums.results);
  return searchResponse
};
  
export default searchApi;