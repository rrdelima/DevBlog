<template>
  <div class="about-page">
    <h1>Sobre o DevBlog</h1>
    <img src="/images/devblog-team.png" alt="Equipe DevBlog" class="about-img" />
    <p>
      O <strong>DevBlog</strong> é um projeto criado para compartilhar conhecimento sobre desenvolvimento web, programação e tecnologia. Nosso objetivo é ajudar desenvolvedores de todos os níveis a aprenderem novas ferramentas, frameworks e boas práticas do mercado.
    </p>
    <p>
      Aqui você encontra artigos sobre <b>JavaScript</b>, <b>Vue.js</b>, <b>React</b>, <b>Node.js</b>, <b>Python</b> e muito mais, sempre com exemplos práticos e linguagem acessível.
    </p>
    <h2>Quem faz o DevBlog?</h2>
    <img src="/avatars/joao.jpg" alt="João Silva" class="author-img" />
    <p>
      <b>João Silva</b> é desenvolvedor full stack, apaixonado por ensinar e aprender. Atua há mais de 20 anos no mercado de tecnologia, já participou de diversos projetos open source e adora compartilhar dicas e tutoriais com a comunidade.
    </p>
    <p>
      Siga o DevBlog nas redes sociais e fique por dentro das novidades!
    </p>
  </div>
</template>

<script setup>
// Nenhuma lógica necessária para About
</script>

<style scoped>
.about-page {
  background: #fff;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  max-width: 700px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  text-align: center;
}
.about-page h1 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}
.about-page h2 {
  font-size: 1.4rem;
  margin: 2.5rem 0 1rem 0;
  color: #2563eb;
}
.about-img {
  max-width: 220px;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.author-img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin: 1.5rem 0 1rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
</style> 