import ResultsList from '../../components/ResultsList'

function SearchResults(results) {
    const showList=(list)=>{
        switch (list[0].wrapperType) {
            case 'artist':
                return <ResultsList 
                    key='artitstsList' 
                    resultsList={list}
                    listTitle = 'artist'
                    entryToDisplay = 'artistName'
                />
            case 'collection':
                return <ResultsList 
                    key='albumsList' 
                    resultsList={list}
                    listTitle = 'album'
                    entryToDisplay = 'collectionName'
                />
            case 'track':
                return <ResultsList 
                    key='tracksList' 
                    resultsList={list}
                    listTitle = 'song'
                    entryToDisplay = 'trackName'
                />
        
            default:
                break;
        }
    }
    return(
        results.results.length > 0  && 
        results.results.map(result=>{
            return result.length > 0 && result[0].wrapperType &&
            showList(result)
        }) 
    ) 
}

export default SearchResults;