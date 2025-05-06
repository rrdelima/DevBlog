<template>
  <div v-if="post" class="post-detalhe">
    <h1>{{ post.title }}</h1>
    <div class="post-meta">
      <span>{{ formatDate(post.date) }}</span>
      <span class="separator">•</span>
      <span>{{ post.category }}</span>
      <span class="separator">•</span>
      <span>Por {{ post.author.name }}</span>
    </div>
    <div class="post-content" v-html="post.content"></div>
  </div>
  <div v-else>
    <p>Post não encontrado.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { posts } from '../data/posts';

const route = useRoute();
const post = posts.find((p) => p.slug === route.params.slug);

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};
</script>

<style scoped>
.post-detalhe {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.post-detalhe h1 {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.post-meta {
  color: #6b7280;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}
.separator {
  margin: 0 0.5rem;
}
.post-content {
  font-size: 1.15rem;
  color: #222;
  line-height: 1.7;
}
.post-content img {
  max-width: 100%;
  border-radius: 8px;
  margin: 2rem 0;
  display: block;
}
.post-content h2 {
  margin-top: 2rem;
  font-size: 1.4rem;
  color: #2563eb;
}
.post-content ul {
  margin: 1rem 0 1rem 2rem;
  list-style: disc inside;
}
</style>
