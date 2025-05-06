<template>
  <article class="post-card">
    <div class="post-meta">
      <span>{{ formatDate(post.date) }}</span>
      <span class="separator">•</span>
      <span>{{ post.category }}</span>
    </div>
    
    <router-link :to="`/post/${post.slug}`" class="post-title">
      <h2>{{ post.title }}</h2>
    </router-link>
    
    <p class="post-description">{{ post.description }}</p>
    
    <div class="post-footer">
      <router-link :to="`/post/${post.slug}`" class="button button-primary">
        Ler mais
      </router-link>
      
      <div class="post-stats">
        <button class="stat-button" @click="handleLike">
          ❤️ {{ post.likes }}
        </button>
        <button class="stat-button" @click="handleComment">
          💬 {{ post.comments }}
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

const handleLike = () => {
  // Implementar lógica de likes
  console.log('Like clicked');
};

const handleComment = () => {
  // Implementar lógica de comentários
  console.log('Comment clicked');
};
</script>

<style scoped>
.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.post-stats {
  display: flex;
  gap: 1rem;
}

.stat-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  transition: color 0.2s;
}

.stat-button:hover {
  color: #2563eb;
}

.separator {
  margin: 0 0.5rem;
}

/* Ajustes responsivos */
.post-title h2 {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
}

@media (max-width: 768px) {
  .post-card {
    margin-bottom: 1rem;
  }

  .post-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .post-footer {
    flex-direction: column;
    gap: 1rem;
  }

  .post-stats {
    justify-content: space-around;
    width: 100%;
  }

  .stat-button {
    padding: 0.5rem;
  }
}
</style>
