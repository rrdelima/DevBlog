<template>
  <div class="category-page">
    <h1 class="category-title">Categoria: {{ categoryName }}</h1>
    <div v-if="filteredPosts.length > 0" class="posts">
      <PostCard v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>
    <div v-else class="no-posts">
      <p>Nenhum post encontrado para esta categoria.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard.vue';

const route = useRoute();
const categoryName = computed(() => route.params.category);

const filteredPosts = computed(() =>
  posts.filter(post => post.category.toLowerCase() === categoryName.value.toLowerCase())
);
</script>

<style scoped>
.category-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.no-posts {
  color: #888;
  font-size: 1.2rem;
  margin-top: 2rem;
}
</style> 