<template>
  <div id="app_accordian">
    <nav_bar/>
    <main class="main">
      <section>
        <div role="tablist">
    <b-card no-body class="mb-1" v-for="item in cards" :key="item.id">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle=" 'accordian-' +item.id" variant="primary">{{item.label}} </b-button>
      </b-card-header>
      <b-collapse :id=" 'accordian-' + item.id" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          
          <b-card-text>{{item.copy}}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

<!--    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="info">Trip Report 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 variant="info">Trip Report 3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

  -->
  </div>
      </section>



        </main>
  </div>
</template>

<script>
export default {
  name: 'accordian',
  
    data() {
      return {
        cards: [
         {
            id:1,
            label: 'Trip Report 1',
            copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet tempus massa, eget suscipit mi rhoncus nec. In pulvinar ultrices eros, vel sagittis diam maximus nec. Pellentesque imperdiet enim nec quam convallis ornare. Donec nec tincidunt est. Integer efficitur tortor in pretium porttitor. Sed luctus sodales ante rhoncus varius. Vivamus lobortis laoreet mi, non cursus mi bibendum ac. Praesent imperdiet mattis tortor vitae iaculis. Nunc ornare nunc at leo ultricies mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque sed vestibulum ligula, sit amet gravida mauris. Nunc sed dui nisl.Duis viverra turpis tellus, at facilisis lacus pretium nec. Vestibulum eros nisi, maximus ac libero at, porta aliquam lacus. In consequat orci neque, non hendrerit lacus sollicitudin nec. Mauris iaculis mi at dui feugiat, convallis vulputate odio interdum. Donec quis nulla nisi. Nunc lobortis sem ante, sit amet dictum augue gravida ut. Nulla non tellus at lectus placerat condimentum. Nulla tincidunt, turpis tincidunt euismod dapibus, augue ligula iaculis diam, sed cursus augue eros vulputate justo. Fusce vitae nisi ut est fermentum dapibus. Proin sed hendrerit arcu. Fusce quis sollicitudin diam. Ut in leo facilisis, interdum ante et, feugiat orci. Mauris tempus, arcu accumsan lobortis placerat, purus nisl mattis lacus, a elementum lectus nisi ut ante. Morbi aliquet erat nec nulla efficitur fringilla. Curabitur euismod maximus dui ut posuere.',
            
          },
          {
            id:2,
            label: 'Trip Report 2',
            copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus massa et arcu dapibus lobortis. Nulla vulputate ex quis metus consequat iaculis sed et velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent volutpat leo et congue fermentum. Praesent molestie urna sed consequat venenatis. Nam porta vel arcu vitae dictum. Suspendisse purus lectus, molestie nec urna eget, pulvinar ornare ante. Sed mattis sed justo laoreet imperdiet. Vivamus ut laoreet diam, quis semper mauris. Donec maximus pharetra elit at tristique. Proin nec tortor eget ligula accumsan tincidunt. Mauris mollis tellus felis, ac semper tortor porttitor vitae. Etiam non risus ornare, auctor nunc a, feugiat tellus. Curabitur ac nibh facilisis, faucibus nibh vitae, lobortis quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ac nulla scelerisque, euismod felis et, tempor nisi. Aenean et ante nulla. Nunc dolor ante, ornare interdum auctor quis, imperdiet vitae orci. Nam pellentesque semper rhoncus. Nulla vitae rhoncus ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis massa ac dui volutpat, eget vehicula ligula accumsan. Nam ut porttitor sapien. Maecenas dapibus nulla augue, et porta dolor ullamcorper tristique. Sed ornare nisl nibh, sed ultrices erat vulputate sit amet.',
          },
          {
            id:3,
            label: 'Trip Report 3',
            copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar mi id tortor ullamcorper, ac pulvinar risus laoreet. Ut consequat, ante non tempus fringilla, lorem magna interdum dolor, quis sagittis risus nisi vel augue. Nam lacinia leo a diam sollicitudin lacinia. Nam volutpat augue id urna efficitur tempor. Duis sed dolor interdum, euismod risus in, semper mi. Morbi id leo sit amet nisl vulputate lacinia eget vel felis. Nunc id finibus odio. Nunc a mauris hendrerit, volutpat urna vitae, eleifend lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam condimentum erat in libero porta egestas. Vivamus euismod lorem in orci euismod, quis accumsan leo finibus. Mauris convallis feugiat sapien, ac scelerisque nisi. Ut finibus elementum augue, sed placerat felis convallis et. Aenean imperdiet viverra urna, id facilisis est luctus id. Donec tempus facilisis felis, ac finibus ipsum vestibulum rhoncus. Ut pulvinar pellentesque arcu, ut egestas nunc tempor eu. Nam ante dui, imperdiet non ex quis, condimentum convallis quam. Cras mollis ex quis magna vestibulum, sit amet sodales mauris suscipit. Nunc urna massa, fermentum ut ex sed, tempus tristique velit. Pellentesque vel nisi quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sed tristique felis. Aliquam erat volutpat. Sed convallis ligula ac massa viverra, vel interdum nunc viverra. Morbi sit amet tincidunt diam. Sed in est ipsum. Proin quis est et turpis bibendum placerat at eu nisi.',
          }
        ]

//        text: `
//          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
//          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
//          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
//          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
//          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
//          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
//          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
//          synth nesciunt you probably haven't heard of them accusamus labore VHS.
//        `
       
      }
    }
  }

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
