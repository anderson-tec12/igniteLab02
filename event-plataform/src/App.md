import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY  = gql`
  query {
    lessons {
      id
      title
    }
  }
`

type Lesson = {
  title:string,
  id:string
}

export function App() {
  const {data} = useQuery<{lessons:Lesson[]}>(GET_LESSONS_QUERY)
  console.log(data)
  useEffect(()=> {
    client.query({
      query:GET_LESSONS_QUERY
    }).then(resp => console.log(resp))
  }, [])

  return (
    <div>
      {data?.lessons.map(item => {
        return <li key={item.id}>{item.title}</li>
      })}
    </div>
  )
}


