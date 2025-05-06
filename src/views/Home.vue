<template>
  <div class="grid">
    <main>
      <h1 class="page-title">Bem-vindo ao DevBlog</h1>
      <p class="intro">Explore artigos sobre desenvolvimento, tecnologia e programação.</p>
      
      <div class="posts">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </main>

    <aside class="sidebar">
      <div class="search-box">
        <input 
          type="text" 
          placeholder="Buscar posts..."
          v-model="searchTerm"
          @input="filterPosts"
        >
      </div>

      <div class="categories">
        <h3>Categorias</h3>
        <ul>
          <li v-for="category in categories" :key="category">
            <router-link :to="`/categories/${category.toLowerCase()}`">
              {{ category }}
            </router-link>
          </li>
        </ul>
      </div>

      <div class="newsletter">
        <h3>Newsletter</h3>
        <p>Receba as últimas atualizações no seu email</p>
        <form @submit.prevent="subscribe">
          <input type="email" placeholder="Seu email" v-model="email">
          <button class="button button-primary">Inscrever-se</button>
        </form>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PostCard from '../components/PostCard.vue';
import { posts } from '../data/posts';
import { suggestions } from '../data/suggestions';

const searchTerm = ref('');
const email = ref('');
const categories = ref(['JavaScript', 'Vue.js', 'React', 'Node.js', 'Python']);

const filterPosts = () => {
  // Implementar lógica de busca
  console.log('Buscando:', searchTerm.value);
};

const filterByCategory = (category) => {
  // Implementar filtro por categoria
  console.log('Filtrando por:', category);
};

const subscribe = () => {
  // Implementar lógica de newsletter
  console.log('Email cadastrado:', email.value);
  email.value = '';
  alert('Email cadastrado com sucesso!');
};
</script>

<style scoped>
.page-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
}

.intro {
  font-size: clamp(1rem, 2vw, 1.2rem);
}

.search-box input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.categories ul {
  list-style: none;
  padding: 0;
}

.categories li {
  margin-bottom: 0.5rem;
}

.categories a {
  color: #4b5563;
  text-decoration: none;
  transition: color 0.2s;
}

.categories a:hover {
  color: #2563eb;
}

.newsletter {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.newsletter input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .sidebar {
    margin-top: 2rem;
  }

  .search-box input,
  .newsletter input {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .categories ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .categories li {
    margin: 0;
  }

  .categories a {
    display: block;
    padding: 0.5rem 1rem;
    background: #f3f4f6;
    border-radius: 20px;
  }
}
</style>
