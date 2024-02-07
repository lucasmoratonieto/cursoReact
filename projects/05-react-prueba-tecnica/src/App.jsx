import { useEffect, useState } from "react"
import './index.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_IMAGE_URL = 'https://cataas.com'

export function App (){

    const [fact, setFact] = useState()
    const[imageUrl, setImageUrl] = useState()


    useEffect(()=> {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data =>{
                const { fact } = data
                setFact(fact)

                const threeFirstWord = fact.split(' ', 3).join(' ')

                fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
                    .then(res => res.json())
                    .then(response => {
                        const {mimetype} = response
                        // console.log(mimetype)
                        setImageUrl(mimetype)
                    })
            })
            
    },[])

    return(
        <main >
            <h1>App de gatitos</h1>
            <div>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_IMAGE_URL}${imageUrl}`} alt={imageUrl} />}
            </div>
        </main>
    )
}

