export default {
  props: ['id'],
  template: `
    <section style="color:white; text-align:center; padding:40px;">
      <h1>Level: {{ id }}</h1>
      <p>Tu będą dane levela (nazwa, twórca, rekordy itp.)</p>

      <router-link to="/packs" style="color:cyan;">
        ⬅ Powrót do packów
      </router-link>
    </section>
  `
};

