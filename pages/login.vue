<script setup>

const state = ref(0)

</script>

<template>
  <div class="w-full h-[100vh]">
    <section class="flex justify-center items-center gap-20 ">
      <div class="bg-[#11141A] w-96 h-[500px] rounded-xl">
        <div class="flex justify-center items-center my-8 *:mx-4 *:w-20 *:text-center *:font-semibold">
          <NuxtLink to="/login" class="text-2xl active">ورود</NuxtLink>
          <NuxtLink to="/register" class="text-2xl">ثبت نام</NuxtLink>
        </div>
        <form class="flex flex-col items-center *:mt-4" action="">
          <div>
            <h2 class="mb-3">ایمیل :</h2>
            <label
              class="input input-sm bg-transparent input-bordered flex items-center w-80 !border-[#cecece] !outline-none p-4 relative">
              <div>
                <p class="text-sm absolute left-3 top-2">email address</p>
                <p class="text-sm absolute left-24 top-1 w-[1px] h-6 bg-[#cecece]"></p>
              </div>
              <input dir="ltr" type="text" class="grow pl-[90px]" />
            </label>
          </div>
          <div>
            <h2 class="mb-3">رمز عبور :</h2>
            <label
              class="input input-sm bg-transparent input-bordered flex relative items-center w-80 !border-[#cecece] !outline-none p-4">
              <div v-if="state != 1" class="flex">
                <Icon @click="state = 1" name="mage:eye-fill" class="w-6 h-6 active:-rotate-90 transition-all" />
              </div>
              <div v-else class="flex">
                <Icon @click="state = 0" name="mage:eye-off" class="w-6 h-6 active:rotate-90 transition-all" />
              </div>
              <div>
                <p class="text-lg absolute left-3 top-2">****</p>
                <p class="text-lg absolute left-12 top-1 w-[1px]  h-6 bg-[#cecece]"></p>
              </div>
              <input :type="state == 1 ? 'text' : 'password'" class="grow" />
            </label>
          </div>
          <NuxtLink to=""
            class="!border-[#4FC3F7] my-2 btn !bg-[#4FC3F7] hover:text-white hover:!bg-transparent w-44 !min-h-2 h-10 text-lg text-black">
            ورود
          </NuxtLink>
          <NuxtLink to=""
            class="!my-1 btn !bg-transparent hover:!bg-[#4FC3F7] hover:!border-none hover:text-black  !border-[#4FC3F7] w-48 !min-h-2 h-10 text-lg text-white">
            ورود
            با رمز یکبار مصرف
          </NuxtLink>
          <div class="w-full flex *:mx-4 items-center">
            <p class="w-1/2 h-[1px] bg-[#F8F8F8]"></p>
            <p>یا</p>
            <p class="w-1/2 h-[1px] bg-[#F8F8F8]"></p>
          </div>
        </form>
        <form action="" class="flex items-center justify-center *:mx-2 mt-3">
          <div
            class="!flex !items-center btn hover:!bg-[#4FC3F7] hover:!border-none hover:text-black !bg-transparent text-white !min-h-2 h-10">
            <Icon name="logos:google-icon" class="w-4 h-4" />
            <NuxtLink to="">ثبت نام با گوگل</NuxtLink>
          </div>
          <div
            class="!flex !items-center btn hover:!bg-[#4FC3F7] hover:!border-none hover:text-black !bg-transparent text-white !min-h-2 h-10">
            <Icon name="bx:bxl-github" class="w-6 h-6" />
            <NuxtLink to="">ثبت نام با گیتهاب</NuxtLink>
          </div>
        </form>
      </div>
      <div class="flex flex-col items-center mt-10 ">
        <img src="/assets/img/logo.svg" alt="" />
        <img src="/assets/img/team.svg" alt="" />
      </div>
    </section>
  </div>
</template>

<style>
.active {
  @apply border-b-2 border-[#4FC3F7] text-[#4FC3F7];
}
</style>
