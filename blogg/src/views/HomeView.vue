<template>
  <div class="tout">
    <div class="post"><PostList/></div>
    <div class="tag">

      <h3>Tags</h3>

      <div class="tags">
        <div v-for="tag in uniqueTags"  :key="tag">-
          <router-link :to="'/tags/' + tag" class="tagg"> {{ tag }} </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';

export default {
  name: 'HomeView',
  components : {PostList},
  data(){
    return {
      tags: [] ,
    }
  },
  computed: {
    uniqueTags() {
      // Compute unique tags by removing duplicates
      return [...new Set(this.tags)];
    },
  },
  methods: {
    async fetchTags() {
      try {
        const response = await fetch('http://localhost:3000/articles'); // Fetch articles from the JSON server
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const articles = await response.json();
        // Extract all tags from the articles and flatten them into a single array
        this.tags = articles.flatMap((article) => article.tags);
      } catch (err) {
        console.error('Error fetching tags:', err);
      }
    },
  },
  mounted() {
    // Fetch tags when the component is mounted
    this.fetchTags();}
}
</script>

<style>
/* Conteneur principal */
.tout {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
}

/* Section principale */
.post {
    width: 85%;
    max-width: 800px;
}

/* Section des tags */
.tag {
    width: 10%;
    max-width: 150px;
}

/* Liste des tags */
.tags {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

/* Style des tags */
.tagg {
    color: rgb(8, 8, 92);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    transition: color 0.2s ease-in-out;
}

.tagg:hover {
    color: rgb(5, 5, 150);
}

/* Titres */
h3 {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 5px;
}
</style>
