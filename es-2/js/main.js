var app = new Vue({
  el: '#app',
  data: {
    musics:[],
    genSel: "All"
  },
  mounted(){
    //prelevo i dati tramite axios e li inserisco nel mio array
    axios.get('http://localhost/php-ajax-dischi/es-2/server.php').then((mySong)=> {
        this.musics = mySong.data.response;
    });

  },
  computed:{
    //funzione per filtrare l'array secondo il genere di appartenenza
    filterGenre(){
      if(this.genSel === "All"){
        return this.musics;
      } else{
        return this.musics.filter((el)=>el.genre === this.genSel);
      }
    }
  }
});
