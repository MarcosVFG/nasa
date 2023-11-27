import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
    const res = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`);
    const data = await res.json();
    return {
        props: {data: data}
    }
}
const Main = ({data}) => {
    
    console.log(data)
    return ( 
            <div className={styles.container}>
                <header>
                    <h1>THE PICTURE OF THE DAY</h1>
                </header>
                <img src={data.hdurl}
                 className={styles.imagem}/>
                 <h1>{data.title}</h1>
           </div>
  )
}

export default Main;


