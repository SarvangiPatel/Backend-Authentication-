
const movies=[
    {id:1, name:"Inception", genre:"Sci-Fi"},
    {id:2, name:"The Dark Knight", genre:"Action"},
    {id:3, name:"Interstellar", genre:"Sci-Fi"},
    {id:4, name:"The Godfather", genre:"Crime"},
    {id:5, name:"Pulp Fiction", genre:"Crime"},
    {id:6, name:"The Shawshank Redemption", genre:"Drama"}
]

const series=[
    {id:1, name:"Breaking Bad", genre:"Crime"},
    {id:2, name:"Game of Thrones", genre:"Fantasy"},
    {id:3, name:"Stranger Things", genre:"Sci-Fi"},
    {id:4, name:"The Crown", genre:"Drama"},
    {id:5, name:"The Mandalorian", genre:"Sci-Fi"},
    {id:6, name:"Fargo", genre:"Crime"}
]


const moviecontroller ={
    movies:(req,res)=>{
        res.status(200).send({message:"list of movies", movies});
    },
    series:(req,res)=>{
        res.status(200).send({message:"list of series", series});
    },

}

module.exports=moviecontroller