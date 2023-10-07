import {useState, useEffect} from 'react';
import Item from './Item';

function App() {

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
    const jsonData = await data.json();

    setItems([...items, ...jsonData]);
  }

  const handleScroll = () => {
    try {
      if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    }

    catch(error) {

    }

  }

  useEffect(() => {
    fetchData();
  }, [page])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <div style = {{display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center"}}>
      <h2> Products </h2>

      {
        items.length > 0 && 
        <div style = {{display : "flex", justifyContent : "center", flexWrap : "wrap"}}>
          {
            items.map(item => {
              return (
                <div style = {{padding : "50px"}}>
                  <Item title = {item.title} imageUrl={item.thumbnailUrl}></Item>
                </div>
              )
            })
          }
        </div>
      }


    </div>
  )
}

export default App
