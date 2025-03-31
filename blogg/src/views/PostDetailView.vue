<template>
  <div v-if="post" class="tout">
      <h1>Article Details</h1>

      <div> 
        <h2>{{ post.title }}</h2>
        <div>Author: {{ post.author }}</div>
        <div>Category: {{ post.category }}</div>
        <br><br>
        <div>{{ post.body }}</div>

        <br><br>
        <div>Tags : 
            <div v-for="tag in post.tags"  :key="tag">-
                <router-link :to="'/tags/' + tag" class="tagg"> {{ tag }} </router-link>
            </div>
        </div>
      </div>

      <div class="butt">
          <button type="button" @click="returnlist">Return</button>
      </div>
  </div>

</template>

<script>
import { onMounted } from 'vue';
import useGetPost from '../composables/getPost';
import { useRoute } from 'vue-router';

export default {
    name: 'PostDetailView',
    setup() {
        const { post, error, fetchPost } = useGetPost();
        const route = useRoute();

       
        onMounted(() => {
            fetchPost(route.params.id);
        });

        const returnlist = () => {
            window.history.back(); 
        };

        return { post, error, returnlist };
    },
};
</script>

<style scoped>
/* Conteneur principal */
.tout {
    border: 2px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin: 50px auto;
    max-width: 800px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    font-family: Arial, Helvetica, sans-serif;
}

/* Boutons */
button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #b31307;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, transform 0.2s;
    width: 150px;
}

button:hover {
    background-color: #06386e;
    transform: scale(1.05);
}

/* Messages d'erreur */
.error {
    color: red;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
}

/* Section des tags */
.tags {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

/* Style d'un tag */
.tag {
    display: inline-block;
    background-color: #f0f0f0;
    color: #333;
    padding: 6px 12px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.tag:hover {
    background-color: #ddd;
    transform: scale(1.1);
}

/* Boutons alignés */
.butt {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: center;
}
</style>
