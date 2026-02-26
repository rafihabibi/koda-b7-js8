const movie = {
    id: 1,
    title: "Avengers",
    Image: "Alaska",
    genre: ["Action", "Comedy"],
    cast: [{name: "Tom Cruise"}, {role: "Hulk"}],
    getNameJudul: function() {
        return this.title;
    },
    getNameGambar: function() {
        return this.Image;
    },
    getNameGenre: function(){
        return this.genre;
    },
    getNameCast: function(){
        this.cast[0].name;
    },
    setName: function(newTitle){
        this.title = newTitle;
    },
    setName:function(newImage) {
        this.Image = newImage;
    }
};

console.log(`Judul Film: ${movie.getNameJudul()}, Gambar film: ${movie.getNameGambar()}, Genre: ${movie.getNameGenre()}`);

console.log(`Nama Cast: ${movie.getNameCast()}`);

this.newTitle = "Avengers age of ultron";
console.log(`New Title: ${this.newTitle}`);
this.newImage = "Full Robot";
console.log(`New Image: ${this.newImage}`);
