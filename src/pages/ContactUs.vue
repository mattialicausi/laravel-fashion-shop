<template>
  <div class="container my">
    <form class="frm" ref="form" @submit.prevent="sendEmail">
      <!-- <label>Name</label> -->
      <input class="name" placeholder="Nome" type="text" name="user_name" />
      <!-- <label>Email</label> -->
      <input class="mail" placeholder="Email" type="email" name="user_email" />
      <!-- <label>Message</label> -->
      <textarea
        class="message"
        placeholder="Scrivi un messaggio..."
        name="message"
      ></textarea>
      <input class="sbmt" type="submit" value="Send" />
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_xs5p0sg",
          "template_4o69yqe",
          this.$refs.form,
          "Ucx5jimnfr2CXu0Fc"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.my {
  height: calc(100vh - (230px));
}
</style>
