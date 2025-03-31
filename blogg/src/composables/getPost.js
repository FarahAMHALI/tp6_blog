import { ref } from 'vue';

export default function useGetPost() {
    const post = ref([]);
    const error = ref(null);

    const fetchPost = async(id) => {
        try {
            const response = await fetch(`http://localhost:3000/articles/${id}`);
            post.value = await response.json();
        } catch (err) {
            console.error("Error fetching posts:", err);
        }
    };

    return { post, error, fetchPost };
}