<template>
    <div>
      {{ anime }}
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      anime: null
    }
  },
  methods: {
    animGet() {
      return axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
        .then(response => { this.anime = response.data })
    }
  },
  mounted() {
    this.animGet();
  }
}
</script>
