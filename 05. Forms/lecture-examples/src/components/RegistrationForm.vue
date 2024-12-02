<script>
const AVAILABLE_SKILLS = [
  {
    id: 'vue',
    name: 'VueJS',
  },
  {
    id: 'react',
    name: 'ReactJS',
  },
  {
    id: 'angular',
    name: 'Angular',
  },
  {
    id: 'ts',
    name: 'TypeScript',
  },
  {
    id: 'js',
    name: 'JavaScript',
  },
  {
    id: 'node',
    name: 'NodeJS',
  },
  {
    id: 'go',
    name: 'Go',
  },
  {
    id: 'rust',
    name: 'Rust',
  },
];

const COUNTRIES = [
  { id: 'us', name: 'United States' },
  { id: 'ca', name: 'Canada' },
  { id: 'fr', name: 'France' },
  { id: 'de', name: 'Germany' },
  { id: 'jp', name: 'Japan' },
  { id: 'in', name: 'India' },
  { id: 'au', name: 'Australia' },
  { id: 'br', name: 'Brazil' },
  { id: 'cn', name: 'China' },
  { id: 'za', name: 'South Africa' },
];

export default {
  data() {
    return {
      data: {
        firstName: '',
        lastName: '',
        age: 0,
        email: '',
        skillset: [],
        gender: '',
        name: '',
      },
      skillsOption: AVAILABLE_SKILLS,
      countriesOptions: COUNTRIES,
    };
  },
};
</script>

<template>
  <section class="pageSection">
    <article>
      <header>Register form</header>
      <form>
        <div class="double-row">
          <fieldset>
            <label for="firstName">First name</label>
            <input id="firstName" v-model="data.firstName" type="text">
          </fieldset>
          <fieldset>
            <label for="lastName">Last name</label>
            <input id="lastName" v-model="data.lastName" type="text">
          </fieldset>
        </div>

        <div class="double-row">
          <fieldset>
            <label for="age">Age</label>
            <input id="age" v-model="data.age" type="number">
          </fieldset>
          <fieldset>
            <label for="email">Email</label>
            <input id="email" v-model="data.email" type="email">
          </fieldset>
          <fieldset>
            <p>Gender</p>
            <label>
              <input v-model="data.gender" type="radio" value="Male"> Male
            </label>
            <label>
              <input v-model="data.gender" type="radio" value="Female"> Female
            </label>
          </fieldset>
        </div>

        <fieldset>
          <label for="country">Country</label>
          <select id="country" v-model="data.name">
            <option value="">
              Please select your name
            </option>
            <option
              v-for="country in countriesOptions"
              :key="`country-${country.id}`"
              :value="country.id"
            >
              {{ country.name }}
            </option>
          </select>
        </fieldset>

        <fieldset>
          <p>Select your skill set</p>
          <label v-for="skill in skillsOption" :key="`skill-${skill.id}`">
            <input v-model="data.skillset" type="checkbox" :value="skill.id">
            <span>{{ skill.name }}</span>
          </label>
        </fieldset>
      </form>
      <button type="submit">
        Submit ➤
      </button>
    </article>

    <article>
      <div>
        <h2>Data viewer</h2>
        <ul>
          <li v-for="(value, key) in data" :key="key">
            {{ key }} is: {{ value }}
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<style scoped>
.pageSection {
    max-width: 1000px;
    margin: 4rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

form>*+* {
    margin-top: 1rem;
}

.double-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}
</style>
