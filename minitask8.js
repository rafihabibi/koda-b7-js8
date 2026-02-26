Const movie = {
    id: 1,
    title: "Avengers",
    Image: "Alaska",
    genre: ["Action", "Comedy"],
    cast: [{name: "Tom Cruise", role: "Hulk"}],
    getNameInfo: function() {
       return `Judul Film: ${this.title}, Gmbar Film: ${this.Image}, Genre Film: ${this.genre}`
    },
    getNameCast: function(){
         return this.cast[0].name;
    },
    setNameTitle: function(newTitle){
        this.title = newTitle;
    },
    setNameImage:function(newImage) {
        this.Image = newImage;
    }
};

console.log(movie.getNameInfo());

console.log(`Nama Cast: ${movie.getNameCast()}`);

movie.setNameTitle("Avengers Age of Ultron");
movie.setNameImage("Full Robot")

console.log(`Setelah Update Judul dan Gambar: ${movie.getNameInfo()}`);
