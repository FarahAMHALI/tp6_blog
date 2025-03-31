import { ref } from 'vue';

export default function useGetPosts() {
    const posts = ref([]);
    const error = ref(null);

    const fetchPosts = async() => {
        try {
            const response = await fetch("http://localhost:3000/articles");
            posts.value = await response.json();
        } catch (err) {
            console.error("Error fetching posts:", err);
        }
    };

    return { posts, error, fetchPosts };
}