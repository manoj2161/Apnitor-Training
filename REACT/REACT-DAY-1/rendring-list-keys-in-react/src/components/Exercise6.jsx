function Exercise6(){
    const songs = [
  { id: 1, title: "Midnight Drive", duration: 3.5 },
  { id: 2, title: "Ocean Echo", duration: 4.8 },
  { id: 3, title: "Silent Hours", duration: 5.2 },
  { id: 4, title: "Quick Beat", duration: 2.1 },
];
    return (<>
        <p>
    {
        songs.filter((song)=>
         song.duration>4
    ).map((song)=>
        <li key={song.id}>Title : {song.title} duration : {song.duration}</li>
    )
}
</p>
    </>)
}

export default Exercise6