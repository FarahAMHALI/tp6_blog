<template>
    <div class="tag-view">
        <h1>Posts with tag: {{ tag }}</h1>
        <div v-if="filteredPosts.length === 0">No posts found for this tag.</div>
        <div v-else>
            <div v-for="post in filteredPosts" :key="post.id" class="all">
                <h2>{{ post.title }}</h2>
                <p>{{ post.body.substring(0, 50) }}...</p>
                <router-link :to="'/post/' + post.id">Read more</router-link>
            </div>
        </div>
        <div ><button type="button" @click="returnlist">Return </button></div>
    </div>
</template>

<script>
import { computed } from "vue";
import useGetPosts from "../composables/getPosts"; // Fetch all posts
import { useRoute } from "vue-router";

export default {
    name: "TagView",
    setup() {
        const { posts, fetchPosts } = useGetPosts();
        const route = useRoute();
        const tag = route.params.tag;

        fetchPosts(); 

        const filteredPosts = computed(() =>
            posts.value.filter((post) => post.tags.includes(tag))
        );

        return { tag, filteredPosts };
    },
    methods:{
        returnlist(){
      window.history.back(); 
    },
    }
};
</script>

<style scoped>
/* Conteneur principal */
.tag-view {
    padding: 20px;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Bloc de contenu */
.all {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.all:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Titres */
.all h2 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #222;
}

/* Texte */
.all p {
    font-size: 14px;
    color: #555;
    line-height: 1.5;
}

/* Liens */
.all a {
    color: #06376b;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
}

.all a:hover {
    text-decoration: underline;
    color: #b31307;
}

/* Boutons */
button {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #b31307;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
    width: 150px;
}

button:hover {
    background-color: #06386e;
    transform: scale(1.05);
}
</style>
