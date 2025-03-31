<template>
    <div class="tout">
  
        <h1>Available Articles</h1>
        <div class="butt"><router-link to="/add"><button> Add Article </button></router-link></div>
        
        <div class="articles">
            <div v-for="article in articles" :key="article.id" class="article">
              <h2><router-link :to="'/post/' + article.id" class="link2"> {{article.title}} </router-link></h2>
            </div>
        </div>

        <div class="butt"><router-link to="/posts"><button> Post Details </button></router-link></div>
  
    </div>
</template>
  
<script>
import useGetPosts from '../composables/getPosts';

export default {
    name: 'PostList',
    setup() {
        const { posts: articles, error, fetchPosts } = useGetPosts();

        // Fetch books when the component is mounted
        fetchPosts();

        return { articles, error };
    },
};
</script>
<style scoped>
/* Titres */
h1 {
    font-size: 50px;
    text-align: center;
    color: #222;
    margin-bottom: 20px;
}

/* Conteneur principal */
.tout {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    font-family: 'Arial', sans-serif;
}

/* Section des articles */
.articles {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 30px;
    width: 100%;
}

/* Style d'un article */
.article {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 600px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.article:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}

/* Titres des articles */
h2 {
    font-size: 35px;
    color: #222;
}

/* Liens */
.link2 {
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #83081d;
    transition: color 0.3s ease-in-out;
}

.link2:hover {
    color: #5c0613;
    text-decoration: underline;
}

.link {
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #06376b;
    transition: color 0.3s ease-in-out;
}

.link:hover {
    color: #802110;
    text-decoration: underline;
}

/* Boutons */
.butt {
    margin-bottom: 20px;
}

.butt button {
    background-color: #06376b;
    color: #ffffff;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
}

.butt button:hover {
    background-color: #7a1c0b;
    transform: scale(1.05);
}
</style>
