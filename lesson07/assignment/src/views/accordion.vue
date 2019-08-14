<template>
  <div class="accordion">
       <section class="main_accordion">
            <div id="accordion">
                <div v-for="poster in posters" class="card">
                    <div class="card-header">
                        <a v-bind:href="'#' + poster.div_id" data-parent="#accordion"
                            data-toggle="collapse">
                            <img v-bind:src="poster.img_link" alt="">
                        </a>
                    </div>
                    <div v-bind:id="poster.div_id" class="collapse">
                        <div class="card-body">
                            <h3 class="display-4" data-toggle="modal" v-bind:data-target="'.' + poster.div_class">{{poster.movie_name}}</h3>
                            <div v-bind:class="'modal fade ' + poster.div_class" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                     {{poster.modal_line_1}}<br>
                                     {{poster.modal_line_2}}<br>
                                     {{poster.modal_line_3}}<br>
                                     {{poster.modal_line_4}}<br>
                                     {{poster.modal_line_5}}<br>
                                     {{poster.modal_line_6}}<br>
                                     {{poster.modal_line_7}}<br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<!--                 <div class="card">
                    <div class="card-header">
                        <a href="#two"
                            data-parent="#accordion" data-toggle="collapse">
                            <img src="../assets/anime-2.jpg" alt="">
                        </a>
                    </div>
                    <div id="two" class="collapse">
                        <div class="card-body">
                            <h3 class="display-4" data-toggle="modal" data-target=".bd-example-modal-lg_2">Weathering with You</h3>
                            <div class="modal fade bd-example-modal-lg_2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        Weathering with You is a Japanese animated film written and directed by <br>Makoto Shinkai and produced by CoMix Wave Films, following the 2016 <br>film Your Name. It was released in Japan on July 19, 2019, starring <br>Kotaro Daigo and Nana Mori. Wikipedia<br>
                                        Initial release: July 19, 2019 (Japan)<br>
                                        Director: Makoto Shinkai<br>
                                        Japanese: 天気の子<br>
                                        Story by: Makoto Shinkai<br>
                                        Screenplay: Makoto Shinkai<br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <a href="#three"
                            data-parent="#accordion" data-toggle="collapse">
                            <img src="../assets/anime-3.jpg" alt="">
                        </a>
                    </div>
                    <div id="three" class="collapse">
                        <div class="card-body">
                            <h3 class="display-4" data-toggle="modal" data-target=".bd-example-modal-lg_3">My Neighbor Totoro</h3>
                            <div class="modal fade bd-example-modal-lg_3" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl<br>Satsuke and her younger sister, Mei, as they settle into an old country house<br> with their father and wait for their mother to recover from an illness in an area hospital.<br>
                                        Release date: May 7, 1993 (USA)<br>
                                        Director: Hayao Miyazaki<br>
                                        Featured song: My Neighbor Totoro<br>
                                        Japanese: となりのトトロ<br>
                                        Cast: Shigesato Itoi, Chika Sakamoto, Sumi Shimamoto..<br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <div>
                <h2 class="display2 bryce">It doesn't go back now when you click. Although I copy pasted the whole code :c</h2>
            </div>
        </section>
  </div>
</template>

<style lang="scss" scoped>

#accordion{
    display: inline-block;
    display: flex;
    justify-content:space-around;
    padding: 2% 0;
    align-items:    baseline; 
    img{
        width: 400px;
        height: 550px;
        object-fit: cover;  
    }
    .card-body{
        padding: 0;
    }
    // Styling modal button
    h3{
        padding: 2% 0;
        font-weight: bold;
        margin: 0;
        cursor: pointer;
        text-align: center;
        font-size: 2.3em;
        transition: 0.5s;
        &:hover{
            background:lightblue;
            color: white;
        }
    }
}
.modal-content{
    font-size: 2em;
    padding: 5% 10%;
}
// making message comfortable for you to read
.bryce{
    text-align: center;
}
</style>

<script>
    export default{
        name: 'accordion',
        data() {
            return{
                posters: [
                {
                img_link : require('../assets/anime-1.jpg'),
                div_id : 'one',
                movie_name: 'Your Name',
                div_class : 'bd-example-modal-lg',

                modal_line_1 : 'A teenage boy and girl embark on a quest to meet each other for the first time after they magically swap bodies.',
                modal_line_2:'Release date: April 7, 2017 (USA)',
                modal_line_3:'Director: Makoto Shinkai',
                modal_line_4:'Japanese: 君の名は',
                modal_line_5:'Featured song: Zenzenzense',
                modal_line_6:'all time worldwide ($361,024,012). wikipedia.org',
                modal_line_7:'Did you know: "Your Name" is the second-highest-grossing anime film'
                },
                                {
                img_link : require('../assets/anime-2.jpg'),
                div_id : 'two',
                movie_name: 'Weathering with You',
                div_class : 'bd-example-modal-lg2',

                modal_line_1 : 'Weathering with You is a Japanese animated film written and directed by ',
                modal_line_2:'Makoto Shinkai and produced by CoMix Wave Films, following the 2016 ',
                modal_line_3:'film Your Name. It was released in Japan on July 19, 2019, starring Kotaro Daigo and Nana Mori. Wikipedia',
                modal_line_4:'Initial release: July 19, 2019 (Japan)',
                modal_line_5:'Director: Makoto Shinkai',
                modal_line_6:'Japanese: 天気の子',
                modal_line_7:'Story by: Makoto Shinkai'
                },
                                {
                img_link : require('../assets/anime-3.jpg'),
                div_id : 'three',
                movie_name: 'My Neighbor Totoro',
                div_class : 'bd-example-modal-lg3',

                modal_line_1 : 'This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl',
                modal_line_2:'Satsuke and her younger sister, Mei, as they settle into an old country house',
                modal_line_3:'with their father and wait for their mother to recover from an illness in an area hospital.',
                modal_line_4:'Release date: May 7, 1993 (USA)',
                modal_line_5:'Director: Hayao Miyazaki',
                modal_line_6:'Featured song: My Neighbor Totoro',
                modal_line_7:'Japanese: となりのトトロ'
                }
                ]
            }
        }
    }
</script>