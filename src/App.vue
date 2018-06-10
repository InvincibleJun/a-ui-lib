<template>
  <div id="app">
    <c-tabel :data="data" :config="config"></c-tabel>
  </div>
</template>

<script>
import Modal from './components/modal'
import CTabel from './components/table'
import CTabelColumn from './components/table-column'

export default {
  name: 'App',
  components: {
    CTabel,
    CTabelColumn
  },
  data () {
    return {
      config: [
        {
          title: '姓名',
          // key: 'name',
          children: [
            {
              key: 'age',
              title: '年龄',
              children: [
                {
                  title: 'a',
                  key: 'a'
                }
              ]
            },
            {
              key: 'isBoy',
              title: '是否男'
            },

            {
              key: 'isBoy',
              title: '是否男'
            }
          ]
        },
        {
          title: 'id',
          key: 'id'
        },
        {
          title: '性别',
          key: 'sex'
        }
      ],
      data: [
        {
          id: 1,
          name: 1,
          sex: 1,
        },
        {
          id: 2,
          name: 2,
          sex: 2,          
        },
        {
          id: 3,
          name: 3,
          sex: 1,          
          
        },
        {
          id: 4,
          name: 4,
          sex: 2,                    
        }
      ],
      show: false,
      s: false,
      a: false,
      b: false,
      c: false,
      d: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
