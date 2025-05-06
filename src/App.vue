<template>
  <div class="app-wrapper">
    <nav class="navbar">
      <div class="container nav-content">
        <router-link to="/" class="logo">DevBlog</router-link>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          ☰
        </button>
        <div class="nav-links" :class="{ 'nav-open': isMenuOpen }">
          <router-link to="/" class="nav-link">Home</router-link>
          <div class="nav-link dropdown"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
            @click="toggleDropdown"
          >
            Categorias
            <span class="dropdown-arrow">▼</span>
            <transition name="fade">
              <ul v-if="showDropdown || isMenuOpen" class="dropdown-menu"
                @mouseenter="showDropdown = true"
                @mouseleave="showDropdown = false"
              >
                <li v-for="cat in categories" :key="cat">
                  <router-link :to="`/categories/${cat.toLowerCase()}`" class="dropdown-item">{{ cat }}</router-link>
                </li>
              </ul>
            </transition>
          </div>
          <router-link to="/about" class="nav-link">Sobre</router-link>
        </div>
      </div>
    </nav>

    <div class="container main-content">
      <router-view />
    </div>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 DevBlog. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { categories } from './data/categories';

const isMenuOpen = ref(false);
const showDropdown = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (!isMenuOpen.value) {
    showDropdown.value = false;
  }
};

const toggleDropdown = (e) => {
  // No mobile, abre/fecha ao clicar
  if (window.innerWidth <= 768) {
    e.stopPropagation();
    showDropdown.value = !showDropdown.value;
  }
};
</script>

<style>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  position: relative;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2563eb;
  text-decoration: none;
}

.main-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 500;
  position: relative;
  cursor: pointer;
}

.nav-link:hover {
  color: #2563eb;
}

.dropdown {
  user-select: none;
}

.dropdown-arrow {
  font-size: 0.7em;
  margin-left: 0.3em;
}

.dropdown-menu {
  display: block;
  position: absolute;
  top: 2.2rem;
  left: 0;
  min-width: 160px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 0.5rem 0;
  z-index: 20;
  list-style: none;
  margin: 0;
}

.dropdown-item {
  display: block;
  padding: 0.6rem 1.2rem;
  color: #4b5563;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  font-size: 1rem;
}

.dropdown-item:hover {
  background: #f3f4f6;
  color: #2563eb;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #4b5563;
  transition: color 0.3s;
  font-weight: 500;
}

.menu-toggle:hover {
  color: #2563eb;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    position: relative;
    z-index: 12;
  }

  .nav-links {
    display: none !important;
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 11;
  }

  .nav-links.nav-open {
    display: flex !important;
  }

  .nav-link {
    padding: 0.75rem 0;
    border-bottom: 1px solid #e5e7eb;
  }

  .nav-link:last-child {
    border-bottom: none;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    background: none;
    padding: 0;
    min-width: 0;
  }
  .dropdown-item {
    padding-left: 2rem;
  }
}

@media (max-width: 480px) {
  .nav-content {
    padding: 0.5rem 0;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.18s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
