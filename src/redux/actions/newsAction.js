const newsAction = {}

newsAction.getAllNews = () => {
    const fetchData = async (dispatch) => {
        try {
            dispatch({type: "GET ALL NEWS REQUEST", payload: null})
            const url = "https://newsapi.org/v2/everything?q=everything&apiKey=950ad1ed22c94986a2938b8fdc61d7d7"
            const res = await fetch(url)
            const data = await res.json()
            dispatch({type:"GET ALL NEWS", payload: data})
        } catch (error) {
            dispatch({type: "GET ALL NEWS FAIL"})
            
        }
       
      } 
      fetchData()
}

export default newsAction