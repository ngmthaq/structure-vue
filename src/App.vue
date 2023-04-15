<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { compose, Component } from "@/core/component.core";
import HelloWorld from "./components/HelloWorld.vue";

const app = compose(
  class App extends Component {
    public state = this.reactive({ msg: "Multiply", number: 0, items: [1, 2, 3, 4, 5], text: "" });

    public doubleNumber = this.computed(() => this.state.number * 2);

    protected watcher() {
      this.watch(
        () => this.state.number,
        (value) => {
          console.log(value);
        }
      );
    }

    public onIncrease() {
      this.state.number += 1;
    }

    public onChangeArray() {
      this.state.items = this.state.items.map((item) => item * 2);
    }

    protected onMounted(): void {
      console.info("mounted");
    }
  }
);
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <div>
    <div>
      <button @click="app.onIncrease">Increase</button>
      <button @click="app.onChangeArray">Change array</button>
    </div>

    <p>{{ app.state.msg }}: {{ app.state.number }} x 2 = {{ app.doubleNumber }}</p>

    <div>
      <p v-for="item in app.state.items" :key="item">{{ item }}</p>
    </div>

    <div>
      <input type="text" v-model.trim="app.state.text" />
      <p>User type: {{ app.state.text }}</p>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
