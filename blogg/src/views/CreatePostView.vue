<template>
    <div class="tout">
      <h1>Add a New Article</h1>
      <form @submit.prevent="addarticle" class="aa">
        <div class="a"><input v-model="article.author" placeholder="Author" required /></div>
        <div class="a"><input v-model="article.title" placeholder="Title" required /></div>
        <div class="a"><input v-model="article.category" placeholder="Category" required /></div>
        <div class="a"><input v-model="article.body" placeholder="Body" required /> </div>
        <div class="a">
                <input
                    v-model="tagsInput"
                    @blur="processTags"
                    placeholder="Enter tags separated by commas"
                />
                <div class="tags">
                    <span v-for="(tag, index) in article.tags" :key="index" class="tag">
                        {{ tag }}
                        <button type="button" @click="removeTag(index)">x</button>
                    </span>
                </div>
            </div>

        <div class="butt">
          <div ><button type="submit">Add Article</button></div>
          <div ><button type="button" @click="returnlist">Return </button></div>
        </div>

      </form>

    </div>
</template>


<script>
  export default {
  name: 'AddJob',
  data(){
      return {
          article : {author:'', title:'', category:'',body:'',tags:[]},
          tagsInput:'',
      };
  },
  methods:{
    returnlist(){
      window.history.back(); 
    },
    processTags() {
    
      const tags = this.tagsInput
          .split(',')
          .map(tag => tag.trim())
          .filter(tag => tag !== '');

     
      this.article.tags = [...new Set([...this.article.tags, ...tags])]; 

     
      this.tagsInput = '';
    },
    removeTag(index) {
        this.article.tags.splice(index, 1); 
    },
    async addarticle(){
      try {
      const response = await fetch('http://localhost:3000/articles', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.article),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      this.returnlist(); 
  } catch (err) {
      console.error('Error adding article:', err);
    }
    }
  }
}
</script>


<style scoped>
/* Conteneur principal */
.aa {
    margin: 20px auto 50px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}

/* Section centrale */
.a {
    text-align: center;
    padding: 15px;
    width: 50%;
}

/* Titres */
h1 {
    font-family: 'Arial', sans-serif;
    font-size: 28px;
    color: #333;
    text-align: center;
    margin: 20px 0 10px;
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
    transition: background-color 0.2s ease-in-out;
    width: 150px;
}

button:hover {
    background-color: #06386e;
}

/* Conteneur général */
.tout {
    border: 2px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin: 50px auto;
    max-width: 800px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

/* Champs de saisie */
input {
    border-radius: 5px;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid #ccc;
    outline: none;
}

input:focus {
    border-color: #b31307;
}

/* Conteneur des boutons */
.butt {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 7px;
}

/* Boutons des tags */
.tags button {
    padding: 5px 10px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    background-color: #b31307;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.tags button:hover {
    background-color: #06386e;
}
</style>
