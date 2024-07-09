<template>
  <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
  <!--
  This example requires updating your template:

  ```
  <html class="bg-white h-full">
  <body class="h-full">
  ```
-->
  <div class="flex flex-col justify-center px-6 lg:px-8 py-12 min-h-full">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto w-auto h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company">
      <h2 class="mt-10 font-bold text-2xl text-center text-gray-900 leading-9 tracking-tight">Sign in to your account
      </h2>
    </div>

    <div class="sm:mx-auto mt-10 sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block font-medium text-gray-900 text-sm leading-6">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required
              class="block border-0 shadow-sm py-1.5 rounded-md w-full text-gray-900 placeholder:text-gray-400 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex justify-between items-center">
            <label for="password" class="block font-medium text-gray-900 text-sm leading-6">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required
              class="block border-0 shadow-sm py-1.5 rounded-md w-full text-gray-900 placeholder:text-gray-400 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <button type="submit"
            class="flex justify-center bg-indigo-600 hover:bg-indigo-500 shadow-sm px-3 py-1.5 rounded-md w-full font-semibold text-sm text-white leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
            in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-gray-500 text-sm">
        Not a member?
        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500 leading-6">Start a 14 day free trial</a>
      </p>
    </div>
  </div>

</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped></style>